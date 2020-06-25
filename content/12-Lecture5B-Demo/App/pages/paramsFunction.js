import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function ParamsFunction({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Params Function',
      title: 'Params Functions',
      drawerLabel: 'Params Functions',
      headerLeft: () => (
        <Feather style={{marginLeft: 15}}
          name="menu"
          size={30}
          color={'#9B59B6'}
          onPress={()=> navigation.toggleDrawer()}
        />
      ),
      headerRight: () => (
        <Feather style={{marginRight: 15}}
          name="save"
          size={30}
          color={'#9B59B6'}
          onPress={website}
        />
      ),
    });
  }, [navigation])

  const website = () => {
     WebBrowser.openBrowserAsync('https://reactnavigation.org/');
  }

  return (
      <View style={styles.container}>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('DrawerFunctions')}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
