import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ItBeLikeThat extends React.Component {

  static navigationOptions = {
     title: 'It Be Like That',
   };

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Navigate"
        onPress={() => this.props.navigation.navigate('Buttons')}
      />
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
