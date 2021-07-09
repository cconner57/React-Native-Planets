import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import PlanetListItem from '../components/PlanetListItem';

const HomeScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<PlanetListItem navigation={navigation} color='hsl(196,83%,93%)' name='Mercury' />
			<PlanetListItem navigation={navigation} color='hsl(39,88%,73%)' name='Venus' />
			<PlanetListItem navigation={navigation} color='hsl(238,99%,66%)' name='Earth' />
			<PlanetListItem navigation={navigation} color='hsl(12,100%,64%)' name='Mars' />
			<PlanetListItem navigation={navigation} color='hsl(27,75%,70%)' name='Jupiter' />
			<PlanetListItem navigation={navigation} color='hsl(40,96%,70%)' name='Saturn' />
			<PlanetListItem navigation={navigation} color='hsl(168,72%,67%)' name='Uranus' />
			<PlanetListItem navigation={navigation} color='hsl(222,95%,63%)' name='Neptune' />
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
