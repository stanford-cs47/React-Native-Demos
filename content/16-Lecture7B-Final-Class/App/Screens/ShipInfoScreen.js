import React from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import InfoListItem from '../Components/InfoListItem';
import PurchaseButton from '../Components/PurchaseButton';
import { Metrics, Colors } from '../Themes';

export default class ShipInfoScreen extends React.Component {
	
	/*
		Displays the info for each car, provided by the SWAPI
	*/
	renderInfo() {
		const { info } = this.props.route.params;

		// Creates an array of objects, one for each piece of info,
		// which comes with a specific label name and description 
		let itemInfo = [
			{
				label: 'Model',
				description: info.model
			},
			{
				label: 'Class',
				description: info.starship_class
			},
			{
				label: 'Manufacturer',
				description: info.manufacturer
			},
			{
				label: 'Length',
				description: info.length + ' meters'
			},
			{ // represents a space between sections of info
				label: 'space1',  // add number to avoid warning of having two entries with same key
				description: 'section space'
			},
			{
				label: 'Hyperdrive Rating',
				description: info.hyperdrive_rating
			},
			{
				label: 'Max Atmosphering Speed',
				description: info.max_atmosphering_speed
			},
			{
				label: 'Megalights Per Hour',
				description: info.MGLT
			},
			{ // represents a space between sections of info
				label: 'space2',  // add number to avoid warning of having two entries with same key
				description: 'section space'
			},
			{
				label: 'Min # of Crew Members',
				description: info.crew
			},
			{
				label: 'Max # of Passengers',
				description: info.passengers
			},
			{
				label: 'Cargo Capacity',
				description: info.cargo_capacity
			},
			{
				label: 'Consumables last for',
				description: info.consumables
			},
		]
		return (
			<FlatList  // lists out the pieces of information
				data={itemInfo} 
				renderItem={({item}) => this.renderInfoListItem(item)}
				keyExtractor={this._keyExtractor}
			/>
		)
	}

	_keyExtractor = (index) => JSON.stringify(index);

	renderInfoListItem = (item) => {
		// adds a space between sections of info
		if (item.description === 'section space') {
			return (
				<View style={ { height: 15 } }></View>
			)
		}
		return (
			<InfoListItem
				label={item.label}
				description={item.description}
				customLabelStyle={{ color: Colors.yellow, fontSize: 16 }}
				customDescStyle={{ color: '#fff', fontSize: 16 }}
			/>
		)
	}

	render() {
		const { info } = this.props.route.params;

		return (
			<SafeAreaView style={styles.safeView}>
				<View style={styles.container}>
					{/* Back Navigation */}
					<TouchableOpacity
						style={styles.header}
						onPress={() => this.props.navigation.goBack()}>
							<Ionicons
								name='ios-arrow-back'
								color='#fff'
								size={30}
							/>
					</TouchableOpacity>

					<Text style={styles.title}>{info.name}</Text>

					{/* Cost of Spaceship + Purchase Button */}
					<View style={styles.subtextContainer}>
						<Text style={styles.cost}>{info.cost_in_credits} credits</Text>
						<PurchaseButton />
					</View>

					{this.renderInfo()}
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	safeView: {
		flex: 1,
		backgroundColor: 'black',
	},
	container: {
		flex: 1,
		padding: 10,
		flexDirection: 'column',
		backgroundColor: 'black',
		alignItems: 'stretch'
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontSize: 35,
		fontFamily: Metrics.defaultFont,
		color: Colors.yellow,
	},
	subtextContainer: {
		width: Metrics.maxComponentWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	cost: {
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontSize: 14,
		fontFamily: Metrics.defaultFont,
		color: Colors.gray
	},
	infoChunk: {
		marginBottom: 15
	}
})