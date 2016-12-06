'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

export default ( props ) => (

	<View>
		<View>
			<Image style={ styles.logo } source={require('../../../img/bonus-logoBlanco300.png')} />
		</View>
		<View style={ styles.titleSection }>
			<Text style={ styles.titleText }>Para Ellas</Text>
			<Text style={ styles.itemCountText }>34 Articulos</Text>
		</View>
	</View>

);

let styles = StyleSheet.create({
	logo: {
		width:80,
		alignSelf: 'center',
		resizeMode: 'contain'
	},
	itemCountText: {
		color: '#FFF',
		fontSize: 12,
		textAlign: 'center'
	}
	titleSection: {
		paddingBottom: 0
	},
	titleText: {
		color: '#FFF',
		fontSize: 22,
		textAlign: 'center'
	}
});