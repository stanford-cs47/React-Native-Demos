import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    this.loadData();
  }, []);

  /**
   * Exercise: Load data from any API you choose.
   * An easy one to use is: https://pokeapi.co/
   */
  loadData = async () => {
    // 1. Load API data

    // 2. Remember to store the data in the state
  }

  _keyExtractor = (item, index) => index.toString(); 

  // 3. Style the data entries from the API here
  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          I need to be styled to show relevant info D:
        </Text>
      </View>
    )
  }

  ListEmptyComponent = (
    <Text>No data has been loaded yet :(</Text>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        ListEmptyComponent={this.ListEmptyComponent}
        style={styles.datalist}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  datalist: {
    width: '100%',
    padding: 10
  },
  item: {
    width: '100%',
    backgroundColor: 'mistyrose',
    padding: 15,
    marginBottom: 10
  },
  itemText: {
    width: '100%'
  }
});
