'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';
import {Button, Icon} from 'native-base';

import Header from '../Partials/Header';

export default ( props ) => (

		
		<View style={styles.container}>
                               
				
				<Header titleView="MI SALDO" />
                <View style={styles.main}>
                	<Text style={styles.balance}>S./564812</Text>
					<Text style={styles.body}>Saldo disponible</Text>
					<Text style={{
						color: 'black',
						padding:20,
						fontSize:18,textAlign:'center',
						borderTopWidth:2,
						borderColor:'#eee'
					}}>
 					Para pagar con Bonus, necesitas tener saldo en tu cuenta Bonus.
					</Text>
 					<Text style={styles.body}>Si no tienes saldo, puedes recargar saldo con tu tarjeta vinculada,
 					o a través de nuestros establecimientos colaboradores.
 					</Text>
					<Button block rounded style={styles.button}> Añadir Dinero </Button>	
                </View>

        </View>
        

    
);

let styles = StyleSheet.create({
	container:{

		height:Dimensions.get('window').height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},
	main:{
		flex:9,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
	},
	logo:{
		resizeMode: 'contain',
		alignSelf:'center',
		height:40
	},
	body:{
		fontSize: 14,
		color: 'gray',		
		textAlign:'center',
		justifyContent:'center',
		padding:40,
		fontFamily: 'Oswald'
	},
	balance:{
		fontSize: 56,
		color: 'rgb(32,76,165)',
		alignSelf:'center',
		padding:30,
		
	},
	button:{		
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center'
	}
});
