'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default ( props ) => (
	<TouchableOpacity
		style={ styles.touchable }
		onPress={ ( event ) => {
			props.navigator.push({
				name: "Home",
				sceneConfig: Navigator.SceneConfigs.FloatFromLeft
			});
		}}>
		<Image style={ styles.image } source={ require( '../../../img/lista-categoria/icon-back.png' ) }/>
	</TouchableOpacity>
);

let styles = StyleSheet.create({
	touchable:{
		width:20,
		height:20,
		position: 'absolute',
		top: 8,
		left: 15,
		zIndex:50
	},
	image:{
		width:20,
		height:20,
		resizeMode: 'contain'
	}
});