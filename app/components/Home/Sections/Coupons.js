'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	Navigator,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native';

import { Tabs, Text, Spinner } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import Icon from 'react-native-vector-icons/Ionicons';

export default class Coupons extends React.Component
{

	constructor( props ){

		super( props );

		this.categories = [

			{
				code: 1,
				name: 'Bicicletas',
				image: require( '../../../img/cupones/bicicletas.jpg' )

			},
			{
				code: 2,
				name: 'Alimentos / bebidas',
				image: require( '../../../img/cupones/alimentos.jpg' )

			},
			{
				code: 2,
				name: 'Vestuario / calzado',
				image: require( '../../../img/cupones/vestuario.jpg' )

			},
			{
				code: 2,
				name: 'Puntos por soles',
				image: require( '../../../img/cupones/bonus.jpg' )

			},
			{
				code: 2,
				name: 'Deportes / aire libre',
				image: require( '../../../img/cupones/deporte.jpg' )

			},
			{
				code: 2,
				name: 'Accesorios',
				image: require( '../../../img/cupones/accesorios.jpg' )

			},
			{
				code: -1,
				name: '',
				image: null

			},
			{
				code: -1,
				name: '',
				image: null

			},


		]

	}

	_items(){

		return this.categories.map( ( item , index ) => {

			return <Image source={item.image} key={index} style={{ resizeMode: 'stretch' , width: ( Dimensions.get('window').width / 2 ) , height: 210, padding: 0}}>
				<TouchableOpacity
					style={{ flex: 1 , alignSelf: 'stretch' , flexDirection: 'column' , justifyContent: 'flex-end' , alignItems: 'center' }}
					onPress={() => {

						this.props.navigator.push({
							name: "Coupons",
							category: { 
								id: item.code,
								name: item.name
							},
							sceneConfig: Navigator.SceneConfigs.FloatFromRight
						});

					}}
				>
					<Text style={{ flex: 1 , width: ( Dimensions.get('window').width / 2 ) , maxHeight: 43 , paddingBottom: 18 , paddingTop: 18, paddingLeft: 25 , paddingRight: 5 , color: '#FFF' , backgroundColor: 'rgba(0,0,0,.5)' , fontFamily: 'Varela Round' , textAlign: 'left',fontSize: 15, lineHeight: 12}}>{ item.name }</Text>
				</TouchableOpacity>
			</Image>

		});

	}

	render() {

		if( ! this.categories )
			return <Spinner color="#FFF" />

		return (
			<ScrollView contentContainerStyle={{flexWrap:'wrap' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center' ,}} tabLabel="TODOS" style={{ height: 621 ,backgroundColor: '#FFF'}}>
				{ this._items() }
			</ScrollView>
		);

	}
}