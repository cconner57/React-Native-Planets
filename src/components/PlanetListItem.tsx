import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const PlanetListItem = ({ navigation, color, name }: any) => {
	return (
		<Pressable
			style={styles.item}
			onPress={() =>
				navigation.navigate('Planet', {
					otherParam: name,
				})
			}>
			<View style={styles.container}>
				<View style={[styles.dot, { backgroundColor: color }]} />
				<Text style={styles.text}>{name}</Text>
			</View>
			<Ionicons name='chevron-forward' size={20} color='#979797' />
		</Pressable>
	);
};

export default PlanetListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	item: {
		width: 370,
		marginVertical: 5,
		paddingHorizontal: 10,
		paddingVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#979797',
		justifyContent: 'space-between',
	},
	dot: {
		width: 25,
		height: 25,
		marginRight: 10,
		borderRadius: 15,
	},
	text: {
		marginLeft: 15,
		fontSize: 22,
		color: '#fff',
		textTransform: 'uppercase',
		fontFamily: 'Spartan-Medium'
	},
});
