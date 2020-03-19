import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity
} from 'react-native';

import { SpaceshipListItem } from '../Components';
import { Metrics, Colors, Images } from '../Themes';

export default class StoreScreen extends React.Component {

	state = {
		loading: false,
		spaceships: []  // stores spaceships from SWAPI
	}

	constructor(props) {
		super(props);
		this.loadSpaceships();  // load spaceships data from SWAPI
	}

	/*
		Makes an api call to SWAPI to load list of spaceships
		with the state.
	*/
	loadSpaceships = async () => {
		/**
		 * Exercise: Use the fetch function to get data from the
		 * SWAPI. In this specific case, you want a list of
		 * spaceships/starships.
		 */
	}

	_keyExtractor = (index) => JSON.stringify(index);

	renderSpaceshipListItem = ({item}) => {
		if (item.cost_in_credits === 'unknown') return;  // cost unknown; spaceship is unsellable
		return (
			<TouchableOpacity
				style={styles.cardContainer}
				onPress={() => this.props.navigation.navigate('ShipInfoScreen', { info: item })}>
					<SpaceshipListItem info={item} />
			</TouchableOpacity>
		)
	}

	renderListEmptyComponent = () => {
		return (
			<View style={{ flex: 1, }}>
				<Text style={{ textAlign: 'center', color: 'white' }}>
					No spaceships were loaded! :(
				</Text>
			</View>
		)
	}

	render() {

		return (
			<SafeAreaView style={styles.container}>

				<View style={styles.storeHeader}>
					<Image source={Images.StarWarsLogo} style={styles.StarWarsLogo} />
					<Text style={styles.title}>Spaceship{'\n'}Store</Text>
				</View>

				{/* List out spaceships sources from the SWAPI */}
				<FlatList
					data={this.state.spaceships}
					renderItem={this.renderSpaceshipListItem}
					keyExtractor={this._keyExtractor}
					ListEmptyComponent={this.renderListEmptyComponent}
				/>

			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	},
	storeHeader: {
		width: Metrics.maxComponentWidth,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: Metrics.marginBottom
	},
	StarWarsLogo: {
		width: 122,
		height: 66,
		marginRight: Metrics.marginHorizontal
	},
	title: {
		height: 66,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontFamily: Metrics.defaultFont,
		fontSize: 30,
		lineHeight: 32,
		color: Colors.yellow
	},
	cardContainer: {
		marginBottom: Metrics.marginVertical
	},
	loadingText: {
		fontSize: 40,
		color: '#fff'
	},
	h1: {
		fontWeight: 'bold',
		color: '#fff',
	}
})