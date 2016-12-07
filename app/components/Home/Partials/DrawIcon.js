'use strict'

import React from 'react';
import {
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default class DrawIcon extends React.Component {

	render(){
		return(
		<TouchableOpacity>
			<Image style={ styles.image } source={ this.props.icon}/>
			<Text style={styles.text}> {this.props.text} </Text>
		</TouchableOpacity>
		);
	}
}	
var box = 30;

const styles = StyleSheet.create({

	image:{

		alignSelf:'center',
		width:box,
		height:box,
		resizeMode: 'contain'
	},
	text:{
		padding:10,
		color: '#37587b',
	}
});