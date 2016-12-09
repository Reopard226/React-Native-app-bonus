'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
} from 'react-native';

import {Button, Icon, Thumbnail , Header,Container, Content} from 'native-base';

import BackIcon from '../Partials/BackIcon';

export default ( props ) => (
<Container>
    <Content>
		
		<View style={styles.container}>
                <Header style={styles.header}>
                	<Button transparent>
                    	<BackIcon/> 
                    </Button>	                   	                    
                    <Thumbnail square source={ require( '../../img/bonus-logoBlanco300.png' ) } style={ styles.logo }/>                
                    <Button transparent>
                        <Icon name='ios-refresh' color='white'/>
                    </Button>

                </Header>
                <Text style={{fontSize:20,color:'#FFF',alignSelf:'center',padding:20}}>MI SALDO</Text>

                <View style={styles.main}>
                	<Text style={styles.balance}>S./564812</Text>
					<Text style={styles.body}>Saldo disponible</Text>
					<Text style={{color: 'black',padding:10,fontSize:18}}>
 					Para pagar con Bonus, necesitas tener saldo en tu cuenta Bonus.
					</Text>
 					<Text style={styles.body}>Si no tienes saldo, puedes recargar saldo con tu tarjeta vinculada,
 					o a través de nuestros establecimientos colaboradores.
 					</Text>
					<Button block rounded style={styles.button}> Añadir Dinero </Button>	
                </View>
        </View>
    </Content>    
</Container>
    
);

let styles = StyleSheet.create({
	logo:{
		resizeMode: 'contain',
		alignSelf:'center',
		height:40
	},
	header:{
	
		backgroundColor:'transparent',
		flexDirection:'row',
		justifyContent:'space-between',
		padding:20,


	},
	container:{
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center'			
				
	},
	main:{
		flex:1,
		backgroundColor:'white',
		padding:20,
		alignItems:'center',
		justifyContent:'center'
		
	},
	body:{
		fontSize: 14,
		color: 'gray',
		padding:40,
		alignSelf:'center',
		justifyContent:'center'
	},
	balance:{
		fontSize: 56,
		color: 'rgb(32,76,165)',
		alignSelf:'center',
		paddingTop:30		
	},
	button:{
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',
		padding:10,
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center'
	}
});
