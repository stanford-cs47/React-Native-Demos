import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';
import StarWarsCard from './App/Components/StarWarsCard'

/*
  Displays information about Jedi
*/
const App = () => {
  // This is our default state
  let defaultJedi = { name: 'Unknown', gender: 'Unknown', birthYear: 'N/A', height: 'N/A', weight: 'N/A', hairColor: 'N/A', eyeColor: 'N/A'};
  const [jedi, setJedi] = useState(defaultJedi);
  const [buttonText, setButtonText] = useState('Show me your ID Card!');
  const [loading, setLoading] = useState(false);

  // API that provides randomly generated people
  // Notice the use of "set_____" in this function!
  async function getJedi() {
    try {
      setLoading(true);

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
  
      setJedi(cleanObject);
      setLoading(false);
  
    } catch (error) {
      console.error(error);
    }
  }
  
  const showCard = () => {
    getJedi();
  }

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* To access other (functional) components, call the component as a function and pass in any necessary information (equivalent to props in class components). */}
      {StarWarsCard(jedi)}

      <Button
        title={buttonText}
        onPress={showCard}
      />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;