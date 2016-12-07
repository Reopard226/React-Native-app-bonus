'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';

import {Container, Content, List, ListItem, Thumbnail} from 'native-base';
import DrawIcon from './DrawIcon';

export default ( props ) => (
	<Container>
                <Content>
                    <List>
                    	<View>
                            <Image 
                            source={require("../../../img/menu/header-menu.png")}
                            style={styles.logo}
                            />                 			
                        </View>
                        <View style={styles.Item}>
                            <DrawIcon 
                            icon={require("../../../img/menu/puntos.png")}
                            text="Mis Puntos"
                            />
                        </View> 
                        <View style={styles.Item}>
                            <DrawIcon 
                            icon={require("../../../img/menu/icon-saldo.png")}
                            text="Mi Saldo"
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
                            <DrawIcon 
                            icon={require("../../../img/menu/icon-logout.png")}
                            text="Cerrar Sesión"
                            />
                        </View>                       
                    </List>
                </Content>
    </Container>

);

const styles = StyleSheet.create({
	Item:{
		
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		padding:20

	},
	logo:{

		height:90,
		resizeMode:'contain',
		alignSelf:'center'
	}

});