import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default class ParamsFunction extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;

    return {
     headerTitle: 'Params Function',
     title: 'Params Functions',
     drawerLabel: 'Params Functions',
     headerLeft: (
       <Feather style={{marginLeft: 15}}
        name="menu"
        size={30}
        color={'#9B59B6'}
        onPress={()=> navigation.toggleDrawer()}
      />
     ),
     headerRight: (
       <Feather style={{marginRight: 15}}
         name="save"
         size={30}
         color={'#9B59B6'}
         onPress={navigation.getParam('OpenWebsite')}
       />
     ),
   }
   };

   website =() => {
     WebBrowser.openBrowserAsync('http://stanfordrejects.com');
   }

   componentDidMount() {
     this.props.navigation.setParams({ OpenWebsite: this.website });
     console.log("props " + JSON.stringify(this.props));
   }

  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Navigate"
        onPress={() => this.props.navigation.navigate('DrawerFunctions')}
      />
      </View>
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
});
