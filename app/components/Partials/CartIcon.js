'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default ( props ) => (
	<TouchableOpacity style={ styles.touchable }>
		<Image style={ styles.image } source={ require( '../../img/lista-categoria/icon-cart.png' ) }/>
	</TouchableOpacity>
);

let styles = StyleSheet.create({
	touchable:{
		width:20,
		height:20,
		position: 'absolute',
		top: 8,
		right: 20,
		zIndex:50
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});