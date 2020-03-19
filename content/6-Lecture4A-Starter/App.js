import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

// Import third-party components here

import ToDo from './ToDo.js'

// BONUS: Make this a function rather than a class
// Make sure to use useState instead of defining state

export default class App extends React.Component {
  // Here's what we will do step by step
  // 1. Make ToDo items deletable by adding a delete button
  // 2. Rewrite our ToDo items using third-party components
  // 3. Rewrite our Add button to be a vector icon
  // 4. Make ToDo items deletable by swiping left on the item

  state = {
    todos: [],
    text: ""
  }

  onChangeText = text => {
    this.setState({text});
  }

  addTodo = () => {
    let todosCopy = JSON.parse(JSON.stringify(this.state.todos));
    todosCopy.push(this.state.text);
    this.setState({ todos: todosCopy, text: "" });
  }

  // 1.1 Write a function to delete an item from todos given its
  // index
  deleteTodo = index => {

  }

  // 1.2 Pass the deleteTodo function as a prop into the ToDo item
  renderTodo = (index, item) => (
    <ToDo
      text={item}
    />
  )

  keyExtractor = index => {
    return index.toString();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.flatlist}>
          <FlatList
            data={this.state.todos}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderTodo(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.text}
          />
          {/* 
            3. Rewrite the following button to be a vector icon
            that you can click to add a ToDo item

            Hint: To make the vector icon clickable, see
            TouchableOpacity 
          */}
          <Button
            style={styles.button}
            title="Add"
            onPress={this.addTodo}
          />
        </View>
      </SafeAreaView>
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
  flatlist: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  textinput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    height: 40,
    width: '20%',
  }
});
