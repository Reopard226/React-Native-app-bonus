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

import BackIcon from '../Partials/BackIcon';
import Header   from '../Partials/Header';

export default ( props ) => (
		
		<View style={styles.container}>

				<Header titleView="MIS PUNTOS" />              

                <View style={styles.main}>
                	<Text style={styles.balance}>{ props.session.user.currentBalance }</Text>
					<Text style={styles.body}>Puntos disponibles</Text>
					<View style={{
						paddingTop:25,
						marginLeft:5,
						marginRight:5,
						marginTop: 15,
						marginBottom: 20,
						borderTopWidth:2,
						borderTopColor:'rgba(0,0,0,.15)'
					}}>
 						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>¿Cómo gano un punto Bonus?</Text>
					</View>
 					<Text style={[styles.body, {paddingLeft: 10, paddingRight: 10}]}>Acumulas 1 punto por cada $/. 7.50 de consumo en nuestras marcas asociadas presentando tu Bonus y listo! Empieza a disfrutar.
 					</Text>
					<Modal message="Como transferir Puntos" text="Transferir Puntos" top={130}/>	
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
	header:{

		flex:4,
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center'
		
	},	
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
		alignSelf: 'stretch'
	},
	logo:{
		resizeMode: 'contain',
		alignSelf:'center',
	},
	body:{
		fontSize: 13,
		color: 'rgba(0,0,0,.3)',		
		textAlign:'center',
		justifyContent:'center',
		paddingTop: 10,
		fontFamily: 'Varela Round'
	},
	balance:{
		fontSize: 56,
		color: '#194B7C',
		alignSelf:'center',
		paddingTop:30,
		fontFamily: 'Oswald',
		fontStyle: 'italic',
		fontWeight: '300'
		
	}
	
});

