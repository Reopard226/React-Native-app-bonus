import React, { Component } from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

import Swiper from 'react-native-swiper';

export default class App extends Component
{

	constructor( props )
	{
		super( props );
		this.state = {
			loggedIn: false,
		};
	}

	render()
	{

		if ( this.state.loggedIn )
			return null;

		return (
			<Image source={require('./img/bg.jpg')} style={styles.backgroundImage}>
				<StatusBar barStyle="light-content" />
				<Swiper showsButtons={false} showsPagination={false}>
					<Home />
					<Login />
					<Register />
				</Swiper>
			</Image>
		);

	}
}

let styles = StyleSheet.create({
	backgroundImage: {
	  flex: 1,
	  resizeMode: 'cover', // or 'stretch'
	  justifyContent: 'center',
	  alignItems: 'center',
	  width: null,
	  height: null,
	  backgroundColor: 'rgba(0,0,0,0)',
	}
});