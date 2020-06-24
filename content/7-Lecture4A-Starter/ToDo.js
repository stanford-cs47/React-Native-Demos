import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

// Import third-party components here

export default function ToDo(props) {
  // 2.1 Rewrite the code to display the ToDo item using
  // Native Base components. The easiest thing to do is to replace
  // everything inside the return statement with third-party
  // components.
  //
  // Hint: Check out the CheckBox component
  //
  // Bonus: Find a way to use your delete function with 
  // the Native Base components.
  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      {/*
        1.3 Add a delete button that calls the delete function
        passed in
      */}
    </View>
  );

  // 4. Edit the above code to make ToDo item deleteable by
  // swiping left.
  //
  // Hint: See react-native-swipe-gestures. Note that the example
  // code is written as a class component, but ToDo is a functional
  // component. You may need to make minor modifications from the 
  // example code.

}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: '100%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    // Bonus: You can adjust the styling here to make the
    // todo text float to the left and delete button float 
    // to the right
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20
  }
});
