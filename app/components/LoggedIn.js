'use strict'

import React, { Component } from 'react';

import {
  Navigator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

import Login from './Login';
import Register from './Register';
import Home from './Home';
import Productos from './Productos';

export default class First extends Component
{

	render()
	{

		return (
			<Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
				<StatusBar barStyle="light-content" />
        <Home navigator={this.props.navigator}/>
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