'use strict'

import React from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	View
} from 'react-native';

import { Tabs, Text } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import ProductListToolbar from './ProductListToolbar';

export default class ProductList extends React.Component
{

	render() {

		return (
			<ScrollView tabLabel="TODOS" style={{backgroundColor: '#FFF'}}>
				<ProductListToolbar />
				<Grid>
					<Row style={{height: 280,backgroundColor: '#FFF'}}>
						<Grid>
						<Col style={{height: 280,paddingTop: 32}}>
							<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Botas de Cuero Londos Chelsea</Text>
							<Image source={require('../../../img/lista-categoria/product-1.png')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
							<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
							<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
						</Col>
						<Col style={{height: 280,paddingTop: 32}}>
							<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Lentes Curvos Grises</Text>
							<Image source={require('../../../img/lista-categoria/product-2.png')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
							<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
							<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
						</Col>
						</Grid>
					</Row>
					<Row style={{height: 280,backgroundColor: '#FFF'}}>
						<Grid>
						<Col style={{height: 280,paddingTop: 32}}>
							<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Bolso Permeable Militar</Text>
							<Image source={require('../../../img/lista-categoria/product-3.jpg')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
							<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
							<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
						</Col>
						<Col style={{height: 280,paddingTop: 32}}>
							<Text style={{paddingBottom: 20,alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>Maletin de cuero Longchamp</Text>
							<Image source={require('../../../img/lista-categoria/product-4.jpg')} style={{marginBottom: 20,alignSelf:'center',width:120,height:120,resizeMode: 'contain',}} />
							<Text style={{paddingBottom: 4,fontWeight: 'bold',alignSelf:'center',textAlign: 'center',fontSize: 12,width: 120, lineHeight: 12}}>999pts. + $/.250</Text>
							<Text style={{alignSelf:'center',textAlign: 'center',fontSize: 10,width: 120, lineHeight: 9, color: 'rgba(0,0,0,.6)'}}>2000pts. + $/1</Text>
						</Col>
						</Grid>
					</Row>
				</Grid>
			</ScrollView>
		);

	}
}