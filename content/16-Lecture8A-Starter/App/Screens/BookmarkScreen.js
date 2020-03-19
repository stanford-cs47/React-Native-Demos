import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import styles from './Styles/BookmarkScreen.styles';
import firestore from '../../firebase';
import firebase from 'firebase';

export default class BookmarkScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Bookmarks',
    };
  };

  state = {
    bookmarks: [],
    isRefreshing: false,
    unsubscribe: null,
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    let bookmarksRef = firestore.collection('users/' + user.uid + '/bookmarks');
    // We want our list of bookmarks to update in realtime (so the user doesn't have to
    // refresh the page to see any changes). This basically waits for a change in the 
    // bookmarks collection and then tells the program to retrieve all of the bookmarks
    // again (it basically calls your code for getBookmarks).
    let unsubscribe = bookmarksRef.onSnapshot(() => {
      this.reloadBookmarks();
    });
    this.setState({ unsubscribe });
    
    this.reloadBookmarks(); // Initial loading of bookmarks
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }


  // STEP 4: Read all of the user's bookmarks from the database
  // ---------------------------------------------------------------------------------------
  // Make sure you understand what path you need to pass in to get the correct reference 
  // for your BOOKMARKS COLLECTION.
  //
  // To check if it's working, bookmark a post and check the bookmark tab. That post should be
  // listed in that tab. Un-bookmark that post and check the bookmark tab again. Your list should
  // be updated to reflect this change.
  getBookmarks = async () => {
    try {
      const user = firebase.auth().currentUser;
      let bookmarks = [];

      // Add your code here

      return (bookmarks ? bookmarks : []);
    } catch (error) {
      console.log(error);
    }
    return ([]);
  }

  bookmarkPressed = (item) => {
    const { navigate } = this.props.navigation;
    navigate('BookmarkViewer', { content: item });
  }

  reloadBookmarks = async () => {
    this.setState({isRefreshing: true});
    const bookmarks = await this.getBookmarks();
    this.setState({bookmarks: bookmarks, isRefreshing: false});
  }

  _keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.bookmarkPressed(item)} key={item.id}>
      <View style={styles.bookmarkContainer}>
        <Image style={styles.thumbImage} source={{uri: item.urls.thumb}}/>
        <View style={styles.textContainer}>
          <Text style={material.body1}>{item.description || "No Description"}</Text>
          <Text style={material.caption}>By {item.user.name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  render() {

    let emptyList = null;
    if (!this.state.bookmarks[0]) {
      emptyList = (<Text style={{marginTop: Metrics.navBarHeight}}>No bookmarks exist yet!</Text>);
    }

    return (
      <View style={styles.container}>

        {emptyList}

        <FlatList
          data={this.state.bookmarks}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          onRefresh={this.reloadBookmarks}
          refreshing={this.state.isRefreshing}
        />

      </View>
    );
  }

}
