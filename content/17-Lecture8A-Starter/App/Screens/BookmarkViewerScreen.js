import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import FeedItem from '../Components/FeedItem'

export default class BookmarkViewerScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Saved Bookmark</Text>
        </View>
      )
    };
  };

  state = {
    content: null,
  }

  componentDidMount() {
    const params = this.props.navigation.state.params || {};
    const content = params.content;

    this.setState({content: content});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.content ? <FeedItem content={this.state.content} /> : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
  },
});
