import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import InfoListItem from '../Components/InfoListItem';
import PurchaseButton from '../Components/PurchaseButton';
import { Colors, Metrics } from '../Themes';

export default class SpaceshipListItem extends React.Component {
	
	render() {
		const { info } = this.props;

		return (
			<View style={styles.container}>

				<View style={styles.topTextContainer}>
					<Text style={styles.title}>{info.name}</Text>
					<Text style={styles.cost}>{info.cost_in_credits} credits</Text>
				</View>
				
				<View style={styles.info}>
					<InfoListItem
						label='Model'
						description={info.model}
						customLabelStyle={{ color: '#000', fontSize: 14 }}
						customDescStyle={{ color: Colors.gray, fontSize: 14 }}
					/>
					<InfoListItem
						label='Class'
						description={info.starship_class}
						customLabelStyle={{ color: '#000', fontSize: 14 }}
						customDescStyle={{ color: Colors.gray, fontSize: 14 }}
					/>
					<InfoListItem
						label='Manufacturer'
						description={info.manufacturer}
						customLabelStyle={{ color: '#000', fontSize: 14 }}
						customDescStyle={{ color: Colors.gray, fontSize: 14 }}
					/>
				</View>

				<View style={styles.buttonContainer}>
					<PurchaseButton />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: Metrics.maxComponentWidth,
		padding: Metrics.padding,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	topTextContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: Metrics.marginVertical,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: Metrics.defaultFont,
		color: Colors.yellow,
	},
	cost: {
		marginLeft: 'auto',
		fontStyle: 'italic',
		fontWeight: 'bold',
		fontSize: 14,
		fontFamily: Metrics.defaultFont,
		color: Colors.gray
	},
	info: {
		marginBottom: Metrics.marginVertical,
	},
	label: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 12,
		fontFamily: Metrics.defaultFont,
		color: '#000'
	},
	description: {
		textTransform: 'none',
		fontStyle: 'italic',
		fontSize: 12,
		fontFamily: Metrics.defaultFont,
		color: Colors.gray,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',  // moves button to the right end
		color: Colors.gray
	},
})