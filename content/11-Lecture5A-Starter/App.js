import React from 'react';
import PouchDB from 'pouchdb-core'
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Modal, TextInput, Keyboard, TouchableHighlight } from 'react-native';
PouchDB.plugin(require('pouchdb-adapter-asyncstorage').default)
const db = new PouchDB('mydb', {adapter: 'asyncstorage'})

export default class App extends React.Component {
  state = {
    contacts: [{
      name: "Abdallah AbuHashem",
      phoneNumber: "6504600122",
    },
    {
      name: "Abdallah AbuHashem",
      phoneNumber: "6504600122",
    }],
    modalVisible: false,
    name: "",
    number: ""
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
  //   db.allDocs()
  // .then(doc => console.log(doc.rows[0].doc))
  }

  addContact = () => {
    let contactsCopy = JSON.parse(JSON.stringify(this.state.contacts));
    contactsCopy.push({
      name: this.state.name,
      phoneNumber: this.state.number
    });
    this.setState({contacts: contactsCopy})
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.number}>
          {item.phoneNumber}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <SafeAreaView style={styles.container}>
            <TouchableHighlight
              style={{flex: 1, width: '100%', justifyContent: 'center'}}
              onPress={() => Keyboard.dismiss()}
              underlayColor={'#ffffff00'}>
              <View style={{width: '100%', alignItems: 'center'}}>
                <Text
                  style={styles.headerStyle}>
                  New contact
                </Text>
                <View style={styles.labelAndInput}>
                  <Text style={styles.label}> Name </Text>
                  <TextInput
                  autoCorrect={false}
                  style={styles.TextInput}
                  value={this.state.name}
                  onChangeText={(text) => this.setState({name: text})}/>
                </View>
                <View style={styles.labelAndInput}>
                  <Text style={styles.label}> Number </Text>
                  <TextInput
                    keyboardType='number-pad'
                    style={styles.TextInput}
                    value={this.state.number}
                    onChangeText={(text) => this.setState({number: text})}/>
                </View>
                <TouchableOpacity
                  onPress={this.addContact}
                  style={[styles.addButton, {marginTop: 32}]}>
                  <Text style={styles.addText}> Add new contact </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setModalVisible(!this.state.modalVisible)}
                  style={[styles.addButton, {marginTop: 16, backgroundColor: '#ff3b30'}]}>
                  <Text style={styles.addText}> Hide modal </Text>
                </TouchableOpacity>
                
              </View>
            </TouchableHighlight>
          </SafeAreaView>
        </Modal>

        <Text
          style={styles.headerStyle}>
          Contacts
        </Text>
        <View style={[styles.separtor, {width: '100%'}]}/>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListInner}
          data={this.state.contacts}
          renderItem={({item}) => this._renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separtor}/>}
        />
        <TouchableOpacity
          onPress={() => this.setModalVisible(true)}
          style={styles.addButton}>
          <Text style={styles.addText}> Add new contact </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16
  },
  flatList: {
    width: '100%',
    flex: 1,
  },
  flatListInner: {
    alignItems: 'stretch',
  },
  itemStyle: {
    padding: 8,
    paddingLeft: 16,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 18,
    marginBottom: 8
  },
  number: {
    fontSize: 12,
    color: '#4E4E4E'
  },
  separtor: {
    height: 1,
    backgroundColor: '#A5A5A5',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    
    elevation: 18,
  },
  addText: {
    color: 'white'
  },
  labelAndInput: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    color: '#4E4E4E'
  },
  TextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    marginLeft: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
