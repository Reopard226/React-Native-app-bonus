'use strict'

import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Catalogue from './Sections/Catalog';
import Coupons from './Sections/Coupons';
import CartIcon from '../Partials/CartIcon';
import CustomTabBar from './Partials/CustomTabBar';
import Header from './Partials/Header';
import MenuIcon from './Partials/MenuIcon';

export default ( props ) => (

	<View>
		<CartIcon { ...props } />
		<MenuIcon { ...props } />
		<Header { ...props }/>
		<ScrollableTabView 
			style={ styles.scrollableTabView } 
			tabBarUnderlineStyle={ styles.tabBarUnderlineStyle }
			tabBarTextStyle={ styles.tabBarTextStyle }
			tabBarActiveTextColor={ styles.tabBarActiveTextColor.color }
			tabBarInactiveTextColor={ styles.tabBarInactiveTextColor.color }
			renderTabBar={() => <CustomTabBar />}
		>
			<Catalogue tabLabel="CATÁLOGO" { ...props }/>
			<Text tabLabel="PROMOCIONES" style={{flex: 1, textAlign: 'center', paddingTop: 40, fontWeight: 'bold', fontFamily: 'Varela Round'}}>NO HAY PROMOCIONES EN ESTE MOMENTO</Text>
			<Coupons tabLabel="CUPONES" { ...props }/>
		</ScrollableTabView>
	</View>

);

let styles = StyleSheet.create({
	scrollableTabView: {
		backgroundColor: '#FFF',
		paddingTop: 0
	},
	tabBarUnderlineStyle: {
		height: 2,
		backgroundColor: 'rgb(31,75,164)'
	},
	tabBarTextStyle: {
		fontSize: 12,
		fontFamily: 'Oswald'
	},
	tabBarActiveTextColor: {
		color: 'black'
	},
	tabBarInactiveTextColor: {
		color: 'rgba(0,0,0,.4)'
	}
});