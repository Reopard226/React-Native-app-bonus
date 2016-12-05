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

import Productos from './Productos';

export default class ProductosWrapper extends Component
{

	render()
	{

		return (
			<Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
				<StatusBar barStyle="light-content" />
				<Swiper showsButtons={false} showsPagination={false}>
					<Productos navigator={this.props.navigator}/>
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