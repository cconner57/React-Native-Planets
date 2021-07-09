import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const findPlanetImage = (planet: string, viewOption: string) => {
	if (planet === 'Mercury') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-mercury.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-mercury-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-mercury.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-mercury.png')}
				/>
			</View>
		);
	} else if (planet === 'Venus') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-venus.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-venus-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-venus.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-venus.png')}
				/>
			</View>
		);
	} else if (planet === 'Earth') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-earth.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-earth-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-earth.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-earth.png')}
				/>
			</View>
		);
	} else if (planet === 'Mars') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-mars.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-mars-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-mars.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-mars.png')}
				/>
			</View>
		);
	} else if (planet === 'Jupiter') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-jupiter.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-jupiter-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-jupiter.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-jupiter.png')}
				/>
			</View>
		);
	} else if (planet === 'Saturn') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-saturn.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-saturn-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-saturn.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-saturn.png')}
				/>
			</View>
		);
	} else if (planet === 'Uranus') {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-uranus.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-uranus-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-uranus.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-uranus.png')}
				/>
			</View>
		);
	} else {
		return viewOption === 'overview' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-neptune.png')}
			/>
		) : viewOption === 'structure' ? (
			<Image
				style={styles.image}
				source={require('../../assets/planets/planet-neptune-internal.png')}
			/>
		) : (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={require('../../assets/planets/planet-neptune.png')}
				/>
				<Image
					style={styles.surface}
					source={require('../../assets/planets/geology-neptune.png')}
				/>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	image: {
		width: 150,
		height: 150,
		resizeMode: 'center',
	},
	surface: {
		position: 'absolute',
		resizeMode: 'contain',
		bottom: -170,
		left: 40,
		width: 70,
	},
});

export const findPlanetColor = (planet: string): string => {
	switch (planet) {
		case 'Mercury':
			return 'hsl(194, 48%, 49%)';
		case 'Venus':
			return 'hsl(33, 82%, 61%)';
		case 'Earth':
			return 'hsl(263, 67%, 51%)';
		case 'Mars':
			return 'hsl(10, 63%, 51%)';
		case 'Jupiter':
			return 'hsl(2, 68%, 53%)';
		case 'Saturn':
			return 'hsl(17, 73%, 46%)';
		case 'Uranus':
			return 'hsl(169, 73%, 44%)';
		default:
			return 'hsl(222, 87%, 56%)';
	}
};
