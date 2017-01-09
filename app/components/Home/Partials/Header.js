'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import HeaderContainer from '../../Containers/HeaderContainer';

import { Col, Grid } from "react-native-easy-grid";

export default ( props ) => <HeaderContainer>
	<View style={ styles.container }>
		<View style={ styles.userInfo }>
			<Text style={ styles.userNameText }>{ props.session.user.name }</Text>
			<View style={{flex:1,flexDirection: 'row'}}>
				<Image source={ require( '../../../img/home/icon-id.png' ) } style={{marginTop: 4, marginRight: 4, width: 10, height: 10}}/>
				<Text style={ styles.userIdText }>{ props.session.user.id }</Text>
			</View>
		</View>
	</View>
</HeaderContainer>;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		paddingLeft:35,
		paddingRight: 35,
		flexDirection: 'row',
	},
	userIdText: {
		color: 'rgba(255,255,255,.8)',
		fontSize: 10,
		top: -2,
		left: 2,
		fontFamily: 'Varela Round',
	},
	userInfo: {
		padding:6,
		marginTop: 16,
		marginLeft: 74
	},
	userNameText: {
		color: 'rgba(255,255,255,.9)',
		fontSize: 18,
		lineHeight: 18,
		fontFamily: 'Varela Round',
		maxHeight: 18
	},
});