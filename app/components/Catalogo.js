import React, { Component } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Navigator,
	// Text,
	TouchableOpacity,
	View
} from 'react-native';

import { Container, Content, List, ListItem, Text , Icon } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from './StatusBarBackground';

import theme from '../themes/bonus';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class Catalogo extends Component
{

	constructor(props){
		super(props);
		this.state = {
			categories: [
				{
					name: 'PARA ELLAS',
					number_of_articles: 34,
					img: '../img/home/ellas-bg.png'
				},
				{
					name: 'PARA ELLOS',
					number_of_articles: 24,
					img: '../img/home/ellos-bg.png'
				},
				{
					name: 'INFANTIL Y JÓVENES',
					number_of_articles: 123,
					img: '../img/home/infantil-bg.png'
				},
				{
					name: 'PARA EL HOGAR',
					number_of_articles: 46,
					img: '../img/home/home-bg.png'
				},
				{
					name: 'FITNESS Y SALUD',
					number_of_articles: 52,
					img: '../img/home/fitnessbg.png'
				},
				{
					name: 'NAVIDAD',
					number_of_articles: 52,
					img: '../img/home/navidad-bg.png'
				}
			]
		}
	}

	render(){

		return (

			<Container style={{height:440}}>
			    <Content>
			        <List>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<TouchableOpacity onPress={(event) => {

											this.props.navigator.push({
												name: "Productos",
												sceneConfig: Navigator.SceneConfigs.FloatFromRight
											});

										}} >
				        		<Image source={require('../img/home/ellas-bg.png')} style={{height: 100}}>
				        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[0].name}</Text>
				        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[0].number_of_articles} articulos</Text>
				        	    </Image>
			        	    </TouchableOpacity>
			        	</ListItem>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<Image source={require('../img/home/ellos-bg.png')} style={{height: 100}}>
			        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[1].name}</Text>
			        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[1].number_of_articles} articulos</Text>
			        	    </Image>
			        	</ListItem>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<Image source={require('../img/home/infantil-bg.png')} style={{height: 100}}>
			        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[2].name}</Text>
			        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[2].number_of_articles} articulos</Text>
			        	    </Image>
			        	</ListItem>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<Image source={require('../img/home/home-bg.png')} style={{height: 100}}>
			        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[3].name}</Text>
			        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[3].number_of_articles} articulos</Text>
			        	    </Image>
			        	</ListItem>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<Image source={require('../img/home/fitnnesbg.png')} style={{height: 100}}>
			        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[4].name}</Text>
			        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[4].number_of_articles} articulos</Text>
			        	    </Image>
			        	</ListItem>
			        	<ListItem iconRight style={{padding: 0, marginLeft: -2, marginBottom: -2}}>
			        		<Icon name="ios-arrow-dropright-circle" style={{ color: 'rgb(31,75,164)' , paddingRight: 20 }} />
			        		<Image source={require('../img/home/navidad-bg.png')} style={{height: 100}}>
			        		    <Text style={{fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20}}>{this.state.categories[5].name}</Text>
			        		    <Text style={{color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12}}>{this.state.categories[5].number_of_articles} articulos</Text>
			        	    </Image>
			        	</ListItem>
			        </List>
			    </Content>
			</Container>

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