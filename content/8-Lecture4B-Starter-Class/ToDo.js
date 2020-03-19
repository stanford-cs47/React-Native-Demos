import React from 'react';
import {
  StyleSheet,
  // Text,
  Button,
  View
} from 'react-native';

// Import third-party components here
import { ListItem, CheckBox, Body, Text } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function ToDo(props) {
  return (
    <GestureRecognizer onSwipeLeft={props.deleteTodo}>
      <ListItem>
        <CheckBox
          checked={false}
          onPress={props.deleteTodo}
        />
        <Body>
          <Text>{props.text}</Text>
        </Body>
      </ListItem>
    </GestureRecognizer>
    
  );

}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20
  }
});
