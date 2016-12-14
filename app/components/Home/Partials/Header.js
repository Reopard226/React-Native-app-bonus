'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import { Col, Grid } from "react-native-easy-grid";

export default ( props ) => (

	<View>
		<View style={ styles.profile }>
			<Image source={ ( props.session.user.id == '0001896309' ? require( '../../../img/home/foto-perfil2.png' ) : require( '../../../img/home/sin-foto.png' ) ) } style={ styles.userImage }/>
			<View style={ styles.userInfo }>
				<Text style={ styles.userNameText }>{ props.session.user.name }</Text>
				<View style={{flex:1,flexDirection: 'row'}}>
					<Image source={ require( '../../../img/home/icon-id.png' ) } style={{marginTop: 4, marginRight: 4, width: 10, height: 10}}/>
					<Text style={ styles.userIdText }>{ props.session.user.id }</Text>
				</View>
			</View>
		</View>
		<View style={ styles.summarySection }>
			<Grid style={ styles.boxwrapper }>
				<Col>
					<View style={ styles.box }>
						<Text style={ styles.boxValue }>{ props.session.user.pointsCode }</Text>
						<Text style={ styles.boxLabel }>Soles</Text>
					</View>
				</Col>
				<Col>
					<View style={ [ styles.box ,  styles.centerbox ]  }>
						<Text style={ styles.boxValue }>{ props.session.user.currentBalance }</Text>
						<Text style={ styles.boxLabel }>Puntos</Text>
					</View>
				</Col>
				<Col>
					<View style={ styles.box }>
						<Text style={ styles.boxValue }>{ props.session.user.accountAutCnj }</Text>
						<Text style={ styles.boxLabel }>Cupones</Text>
					</View>
				</Col>
			</Grid>
		</View>
	</View>

);

let styles = StyleSheet.create({
	boxwrapper:{
		borderColor: 'rgba(0,0,0,.15)',
		borderWidth: 1,
		borderRadius: 40,
		height: 60,
		flex: 0
	},
	box: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft:16,
		paddingRight: 16,
	},
	boxLabel: {
		textAlign: 'center',
		color: 'rgba(0,0,0,.3)', 
		fontSize: 13,
		fontFamily: 'Varela Round'
	},
	boxValue: {
		textAlign: 'center',
		fontWeight: 'bold',
		paddingBottom:3,
		fontSize:16
	},
	centerbox:{
		borderLeftColor: 'rgba(0,0,0,.15)',
		borderRightColor: 'rgba(0,0,0,.15)',
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	profile: {
		paddingTop: 30,
		paddingLeft:35,
		paddingRight: 35,
		flexDirection: 'row',
		zIndex: 5
	},
	summarySection: {
		height: 100,
		backgroundColor: '#FFF',
		paddingLeft:30,
		paddingRight:30,
		paddingTop:26
	},
	userIdText: {
		color: 'rgba(255,255,255,.8)',
		fontSize: 10,
		top: -2,
		left: 2,
		fontFamily: 'Varela Round'
	},
	userImage: {
		top:34,left:35,
		position:'absolute',
		width:74,
		height:74,
		borderRadius:37
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
		fontFamily: 'Varela Round'
	},
});