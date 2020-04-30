import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import { Metrics, Images, Colors } from '../Themes';
import { material } from 'react-native-typography';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import styles from './Styles/FeedItem.styles';
import AppConfig from '../Config/AppConfig';

export default class FeedItem extends React.Component {
  static defaultProps = { content: {} }

  static propTypes = {
    content: PropTypes.object.isRequired,
    onProfilePressed: PropTypes.func,
  }

  state = {
    loading: false,
    bookmarked: false,
    savingBookmark: false,
  }

  componentDidMount = async () => {
    const { content = {} } = this.props;
    const isBookmarked = await this.isItemBookmarked(content);
    if (isBookmarked) this.setState({bookmarked: true});
  }

  sharedPressed = () => {
    const { content = {} } = this.props;
    const { urls = {} } = content;

    Share.share({message: content.description, url: urls.full})
  }

  bookmarkPressed = () => {
    if (this.state.savingBookmark) return; //stop if already saving

    const { content = {} } = this.props;
    if (!this.state.bookmarked) {
      this.saveBookmark(content);
    } else {
      this.deleteBookmark(content);
    }

    this.setState({bookmarked: !this.state.bookmarked});
  }

  profilePressed = () => {
    if (this.props.onProfilePressed) {
      const { content = {} } = this.props;
      const { user = {} } = content;

      this.props.onProfilePressed(user.username);
    }
  }

  isItemBookmarked = async (newItem) => {
    const bookmarks = await this._getBookmarks();
    return this._hasItem(bookmarks, newItem);
  }

  render() {
    const { content = {} } = this.props;
    const { urls = {} } = content;
    const { user = {} } = content;
    const { profile_image: profileImage = {} } = user;

    const imageDim = this.calculateImageRect(content.width, content.height);

    return (
      <View style={styles.container}>

        <View style={styles.userContainer}>

          <TouchableOpacity onPress={this.profilePressed}>
            <Image style={styles.profileImage}
              source={{uri: profileImage.medium}}
              defaultSource={Images.placeholder}/>
          </TouchableOpacity>

          <TouchableOpacity style={[{flex: 1}, styles.profileName]} onPress={this.profilePressed}>
            <Text style={material.body2}>{user.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{padding:5}} onPress={this.bookmarkPressed}>
            <FontAwesome
              name={this.state.bookmarked ? "bookmark" : "bookmark-o"}
              size={Metrics.icons.small}
              color={Colors.steel} />
          </TouchableOpacity>
        </View>

        <View style={[styles.mainImageContainer, {width: imageDim.width, height: imageDim.height}]}>
          <Image
            style={{width: imageDim.width, height: imageDim.height}}
            resizeMode='contain'
            onLoadStart={(e) => this.setState({loading: true})}
            onLoad={(e) => this.setState({loading: false})}
            source={{uri: urls.full}}/>

          {this.showImageLoader(imageDim.width, imageDim.height)}
        </View>

        <View style={styles.likesContainer}>

          <Entypo
            name="heart"
            size={Metrics.icons.medium}
            color={Colors.ember} />

          <Text style={[material.body1, {flex: 1, marginLeft: 5}]}>{content.likes}</Text>

          <TouchableOpacity onPress={this.sharedPressed}>
            <Entypo
              name="share-alternative"
              size={Metrics.icons.small}
              color={Colors.steel} />
          </TouchableOpacity>

        </View>

        <View style={styles.descContainer}>
          <Text style={material.body1}>{content.description || 'No Description'}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={material.caption}>{this.getPostedDate()}</Text>
        </View>

      </View>
    );
  }

  getPostedDate = () => {
    const { content = {} } = this.props;
    const postedDate = new Date(content.created_at);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return postedDate.toLocaleDateString('en', options);
  }

  showImageLoader = (width, height) => {
    const { loading } = this.state;

    if (loading) {
      return (
        <View style={[styles.mainImageLoader, {width: width, height: height}]}>
          <ActivityIndicator />
        </View>
      );
    }
  }

  calculateImageRect = (oldWidth, oldHeight) => {
    const newWidth = Metrics.screenWidth;

    const aspectRatio = oldWidth / oldHeight;
    const newHeight = newWidth / aspectRatio;   //div width by aspect ratio

    return {width: newWidth, height: newHeight};
  }

  saveBookmark = async (newItem) => {
    this.setState({savingBookmark: true});

    const bookmarks = await this._getBookmarks();
    await this._storeBookmark(bookmarks, newItem);

    this.setState({savingBookmark: false});
  }

  deleteBookmark = async (item) => {
    this.setState({savingBookmark: true});

    const bookmarks = await this._getBookmarks();
    await this._removeBookmark(bookmarks, item);

    this.setState({savingBookmark: false});
  }

  _storeBookmark = async (bookmarks, newBookmarkItem) => {
    try {
      if (this._hasItem(bookmarks, newBookmarkItem)) return; //already included, don't add again

      let mutableBookmarks = [...bookmarks, newBookmarkItem];
      /* PART 1: store the new mutableBookmarks arary in AsyncStorage, use AppConfig.keys.bookmarks as the key*/
      /* You will need to call JSON.stringify on the mutableBookmarks object, since AsyncStorage only takes strings*/
    } catch (error) {
      // Error saving data
    }
  }

  _removeBookmark = async (bookmarks, newItem) => {
    const mutableBookmarks = bookmarks;
    for (var index = 0; index < mutableBookmarks.length; index++) {
      if (mutableBookmarks[index].id === newItem.id) {
        mutableBookmarks.splice(index, 1);
        break;
      }
    }

    /* PART 2: store the new mutableBookmarks arary (now with a removed item) in AsyncStorage, use AppConfig.keys.bookmarks as the key*/
    /* You will need to call JSON.stringify on the mutableBookmarks object, since AsyncStorage only takes strings*/
    /* Wrap your call on a try, catch block like in part 1*/
  }

  _getBookmarks = async () => {
    try {
      const bookmark = await AsyncStorage.getItem(AppConfig.keys.bookmarks);
      return (bookmark ? JSON.parse(bookmark) : []);
    } catch (error) {
      console.log(error);
    }
    return ([]);
  }

  _hasItem = (bookmarks, newItem) => {
    if (!bookmarks) return false;

    for (var index = 0; index < bookmarks.length; index++) {
      if (bookmarks[index].id === newItem.id) {
        return true;
      }
    }

    return false;
  }

}
