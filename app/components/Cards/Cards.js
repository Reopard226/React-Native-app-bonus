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
import CardList from './CardList';

export default (props)=>(

		<View style={styles.container}>

					<Header titleView="MIS TARJETAS" />              

	                <View style={styles.main}>
	                						
						<View style={{
							paddingTop:25,
							marginLeft:5,
							marginRight:5,
							marginTop: 15,
							marginBottom: 20,
							borderBottomWidth:2,
							borderBottomColor:'rgba(0,0,0,.15)'
						}}>
	 						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>Recuerda que no compartimos tu información financiera</Text>
						</View>
	 					<CardList />
						<Modal  text="Recarga Automática" message="Some Text" />
						<Modal  text="Agregar Tarjeta" message="Some Text"    />
						
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

		height:Dimensions.get('window').height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},	
});