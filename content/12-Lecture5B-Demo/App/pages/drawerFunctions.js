import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DrawerFunctions({ navigation }) {
  return (
      <View style={styles.container}>
      <Button
        title="Open"
        onPress={() => navigation.openDrawer()}
      />
      <Button
        title="Close"
        onPress={() => navigation.closeDrawer()}
      />
      <Button
        title="Buttons"
        onPress={() => navigation.toggleDrawer()}
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
