import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ToDo from './ToDo.js';

// Import third-party components here
import { AntDesign } from '@expo/vector-icons';


// BONUS: Make this a function rather than a class
// Make sure to use useState instead of defining state
export default class App extends React.Component{
  // Here's what we will do step by step:
  // 1. Automatically add ToDo items by setting up an interval in componentDidMount 
  // 2. Stop the automatic addition of ToDo items in componentWillUnmount

  // NOTICE the two additions to our state! You do not have to use "count" in your
  // solution -- it's just there to help generate the "Item #___" ToDo item text.
  // You should, however, use "interval." 
  state = {
    todos: [],
    text: "",
    count: 1,
    interval: null,
  }

  // 1. Set up an interval that adds a new item to the ToDo list every second.
  // Notice the two additions to our state object! Using "count" is not required,
  // but you should definitely use "interval" in your solution.
  //
  // Hint: Check out https://www.w3schools.com/jsref/met_win_setinterval.asp
  componentDidMount() {
    // Put your code for step 1 here!
  }

  // 2. Clean up! When your component unmounts, you don't want your interval to
  // continue adding items to your ToDo list, so make sure you clean up your 
  // interval! 
  //
  // Hint: Check out https://www.w3schools.com/jsref/met_win_setinterval.asp
  componentWillUnmount() {
    // Put your code for step 2 here!
  }

  onChangeText = text => {
    this.setState({text});
  }

  addTodo = () => {
    let todosCopy = JSON.parse(JSON.stringify(this.state.todos));
    todosCopy.push(this.state.text);
    this.setState({ todos: todosCopy, text: "" });
  }

  deleteTodo = index => {
    let todosCopy = JSON.parse(JSON.stringify(this.state.todos));
    todosCopy.splice(index, 1);
    this.setState({ todos: todosCopy });
  }

  renderTodo = (index, item) => (
    <ToDo
      text={item}
      deleteTodo={() => this.deleteTodo(index)}
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

          <TouchableOpacity onPress={this.addTodo}>
            <AntDesign
              style={{ marginLeft: 10}}
              name='pluscircle'
              size={40}
              color='pink'
            />
          </TouchableOpacity>

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
