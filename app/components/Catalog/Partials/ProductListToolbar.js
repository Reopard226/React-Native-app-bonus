'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

export default () => (
	<View>
		<Image source={require('../../../img/lista-categoria/icon-filtros.png')} style={ styles.tempImg }/>
	</View>
);

let styles = StyleSheet.create({
	tempImg: {
		width:370,
		height:48,
		resizeMode: 'contain'
	}
});