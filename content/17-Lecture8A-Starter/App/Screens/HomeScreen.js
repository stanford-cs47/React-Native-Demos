import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed'

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Popular</Text>
        </View>
      )
    });

  }, [navigation])

  const onProfileRequested = (username_val) => {
    navigation.navigate('UserProfile', { username: username_val });
  }

  return (
    <View style={styles.container}>
      <Feed onProfileRequested={this.onProfileRequested} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
