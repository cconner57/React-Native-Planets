import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { findPlanetImage } from '../components/Utility';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../type';

type OverviewScreenProps = {
	route: RouteProp<RootStackParamList, 'Overview'>,
};

const OverviewScreen = ({ route }: OverviewScreenProps) => {
	const handleLinking = () => {
		Linking.openURL(route.params.planet.overview.source);
	};

	return (
		<View style={styles.container}>
			{findPlanetImage(route.params.planet.name, 'overview')}
			<Text style={styles.text}>{route.params.planet.name}</Text>
			<Text style={styles.paragraph}>
				{route.params.planet.overview.content}
			</Text>
			<Pressable style={styles.link} onPress={handleLinking}>
				<Text style={{ color: 'hsla(0,0%,100%, 0.5)' }}>Source: </Text>
				<Text style={{ color: '#fff' }}>Wikipedia</Text>
                <Ionicons style={{marginLeft: 5}} name="open-outline" size={16} color="white" />
			</Pressable>
		</View>
	);
};

export default OverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'hsl(240,67%,8%)',
	},
	text: {
		marginVertical: 20,
		color: '#fff',
		fontSize: 36,
		fontWeight: 'bold',
        fontFamily: 'Antonio-Medium',
        textTransform: 'uppercase'
	},
	paragraph: {
		marginHorizontal: 15,
		marginBottom: 20,
		color: '#fff',
		textAlign: 'center'
	},
	link: {
        flexDirection: 'row',
		marginHorizontal: 15,
		textAlign: 'center',
	},
});
