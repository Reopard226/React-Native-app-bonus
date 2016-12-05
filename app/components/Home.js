import React, { Component } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	// Text,
	TouchableOpacity,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Tabs, Text, Picker, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from './StatusBarBackground';
import Catalogo from './Catalogo';

import theme from '../themes/bonus';

// import Drawer from 'react-native-drawer';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Login extends Component
{

	render(){

		return (

			<View style={{padding: 0}}>
				<TouchableOpacity style={{width:20,height:20,position: 'absolute', top: 28, left: 15,zIndex:50}}><Image style={{width:20,height:20,resizeMode: 'contain',}} source={require('../img/icon-menu.png')}/></TouchableOpacity>
				<View style={{paddingTop: 54, paddingLeft:35,paddingRight:35, flexDirection: 'row', zIndex: 5}}>
					<Image source={require('../img/home/foto-perfil.png')} style={{top:55,left:35,position:'absolute' ,width:74,height:74,borderRadius:37}}/>
					<View style={{padding:6,marginTop: 10,marginLeft: 74}}>
						<Text style={{color: 'rgba(255,255,255,.9)', fontSize: 18, lineHeight: 18}}>Franco Paolo Carranza</Text>
						<Text style={{color: 'rgba(255,255,255,.9)', fontSize: 10, top: -2, left: 2}}>001896379-1</Text>
					</View>
				</View>
				<View style={{height: 100,backgroundColor: '#FFF',paddingLeft:30,paddingRight:30,paddingTop:30}}>
					<Grid style={[styles.boxwrapper,{height: 400,}]}>
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
				<Container style={{padding:0}} theme={theme}>
					<Content>
						<ScrollableTabView 
							style={{backgroundColor: '#FFF',paddingTop: 10}} 
							tabBarUnderlineStyle={{height: 2, backgroundColor: 'rgb(31,75,164)'}}
							tabBarTextStyle={{fontSize: 12, fontFamily: 'Oswald'}}
							tabBarActiveTextColor='black'
							tabBarInactiveTextColor='rgba(0,0,0,.4)'
						>
							<Catalogo tabLabel="CATÁLOGO" navigator={this.props.navigator}/>
							<Text tabLabel="PROMOCIONES">PROMOCIONES</Text>
							<Text tabLabel="CUPONES">CUPONES</Text>
						</ScrollableTabView>
					</Content>
				</Container>
			</View>

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