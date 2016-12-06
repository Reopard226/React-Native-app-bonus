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
import Header from './Partials/Header';
import MenuIcon from './Partials/MenuIcon';

// import Drawer from 'react-native-drawer';

export default ( props ) => (

	<View>
		<MenuIcon />
		<Header />
		<ScrollableTabView 
			style={ styles.scrollableTabView } 
			tabBarUnderlineStyle={ styles.tabBarUnderlineStyle }
			tabBarTextStyle={ styles.tabBarTextStyle }
			tabBarActiveTextColor={ styles.tabBarActiveTextColor.color }
			tabBarInactiveTextColor={ styles.tabBarInactiveTextColor.color }
		>
			<Catalogue tabLabel="CATÁLOGO" navigator={ props.navigator }/>
			<Text tabLabel="PROMOCIONES">PROMOCIONES</Text>
			<Text tabLabel="CUPONES">CUPONES</Text>
		</ScrollableTabView>
	</View>

);

let styles = StyleSheet.create({
	scrollableTabView: {
		backgroundColor: '#FFF',
		paddingTop: 10
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