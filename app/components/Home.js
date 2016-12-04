import React, { Component } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	// Text,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Tabs, Text, Picker, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from './StatusBarBackground';

import theme from '../themes/bonus';

export default class Login extends Component
{

	render(){

		return (

			<ScrollView>
				<View style={{paddingTop: 50, paddingLeft:35,paddingRight:35, flex: 1, flexDirection: 'row', zIndex:5}}>
					<Image source={require('../img/aldo-avatar.png')} style={{width:72,height:72,borderRadius:36}}/>
					<View style={{alignSelf:'center',flex:1, flexDirection: 'column',padding:6}}>
						<Text style={{color: 'rgba(255,255,255,.9)', fontSize: 18}}>Franco Paolo Carranza</Text>
						<Text style={{color: 'rgba(255,255,255,.9)', fontSize: 12}}>001896379-1</Text>
					</View>
				</View>
				<View style={{backgroundColor: '#FFF', top:-10,paddingLeft:30,paddingRight:30,paddingTop:30}}>
					<Grid style={styles.boxwrapper}>
						<Col>
							<View style={[styles.box,styles.leftbox]}>
								<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:16}}>566</Text>
								<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:13}}>Soles</Text>
							</View>
						</Col>
						<Col>
							<View style={[styles.box, styles.centerbox]}>
								<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:16}}>167</Text>
								<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:13}}>Puntos</Text>
							</View>
						</Col>
						<Col>
							<View style={[styles.box,styles.rightbox]}>
								<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:16}}>0</Text>
								<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:13}}>Cupones</Text>
							</View>
						</Col>
					</Grid>
				</View>
				<Container style={{top:-10}} theme={theme}>
					<Content>
						<Tabs>
							<Text tabLabel="CATÁLOGO">One</Text>
							<Text tabLabel="PROMOCIONES">Two</Text>
							<Text tabLabel="CUPONES">Three</Text>
						</Tabs>
					</Content>
				</Container>
			</ScrollView>

		);

	}
}

let styles = StyleSheet.create({
	boxwrapper:{
		borderColor: 'rgba(0,0,0,.15)',
		borderWidth: 1,
		borderRadius: 40,
	},
	box:{
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft:16,
		paddingRight: 16,
	},
	leftBox: {

	},
	centerbox:{
		borderLeftColor: 'rgba(0,0,0,.15)',
		borderRightColor: 'rgba(0,0,0,.15)',
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	rightbox:{

	}
});