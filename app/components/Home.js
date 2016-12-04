import React, { Component } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	// Text,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

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
				<View style={{backgroundColor: '#FFF', top:-10,paddingLeft:65,paddingRight:65,paddingTop:40}}>
					<Grid>
						<Col>
							<View style={{borderColor: 'black'}}>
								<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:18}}>566</Text>
								<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:14}}>Soles</Text>
							</View>
						</Col>
						<Col>
							<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:18}}>167</Text>
							<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:14}}>Puntos</Text>
						</Col>
						<Col>
							<Text style={{textAlign: 'center',fontWeight: 'bold', paddingBottom:5,fontSize:18}}>0</Text>
							<Text style={{textAlign: 'center', color: 'rgba(0,0,0,.3)', fontSize:14}}>Cupones</Text>
						</Col>
					</Grid>
				</View>
			</ScrollView>

		);

	}
}

let styles = StyleSheet.create({

});