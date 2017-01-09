'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import CartIcon from '../Partials/CartIcon';
import Content 	from './Partials/Content';
import Header 	from './Partials/Header';
import MenuIcon from './Partials/MenuIcon';

export default ( props ) => <View style={{ flex: 1 }}>
	<CartIcon 	{ ...props } />
	<MenuIcon 	{ ...props } />
	<Image 
		source={ ( props.session.user.id == '0001896309' ? require( '../../img/home/foto-perfil2.png' ) : require( '../../img/home/sin-foto.png' ) ) } 
		style={ styles.profileImage }
	/>
	<Header 	{ ...props } />
	<Content 	{ ...props } />
</View>;

let styles = StyleSheet.create({
	profileImage: {
		top:34,
		left:35,
		position:'absolute',
		width:74,
		height:74,
		borderRadius:37,
		borderWidth: 1,
		borderColor: 'rgba(0,0,0,.15)',
		zIndex: 5000,
	}
});