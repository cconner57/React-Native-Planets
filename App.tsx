import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import HomeScreen from './src/screens/HomeScreen';
import PlanetScreen from './src/screens/PlanetScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
		'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
		'Spartan-Medium': require('./assets/fonts/Spartan-Medium.ttf'),
	});

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={() => ({
							headerTitleAlign: 'left',
							headerStyle: {
								backgroundColor: 'hsl(240,67%,8%)',
							},
							headerTitleStyle: {
								marginLeft: 5,
								color: '#fff',
								fontSize: 24,
								fontFamily: 'Antonio-Medium',
							},
							headerBackTitleVisible: false,
							headerTitle: 'THE PLANETS',
							headerRight: () => (
								<Ionicons
									name='menu'
									style={{ marginRight: 15 }}
									size={24}
									color={'#979797'}
								/>
							),
						})}
					/>
					<Stack.Screen
						name='Planet'
						component={PlanetScreen}
						options={({ navigation }) => ({
							headerTitleAlign: 'left',
							headerStyle: {
								backgroundColor: 'hsl(240,67%,8%)',
							},
							headerTitleStyle: {
								marginLeft: 5,
								color: '#fff',
								fontSize: 24,
								fontFamily: 'Antonio-Medium',
							},
							headerBackTitleVisible: false,
							headerTitle: 'THE PLANETS',
							headerLeft: () => {
								return null;
							},
							headerRight: () => (
								<Ionicons
									name='menu'
									style={{ marginRight: 15 }}
									size={24}
									color={'#fff'}
									onPress={() => navigation.popToTop()}
								/>
							),
						})}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
