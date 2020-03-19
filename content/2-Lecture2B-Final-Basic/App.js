import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Colors, Metrics } from './App/Themes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>

          <View style={styles.pictureView}>
            <Image style={styles.picture}
            source={Images.jedi1}/>

            <View style={styles.pictureDetails}>
              <Text style={ { fontWeight: 'bold' } }>Luke Skywalker</Text>
              <Text style={ { fontWeight: '500' } }>Male</Text>
            </View>
          </View>

          <View style={styles.jediRowItem}>
            <Text style={ { fontWeight: 'bold' } }>Birth Year</Text>
            <Text style={ { fontWeight: 'bold' } }>Height</Text>
            <Text style={ { fontWeight: 'bold' } }>Weight</Text>
          </View>
          <View style={[styles.jediRowItem, { marginTop: 0 }]}>
            <Text>19</Text>
            <Text>1.72</Text>
            <Text>77</Text>
          </View>

          <View style={styles.jediRowItem}>
            <Text style={ { fontWeight: 'bold' } }>Hair Color</Text>
            <Text style={ { fontWeight: 'bold' } }>Eye Color</Text>
          </View>
          <View style={[styles.jediRowItem, { marginTop: 0 }]}>
            <Text>Brown</Text>
            <Text>Blue</Text>
          </View>
        </View>
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
  },
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
