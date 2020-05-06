import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, AsyncStorage, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import AppConfig from '../Config/AppConfig';
import FeedItem from '../Components/FeedItem'
import styles from './Styles/BookmarkScreen.styles'

export default function BookmarkScreen({ navigation }) {
  [bookmarks, setBookmarks] = useState([]);
  [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    reloadBookmarks();
  }, [reloadBookmarks]);

  const getBookmarks = async () => {
    try {
      const bookmark = await AsyncStorage.getItem(AppConfig.keys.bookmarks);
      return (bookmark ? JSON.parse(bookmark) : []);
    } catch (error) {
      console.log(error);
    }
    return ([]);
  }

  const bookmarkPressed = (item) => {
    navigation.navigate('BookmarkViewerScreen', { content: item });
  }

  const reloadBookmarks = async () => {
    setIsRefreshing(true);
    const bookmarks = await getBookmarks();
    setBookmarks(bookmarks);
    setIsRefreshing(false);
  }

  const _keyExtractor = (item, index) => item.id;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => bookmarkPressed(item)} key={item.id}>
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

  return (
    <View style={styles.container}>

      { (bookmarks.length == 0) &&
        <Text style={{marginTop: Metrics.navBarHeight}}>
          No bookmarks exist yet!
        </Text>
      }

      <FlatList
        data={bookmarks}
        keyExtractor={_keyExtractor}
        renderItem={renderItem}
        onRefresh={reloadBookmarks}
        refreshing={isRefreshing}
      />

    </View>
  );

}
