import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import PlanetListItem from '../components/PlanetListItem';
import { RootStackParamList } from '../../type';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, 'Planet'>;
};

const PLANET_LIST: Array<{ name: string, color: string }> = [
	{ name: 'Mercury', color: 'hsl(196,83%,93%)' },
	{ name: 'Venus', color: 'hsl(39,88%,73%)', },
	{ name: 'Earth', color: 'hsl(238,99%,66%)' },
	{ name: 'Mars', color: 'hsl(12,100%,64%)' },
	{ name: 'Jupiter', color: 'hsl(27,75%,70%)' },
	{ name: 'Saturn', color: 'hsl(40,96%,70%)' },
	{ name: 'Uranus', color: 'hsl(168,72%,67%)' },
	{ name: 'Neptune', color: 'hsl(222,95%,63%)' }
]

const HomeScreen = ({ navigation }: HomeScreenProps) => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			{
				PLANET_LIST.map(planet => <PlanetListItem key={planet.name} navigation={navigation} color={planet.color} name={planet.name} />)
			}
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'hsl(240,67%,8%)',
	},
});
