import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
import Feed from '../Components/Feed'

export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return { 
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Popular</Text>
        </View>
      )
    };
  };

  onProfileRequested = (username_val) => {
    this.props.navigation.navigate('UserProfile', { username: username_val });
  }

  componentWillUnmount() {
    console.log("UNMOUNTING");
  }

  render() {
    return (
      <View style={styles.container}>
        <Feed onProfileRequested={this.onProfileRequested} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
