import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Metrics } from '../Themes';

// Simply handles the text styling for pieces of info
// about the spaceship
export default class InfoListItem extends React.Component {

	render() {
		
		const labelStyle = [
			styles.label,  // default label text style
			this.props.customLabelStyle  // customizable label text color
		]

		const descriptionStyle = [
			styles.description,  // default description text style
			this.props.customDescStyle  // customizable label description color
		]

		return (
			<Text style={labelStyle} >
				{this.props.label}:{''} {/* add space between label text and description text */}  
				<Text style={descriptionStyle}>
					{this.props.description}
				</Text>
			</Text>
		)
	}
}

const styles = StyleSheet.create({
	label: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontFamily: Metrics.defaultFont,
	},
	description: {
		textTransform: 'none',
		fontStyle: 'italic',
		fontWeight: 'normal',
		fontFamily: Metrics.defaultFont,
	},
})