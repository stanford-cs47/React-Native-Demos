import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

/*
  Displays a Jedi ID Card
*/
const StarWarsCard = (jedi) => {
  return (
    <View style={styles.card}>
      <View style={styles.pictureView}>
        <Image style={styles.picture}
         source={Images.jedi1}/>

        <View style={styles.pictureDetails}>
          <Text style={ { fontWeight: 'bold' } }>{jedi.name}</Text>
          <Text style={ { fontWeight: '500' } }>{jedi.gender}</Text>
        </View>
      </View>

      <View style={styles.jediRowItem}>
        <Text style={ { fontWeight: 'bold' } }>Birth Year</Text>
        <Text style={ { fontWeight: 'bold' } }>Height</Text>
        <Text style={ { fontWeight: 'bold' } }>Weight</Text>
      </View>
      <View style={[styles.jediRowItem, { marginTop: 0 }]}>
        <Text>{jedi.birthYear}</Text>
        <Text>{jedi.height}</Text>
        <Text>{jedi.weight}</Text>
      </View>

      <View style={styles.jediRowItem}>
        <Text style={ { fontWeight: 'bold' } }>Hair Color</Text>
        <Text style={ { fontWeight: 'bold' } }>Eye Color</Text>
      </View>
      <View style={[styles.jediRowItem, { marginTop: 0 }]}>
        <Text>{jedi.hairColor}</Text>
        <Text>{jedi.eyeColor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * .9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius
  },
  pictureView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5
  },
  pictureDetails: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  jediRowItem: {
    marginTop: Metrics.marginVertical,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default StarWarsCard;