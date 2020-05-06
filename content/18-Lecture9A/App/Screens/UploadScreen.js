import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOvJT5eSqFj8ieP6dX2xCb9APATX0pL3w",
  authDomain: "lecture-9a.firebaseapp.com",
  databaseURL: "https://lecture-9a.firebaseio.com",
  projectId: "lecture-9a",
  storageBucket: "lecture-9a.appspot.com",
  messagingSenderId: "753511253227",
  appId: "1:753511253227:web:cb17d1d0d64e6cc25aeaae",
  measurementId: "G-54GD36XTPS"
};

export default class UploadScreen extends React.Component {
  componentDidMount = () => {
    firebase.initializeApp(firebaseConfig);
  }

  getPermissionAsync = async (permission) => {
    const { status } = await Permissions.askAsync(permission);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll or camera permissions to make this work!');
    }
  }

  uploadImage = async(uri) => {
    const name = await AsyncStorage.getItem('name');
    const response = await fetch(uri);
    const blob = await response.blob();
    let splitURI = uri.split('/');
    let filename = splitURI[splitURI.length - 1];
    var ref = firebase.storage().ref().child(name+'/'+filename);
    let task = ref.put(blob);
    return {task, ref};
  };

  uploadFromCamera = async () => {
    await this.getPermissionAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      //uri is the local name of the image on phone
      let res = await this.uploadImage(result.uri); 

      //To save where the image is, we can do 2 things.
      //1) just keep track of the url by putting it in the user data in firebase or locally
      //2) don't get the url until you need it. i.e., you know the user folder in storage, so why get url right now? Get it when you need it
      await res.task;
      let url = await res.ref.getDownloadURL();
      console.log(url);
    }
  }

  uploadFromLibrary = async () => {
    await this.getPermissionAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      //uri is the local name of the image on phone
      let res = await this.uploadImage(result.uri); 

      //To save where the image is, we can do 2 things.
      //1) just keep track of the url by putting it in the user data in firebase or locally
      //2) don't get the url until you need it. i.e., you know the user folder in storage, so why get url right now? Get it when you need it
      await res.task;
      let url = await res.ref.getDownloadURL();
      console.log(url);
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Button title="Upload from camera" onPress={this.uploadFromCamera} />
        <Button title="Upload from library" onPress={this.uploadFromLibrary} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});