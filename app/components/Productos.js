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

import CustomTabBar from './CustomTabBar'

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Productos extends Component
{

	render(){

		return (
			<View style={{flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop: 10}}>
			<TouchableOpacity style={{width:20,height:20,position: 'absolute', top: 28, left: 15,zIndex:50}}><Image style={{width:20,height:20,resizeMode: 'contain',}} source={require('../img/icon-menu.png')}/></TouchableOpacity>
			<View>
				<Image source={require('../img/bonus-logoBlanco300.png')} style={{width:80,alignSelf: 'center',resizeMode: 'contain',}} />
			</View>
			<View style={{paddingBottom: 0}}>
				<Text style={{color: '#FFF',fontSize: 22, textAlign: 'center',}}>Para Ellas</Text>
				<Text style={{color: '#FFF',fontSize: 12, textAlign: 'center'}}>34 Articulos</Text>
			</View>
			<ScrollableTabView 
				style={{backgroundColor: 'rgba(0,0,0,0)',paddingTop: 8,}} 
				tabBarUnderlineStyle={{height: 2, backgroundColor: 'rgba(0,0,0,0)'}}
				tabBarTextStyle={{}}
				tabBarActiveTextColor='#FFF'
				tabBarInactiveTextColor='rgba(255,255,255,.4)'
				renderTabBar={() => <CustomTabBar />}
			>
				<ScrollView tabLabel="TODOS" style={{backgroundColor: '#FFF'}}>
					<View>
						<Image source={require('../img/lista-categoria/icon-filtros.png')} style={{width:370,height:48,resizeMode: 'contain',}} />
					</View>
					<Grid>
						<Row style={{height: 280,backgroundColor: '#FFF'}}>
							<Grid>
							<Col style={{height: 280,paddingTop: 32}}>
								<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Botas de Cuero Londos Chelsea</Text>
								<Image source={require('../img/lista-categoria/product-1.png')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
								<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
								<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
							</Col>
							<Col style={{height: 280,paddingTop: 32}}>
								<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Lentes Curvos Grises</Text>
								<Image source={require('../img/lista-categoria/product-2.png')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
								<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
								<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
							</Col>
							</Grid>
						</Row>
						<Row style={{height: 280,backgroundColor: '#FFF'}}>
							<Grid>
							<Col style={{height: 280,paddingTop: 32}}>
								<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Bolso Permeable Militar</Text>
								<Image source={require('../img/lista-categoria/product-3.jpg')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
								<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
								<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
							</Col>
							<Col style={{height: 280,paddingTop: 32}}>
								<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Maletin de cuero Longchamp</Text>
								<Image source={require('../img/lista-categoria/product-4.jpg')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
								<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
								<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
							</Col>
							</Grid>
						</Row>
					</Grid>
				</ScrollView>
				<Text tabLabel="ROPA"></Text>
				<Text tabLabel="CALZADO">CALZADO</Text>
				<Text tabLabel="ACCESORIOS">ACCESORIOS</Text>
			</ScrollableTabView>
			</View>

		);

	}
}