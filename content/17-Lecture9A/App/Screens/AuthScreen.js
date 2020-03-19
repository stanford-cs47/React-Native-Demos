import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('2523768417718674', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                let info = await response.json();
                await AsyncStorage.setItem('fbToken', token.toString());
                await AsyncStorage.setItem('expire', expires.toString());
                await AsyncStorage.setItem('userid', info.id.toString());
                this.props.navigation.navigate("App");
                Alert.alert('Logged in!', `Hi ${info.name}!`);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  