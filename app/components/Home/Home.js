'use strict'

import React from 'react';
import {
	Image,
	View
} from 'react-native';

import Style from '../../styles/Style';

import CartIcon from '../Partials/CartIcon';
import Content 	from './Partials/Content';
import Header 	from './Partials/Header';
import MenuIcon from './Partials/MenuIcon';

export default ( props ) => <View style={{ flex: 1 }}>
	<CartIcon 	{ ...props } />
	<MenuIcon 	{ ...props } />
	<Image
		source={ ( props.session.user.id == '0001896309' ? require( '../../img/home/foto-perfil2.png' ) : require( '../../img/home/sin-foto.png' ) ) }
		style={ Style.stylesheet.homeProfileImage }
	/>
	<Header 	{ ...props } />
	<Content 	{ ...props } />
</View>;