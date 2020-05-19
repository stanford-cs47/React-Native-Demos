import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { getPopularPhotos } from '../API/Unsplash.js';
import FeedItem from '../Components/FeedItem';

export default class Feed extends React.Component {

  static defaultProps = { content: null }

  state = {
    loading: false,
    feedEntries: [],
  }

  componentDidMount(){
    if (this.props.content) {
      this.setState({feedEntries: this.props.content});
    } else {
      this.getFeedData();
    }
  }

  getFeedData = () => {
    this.setState({loading: true});
    getPopularPhotos(json => { //this code will be fetching images from the Unsplash API
      this.setState({feedEntries: json, loading: false});
    });
  }

  onProfilePressed = (username) => {
    this.props.onProfileRequested(username);
  }

  _keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => {
    return (
      <FeedItem 
        content={item}
        onProfilePressed={this.onProfilePressed}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getTabContent()}
      </View>
    );
  }

  getTabContent = () => {
    const { loading } = this.state;
    if (loading) {
      return (
        <ActivityIndicator />
      );
    } else {
      return (
        <FlatList
          data={this.state.feedEntries}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
