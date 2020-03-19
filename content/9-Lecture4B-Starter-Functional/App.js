import React, {useState, useEffect} from 'react'; // Remember to import your hooks!
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

export default function App() {
  // Initializing the "state"
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [myInterval, setMyInterval] = useState();

  // TODO: Use "useEffect" to begin our interval (like componentDidMount)
  // and to close our interval (like componentWillUnmount)
  useEffect(
    () => {
    // Write your code here
    }, 
    
    // This basically tells useEffect that we want it to run only when todos 
    // or count changes.
    [todos, count]
  ); 

  onChangeText = text => {
    setText(text);
  }

  addTodo = () => {
    let todosCopy = JSON.parse(JSON.stringify(todos));
    todosCopy.push(text);
    setTodos(todosCopy);
    setText("");
  }

  deleteTodo = index => {
    let todosCopy = JSON.parse(JSON.stringify(todos));
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  }

  renderTodo = (index, item) => (
    <ToDo
      text={item}
      deleteTodo={() => deleteTodo(index)}
    />
  )

  keyExtractor = index => {
    return index.toString();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={todos}
          renderItem={({ index, item }) => renderTodo(index, item)}
          keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => onChangeText(text)}
          value={text}
        />

        <TouchableOpacity onPress={addTodo}>
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
