'use strict'

import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import { Text } from 'native-base';

import BackIcon from '../Partials/BackIcon';
import CartIcon from '../Partials/CartIcon';
import CustomTabBar from './Partials/CustomTabBar'
import Header from './Partials/Header';
import ProductList from './Partials/ProductList';

import ScrollableTabView from 'react-native-scrollable-tab-view';

export default ( props ) => (
	<View style={ styles.container }>
		<BackIcon navigator={ props.navigator } />
		<CartIcon />
		<Header { ...props } />
		<ScrollableTabView 
			style={ styles.scrollableTabView } 
			tabBarUnderlineStyle={ styles.tabBarUnderline }
			tabBarActiveTextColor={ styles.tabBarActiveText.color }
			tabBarInactiveTextColor={ styles.tabBarInactiveText }
			renderTabBar={() => <CustomTabBar />}
		>
			<ProductList { ...props } tabLabel="TODOS"/>
			<Text tabLabel="ROPA">ROPA</Text>
			<Text tabLabel="CALZADO">CALZADO</Text>
			<Text tabLabel="ACCESORIOS">ACCESORIOS</Text>
		</ScrollableTabView>
	</View>
);

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 0
	},
	scrollableTabView: {
		backgroundColor: 'rgba(0,0,0,0)',
		paddingTop: 8
	},
	tabBarUnderline: {
		height: 2,
		backgroundColor: 'rgba(0,0,0,0)'
	},
	titleText: {
		color: '#FFF',
		fontSize: 22,
		textAlign: 'center'
	},
	tabBarActiveText: {
		color: '#FFF'
	},
	tabBarInactiveText: {
		color: 'rgba(255,255,255,.4)'
	}
});