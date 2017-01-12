import React from 'react';
import { Navigator, StyleSheet, View, Dimensions, Text, Image } from 'react-native';


import Header   from '../Partials/Header';
import Button   from '../Partials/Button';
import CardList from './Partials/CardList';

var window = Dimensions.get('window');

export default (props)=>(

		<View style={styles.container}>

					<Header titleView="MIS TARJETAS" {...props}/>              

	                <View style={styles.main}>
	                						
						<View style={{
							paddingTop:20,
							marginLeft:5,
							marginRight:5,
							marginTop: 15,
							paddingBottom: 30,
							borderBottomWidth:2,
							borderBottomColor:'rgba(0,0,0,.15)'
						}}>
	 						<Text style={{fontFamily: 'Varela Round',textAlign:'left',fontSize:18,color: 'black', paddingBottom: 40}}>Recuerda que no compartimos tu información financiera</Text>
						</View>
	 					<CardList {...props}/>
	 					<Button invert text="Recarga Automática"/>
	 					<Button  text="Agregar Tarjeta" onPress={
	 						(event)=>{
                            props.navigator.push({
                                name: "AddCard",                          
                                sceneConfig: Navigator.SceneConfigs.FloatFromRight
                            });
                        }
	 					}/>

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
		alignItems:'center',
		alignSelf:'stretch'
				
	},	
});