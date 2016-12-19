'use strict'

import React from 'react';
import {Button} from 'native-base';
import { Modal, Text,StyleSheet,Dimensions,View } from 'react-native'; 



export default class Button extends React.Component{ 

	
	render() { 
		if (!this.props.invert) {
		 	return (

		 			
		 			    <Button block rounded transparent={this.props.transparent}
		 			    onPress={ () => { this.setModalVisible(true)} }
		 			    textStyle={this.props.textStyle}
		 			    style={[styles.button,{top:this.props.top},this.props.style]}
		 			    > 
		 			    	{this.props.text}
		 			    </Button>	 			    
		 			
		    );
	    }else{

	    } 
 	} 

}

var window = Dimensions.get('window');

let styles = StyleSheet.create({
	boxContainer:{
		justifyContent:'space-between',
		alignSelf:'center',
		height: window.width*0.75,
		width: window.width*0.75,
		backgroundColor:'#eee',	
		borderRadius:7,

	},
	message:{

		textAlign:'center',
		fontSize:14,
		padding:20
	},
	container:{	
		flex:1,
		
		backgroundColor:'rgba(11,11,11,.5)',
		flexDirection: 'column',
		justifyContent:'center',
		alignItems:'center',
		
		
	},
	button:{		
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: window.width * 0.8,
		alignSelf:'center',
		justifyContent:'center',
		margin:20
	}
	
});
