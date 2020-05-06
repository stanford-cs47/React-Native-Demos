import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Metrics, Colors } from '../Themes';

// Clicking on button doesn't do anything right now
export default class PurchaseButton extends React.Component {
	render() {
		return (
				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log('Purchased!')}>
						<Text style={styles.buttonText}>Purchase</Text>
				</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		width: 93,
		height: 22,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		backgroundColor: Colors.red,
	},
	buttonText: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontFamily: Metrics.defaultFont,
		fontSize: 12,
		color: '#fff'
	}
})