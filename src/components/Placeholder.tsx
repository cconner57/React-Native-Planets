import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Placeholder() {
	return (
		<View style={{ flex: 1, backgroundColor: 'hsl(240,67%,8%)' }}>
			<ActivityIndicator />
		</View>
	);
}
