import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OverviewScreen from './OverviewScreen';
import StructureScreen from './StructureScreen';
import SurfaceScreen from './SurfaceScreen';
import Placeholder from '../components/Placeholder';
import { findPlanetColor } from '../components/Utility';

import data from '../../data.json';

const Tab = createMaterialTopTabNavigator();

const PlanetScreen = ({ route }: any) => {
	const planet = data.filter(
		(data) => data.name === route.params.otherParam
	)[0];

	return (
		<>
			<Tab.Navigator
				lazy={true}
				springConfig={{ stiffness: 80}}
				lazyPlaceholder={() => <Placeholder />}
				tabBarOptions={{
					indicatorStyle: {
						backgroundColor: findPlanetColor(route.params.otherParam),
					},
					activeTintColor: '#fff',
					inactiveTintColor: 'hsla(0,0%,100%,0.5)',
					labelStyle: {
						fontSize: 12,
						fontWeight: 'bold',
						fontFamily: 'Spartan-Bold',
					},
					style: { backgroundColor: 'hsl(240,67%,8%)' },
				}}>
				<Tab.Screen
					name='Overview'
					component={OverviewScreen}
					initialParams={{ planet }}
				/>
				<Tab.Screen
					name='Structure'
					component={StructureScreen}
					initialParams={{ planet }}
				/>
				<Tab.Screen
					name='Surface'
					component={SurfaceScreen}
					initialParams={{ planet }}
				/>
			</Tab.Navigator>
			<View style={styles.container}>
				<View style={styles.detail}>
					<Text style={styles.text}>ROTATION TIME</Text>
					<Text style={styles.value}>{planet.rotation}</Text>
				</View>
				<View style={styles.detail}>
					<Text style={styles.text}>REVOLUTION TIME</Text>
					<Text style={styles.value}>{planet.revolution}</Text>
				</View>
				<View style={styles.detail}>
					<Text style={styles.text}>RADIUS</Text>
					<Text style={styles.value}>{planet.radius}</Text>
				</View>
				<View style={styles.detail}>
					<Text style={styles.text}>AVERAGE TEMP.</Text>
					<Text style={styles.value}>{planet.temperature}</Text>
				</View>
			</View>
		</>
	);
};

export default PlanetScreen;

const styles = StyleSheet.create({
	container: {
		height: 300,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'hsl(240,67%,8%)',
	},
	detail: {
		width: 325,
		marginBottom: 10,
		paddingVertical: 15,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderColor: 'hsla(0,85%,100%, 0.5)',
		alignItems: 'center',
	},
	text: {
		fontSize: 12,
		color: 'hsla(0,0%,100%, 0.5)',
		fontFamily: 'Spartan-Medium',
	},
	value: {
		color: 'hsl(0,0%,100%)',
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'Antonio-Medium',
	},
});
