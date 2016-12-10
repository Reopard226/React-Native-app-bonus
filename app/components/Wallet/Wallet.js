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

export default ( props ) => (

		
		<View style={styles.container}>
                <View style={styles.header}>
                	<View style={{width:Dimensions.get('window').width,
                				  flexDirection:'row',
                				  justifyContent:'center'}}>
                		<BackIcon/>
                		<Image source={require('../../img/bonus-logoBlanco300.png')}
                			   style={{ 
                			   			height:25,
		                			   	resizeMode: 'contain',
		                			   	margin:10,
		                			   	
		                			   }} 	
        				/>
        				<Icon name='ios-refresh' style={{color:'white',padding:5}}/>
                	</View>
            		<Text style={{

            			fontSize:25,
						color:'#FFF',
						textAlign:'center',
					}}>
            		MI SALDO
            		</Text>
                </View>               

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
	header:{

		flex:1,
		flexDirection:'column',
		justifyContent:'space-around',
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

 // 				   <Button transparent>
 //                    	<BackIcon/> 
 //                    </Button>	                   	                    
 //                    <Thumbnail square source={ require( '../../img/bonus-logoBlanco300.png' ) } style={ styles.logo }/>                
 //                    <Button transparent>
 //                        <Icon name='ios-refresh' color='white'/>
 //                    </Button>
