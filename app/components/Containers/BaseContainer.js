'use strict'

import React from 'react';
import {
	Image,
	StatusBar,
	StyleSheet,
} from 'react-native';

import {  Container, Content, Text } from 'native-base';

import StatusBarBackground from '../Partials/StatusBarBackground';

import theme from '../../themes/bonus';

export default ( props ) => (
	<Image source={ require( '../../img/bg.jpg' ) } style={ styles.backgroundImage }>
		<StatusBar barStyle="light-content" />
		<StatusBarBackground />
		<Container style={{padding:0}} theme={theme}>
			<Content>
				{props.children}
			</Content>
		</Container>
	</Image>
);

let styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'rgba(0,0,0,0)',
	}
});