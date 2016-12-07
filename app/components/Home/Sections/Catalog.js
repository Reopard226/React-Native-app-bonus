'use strict'

import React from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import { Container, Content, List, ListItem, Text , Icon } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import theme from '../../../themes/bonus';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

const from_redux = {
	categories: [
		{
			name: 'PARA ELLAS',
			number_of_articles: 34,
			img: require('../../../img/home/ellas-bg.png')
		},
		{
			name: 'PARA ELLOS',
			number_of_articles: 24,
			img: require('../../../img/home/ellos-bg.png')
		},
		{
			name: 'INFANTIL Y JÓVENES',
			number_of_articles: 123,
			img: require('../../../img/home/infantil-bg.png')
		},
		{
			name: 'PARA EL HOGAR',
			number_of_articles: 46,
			img: require('../../../img/home/home-bg.png')
		},
		{
			name: 'FITNESS Y SALUD',
			number_of_articles: 52,
			img: require('../../../img/home/fitnnesbg.png')
		},
		{
			name: 'NAVIDAD',
			number_of_articles: 52,
			img: require('../../../img/home/navidad-bg.png')
		}
	]
}

export default ( props ) => {

	const items = from_redux.categories.map( ( item , index ) => {
		return (
			<ListItem 
				key={ index } 
				style={ styles.listItem }
				// iconRight
			>
				<Image style={{height:31,resizeMode: 'contain',position:'absolute', top: 35,right:13, zIndex: 5}} source={ require( '../../../img/home/btn-category.png' ) } />
				<TouchableOpacity onPress={ ( event ) => {

						props.navigator.push({
							name: "Catalog",
							sceneConfig: Navigator.SceneConfigs.FloatFromRight
						});

					}}
				>
					<Image source={ item.img } style={ styles.image }>
					    <Text style={ styles.itemName }>
					    	{ item.name }
					    </Text>
					    <Text style={ styles.itemCount }>
					    	{ item.number_of_articles } articulos
					    </Text>
				    </Image>
			    </TouchableOpacity>
			</ListItem>
		);
	});

	return (
		<Container style={ styles.container }>
			<Content>
				<List>
					{ items }
				</List>
			</Content>
		</Container>
	)

}

//<Icon name="ios-arrow-dropright-circle" style={ styles.icon } />

let styles = StyleSheet.create({
	container: {
		height:440
	},
	icon: {
		color: 'rgb(31,75,164)',
		paddingRight: 20 
	},
	image: {
		height: 100
	},
	itemCount: {
		color: 'rgba(255,255,255,.6)', paddingLeft: 20, fontSize: 12
	},
	itemName: {
		fontWeight: 'bold', color: '#FFF', paddingTop: 30, paddingLeft: 20
	},
	listItem: {
		padding: 0, marginLeft: -2, marginBottom: -2
	}
});