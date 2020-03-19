import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { getPopularPhotos } from '../API/Unsplash.js';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import FeedItem from '../Components/FeedItem';
import { Entypo } from '@expo/vector-icons';

export default class Feed extends React.Component {

  static defaultProps = { content: null }

  state = {
    loading: false,
    feedEntries: [],
  }

  componentDidMount(){
    if (this.props.content) {
      this.setState({feedEntries: this.props.content});
    } else {
      //this.getFeedData();
    }
  }

  getFeedData = () => {
    this.setState({loading: true});
    getPopularPhotos(json => { //this code will be fetching images from the Unsplash API
      this.setState({feedEntries: json, loading: false});
    });
  }

  onProfilePressed = (username) => {
    /*PART 4.1: call the prop that you passed in from HomeScreen!*/
    /* make sure that the prop is not null first by using an if statement*/

    /* PART 4.2: when calling the prop function, pass the username to it */
    //sample call to a function inside of props: this.props.someFunction('someParameterString');
  }

  //here's a simple key extractor which uses the item's ID as a unique value indicator
  _keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => {
    /* Render the FeedItem that we made for you, here. */

    /* FeedItem props: content and onProfilePressed */
    /* Important spec: pass the function this.onProfilePressed to the FeedItem prop ^ */
    return (
      <Text>Implement me by calling FeedItem.js correctly</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getTabContent()}
      </View>
    );
  }

  getTabContent = () => {
    const { loading } = this.state;
    if (loading) {
      return (
        <ActivityIndicator />
      );
    } else {

      /* PART 1 */
      /* You will want to put a FlatList in the return function below! remove the Text tag and replace it with a FlatList */
      /* The data source will come from your state */
      /* Don't worry about styling */

      /* PART 2 */
      /* Write your render function! */

      /* PART 3 */
      /* Call us to review with you */

      /* PART X, leave this until the end */
      /* Your list should have a header. Research the ListHeaderComponent prop for FlatList */
      /* NOTE: that Feed.js accepts a prop called 'listHeaderComponent', which is what you should render as a header here. */

      return (
        <Text>Add your Flatlist here!</Text>

      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
