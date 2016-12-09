'use strict'

import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import BackIcon from '../Partials/BackIcon';

export default ( props ) => (
	<View style={ styles.container }>
		<Text style={{color: '#FFF'}}>WALLET</Text>
	</View>
);

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 0
	},
});