import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Buttons({ navigation }) {
    return (
      <View style={styles.container}>
      <Button
        title="Go Back"
        onPress={()=> navigation.goBack()}
      />
      <Button
        title="Push"
        onPress={()=> navigation.push("Buttons")}
      />
      <Button
        title="PopToTop"
        onPress={()=> navigation.popToTop()}
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
