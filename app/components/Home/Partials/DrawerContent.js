'use strict'

import React from 'react';
import {
	Image,
	ListView,
	Navigator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import {Container, Content, List, ListItem, Thumbnail} from 'native-base';
import DrawIcon from './DrawIcon';

const imgW = 99;
const imgH = 99 * 1.12060301508;

export default ( props ) => (
	<Container>
		<Content>
			<List>
				<View>
					<Image 
						source={require("../../../img/menu/header-menu.png")}
						style={{width: imgW, height: imgH ,resizeMode: 'stretch'}}
					/>
				</View>
				<View style={styles.Item}>
					<TouchableOpacity style={ styles.touchableOpacity }>
						<Image style={ styles.image } source={ require("../../../img/menu/puntos.png") }/>
						<Text style={ styles.text }> {"Mis Puntos"} </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.Item}>
					<DrawIcon 
						icon={require("../../../img/menu/icon-saldo.png")}
						text="Mi Saldo"
						goto="Wallet"
						{ ...props }
					/>
				</View>
				<View style={styles.Item}>
					<DrawIcon 
						icon={require("../../../img/menu/icon-tarjetas.png")}
						text="Mis Tarjetas"
					/>
				</View>
				<View style={styles.Item}>
					<DrawIcon 
						icon={require("../../../img/menu/icon-ajustes.png")}
						text="Ajustes"
					/>
				</View>
				<View style={styles.Item}>
					<TouchableOpacity style={ styles.touchableOpacity }>
						<Image style={ [ styles.image , { width: 30 , height: 30 } ] } source={ require("../../../img/menu/icon-logout.png") }/>
						<Text style={ [ styles.text , { paddingTop: 14 } ]  }> {"Cerrar Sesión"} </Text>
					</TouchableOpacity>
				</View>
			</List>
		</Content>
	</Container>

);

const styles = StyleSheet.create({

	touchableOpacity: {

		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0,0,0,.2)',
		paddingTop: 18,
		paddingBottom: 18

	},

	image:{

		alignSelf:'center',
		width: 40,
		height: 40,
		resizeMode: 'contain',

	},

	Item:{
		
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		padding: 0

	},

	logo:{

		height:90,
		resizeMode:'contain',
		alignSelf:'center'

	},

	text:{
		paddingTop: 8,
		color: '#37587b',
		fontSize: 10,
		fontWeight: 'bold'
	}

});