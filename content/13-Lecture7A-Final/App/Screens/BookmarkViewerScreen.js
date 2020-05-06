import React, { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import FeedItem from '../Components/FeedItem'

export default function BookmarkViewerScreen({ navigation, route })  {
  [content, setContent] = useState({});

  useEffect(() => {
    const updatedContent = route.params?.content ?? {};
    setContent(updatedContent);
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Saved Bookmark</Text>
        </View>
      )
    });

  }, [navigation])

  return (
    <View style={styles.container}>
      <ScrollView>
        <FeedItem content={content} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
});
