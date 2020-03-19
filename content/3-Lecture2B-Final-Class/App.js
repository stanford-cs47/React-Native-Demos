import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';
import StarWarsCard from './App/Components/StarWarsCard'

/*
  Displays information about Jedi
*/
export default class App extends React.Component {

  constructor(props) {
    super(props);
    // see what props App.js is constructed with:
    console.log(JSON.stringify(props));
  }

  // this is our default state
  state = {
    jedi: {
      name: 'Unknown',
      gender: 'Unknown',
      birthYear: 'N/A',
      height: 'N/A',
      weight: 'N/A',
      hairColor: 'N/A',
      eyeColor: 'N/A',
    },
    buttonText: 'Show me your ID Card!',
    loading: false,
  }

  showCard = () => {
    this.getJedi();

    // Example of how to change state
    // let newJedi = { name: 'Darth Vader', gender: 'Male', birthYear: '41.9BBY', height: '202cm', weight: '136kg', eyeColor: 'yellow', hairColor: 'none' };
    // this.setState({jedi: newJedi}); //never change state directly, always use this
  }

  // async/await - ES6
  // API that provides randomly generated people
  async getJedi() {
    try {

      this.setState({loading: true});

      let randomNumber = Math.floor(Math.random() * 88) + 1;
      let response = await fetch(`https://swapi.co/api/people/${randomNumber}`);
      let responseJson = await response.json();

      // console.log(responseJson);

      // Cleaning up our response...
      let cleanObject = responseJson;
      cleanObject.hairColor = responseJson.hair_color;
      cleanObject.eyeColor = responseJson.eye_color;
      cleanObject.birthYear = responseJson.birth_year;
      cleanObject.weight = responseJson.mass;

      this.setState({loading: false, jedi: cleanObject})

    } catch (error) {
      console.error(error);
    }
  }

  render() {

    // Conditional rendering
    if(this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>

         <StarWarsCard jedi={this.state.jedi} />

         <Button
          title={this.state.buttonText}
          onPress={this.showCard}
         />

      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
