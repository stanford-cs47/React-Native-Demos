import React, { useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { getPhotosForUser } from '../API/Unsplash.js';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'

export default function UserProfileScreen({ navigation, route }) {
  [username, setUsername] = useState(null);
  [content, setContent] = useState({});
  [loading, setLoading] = useState(true);
  [user, setUser] = useState({});


  useEffect(() => {
    if (!navigation) return;
    const updatedUsername = route.params?.username ?? null;
    setUsername(updatedUsername);
    loadUserContent(updatedUsername);
  }, [route, loadUserContent, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>{username}</Text>
        </View>
      )
    });

  }, [navigation])

  const loadUserContent = async (username) => {
    setLoading(true);
    await sleep(500);
    getPhotosForUser(json => {
      // console.log(json);
      setContent(json);
      setLoading(false);
      if (json[0]) {
        setUser(json[0].user)
      }
    }, username);
  }

  const getUserContent = () => {
    if (!user.id) return null;

    return (
      <View style={styles.userContainer}>
        <Text style={material.display1}>{user.name}</Text>
        <Text style={material.body1}>{user.bio || 'No Bio'}</Text>
        <Text style={material.caption}>{user.location || 'No Location'}</Text>
      </View>
    );
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <View style={styles.container}>
      { loading ?
          <ActivityIndicator /> :
          <Feed content={content} listHeaderComponent={getUserContent()}/>
      }
      {getFeedContent()}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
  userContainer: {
    flexDirection: 'column',
    padding: Metrics.doubleBaseMargin,
  },
  userImage: {
    width: Metrics.images.large,
    height: Metrics.images.large,
  }
});
