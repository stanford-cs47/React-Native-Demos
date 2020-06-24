import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

// 3.2 Make your todos clickable such that they call the
// delete function in parent when pressed

export default function ToDo(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onSelect(props.id)}
      style={styles.container}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
