'use strict'

import React from 'react';
import {
  Navigator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

import Login from './Session/Login';
import Register from './Session/Register';

export default class SessionContainer extends React.Component
{

	render()
	{

		return (
			<Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
				<StatusBar barStyle="light-content" />
				<Swiper showsButtons={false} showsPagination={false}>
					<Login navigator={this.props.navigator} />
					<Register navigator={this.props.navigator} />
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