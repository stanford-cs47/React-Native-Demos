import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Buttons extends React.Component {

  static navigationOptions = {
     title: 'Buttons',
   };

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Go Back"
        onPress={()=> this.props.navigation.goBack()}
      />
      <Button
        title="Push"
        onPress={()=> this.props.navigation.push("Buttons")}
      />
      <Button
        title="PopToTop"
        onPress={()=> this.props.navigation.popToTop()}
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
