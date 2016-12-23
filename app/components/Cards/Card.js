import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';


import Header   from '../Partials/Header';
import Modal   from '../Partials/Modal';
import Button   from '../Partials/Button';
import CardList from './CardList';

var window = Dimensions.get('window');

export default (props)=>(

		<View style={styles.container}>

					<Header titleView="MIS TARJETAS" {...props}/>              

	                <View style={styles.main}>
	                						
						
						<Button invert onPress={ ()=>{ console.log("Edit card router")}} text="Editar Tarjeta"  />
						
						<Modal  text="Agregar Tarjeta" message="Some Text" top={20} />
						
	                </View>
	    </View>

);

let styles = StyleSheet.create({
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
		alignSelf: 'stretch'
	},
	container:{

		height:window.height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},	
});