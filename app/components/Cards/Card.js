import React from 'react';
import { Navigator, StyleSheet, Dimensions, View, Text, Image} from 'react-native';


import Header   from '../Partials/Header';
import Button   from '../Partials/Button';

import ContentContainer from '../Containers/ContentContainer';
import BackHeader from '../Partials/BackHeader';

var window = Dimensions.get('window');

export default ( props ) => <View  style={ { flex: 1 } }>     
	<BackHeader title="MIS TARJETAS" {...props}/>
	<ContentContainer>
		<View style={ { flex: 1 , padding: 20, alignItems: 'center' , justifyContent: 'center'} }>   	        
			<View style={styles.imgContainer}>
				<Image source={require('../../img/cards/Visa.png')} style={styles.img}/>
				<Text>Tarjeta ..... 08/18</Text>
			</View> 
			<View style={styles.textContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-between'}}>    
					<Text >Fecha de vencimiento</Text>
					<Text >07/17</Text>
				</View>                        
				<View style={styles.bar}/>
				<Text style={styles.text}>Direccion de Facturación</Text>
				<Text style={{width:120,alignSelf:'flex-start'}}>ksjdgfnf wñdfj wñlfnm wdpkf </Text>
				<View style={styles.bar}/>    
			</View>
			<Button invert text="Editar Tarjeta" onPress={
				(event)=>{
					props.navigator.push({
						name: "EditCard",                          
						sceneConfig: Navigator.SceneConfigs.FloatFromRight
					});
				}
			}/>
			<Button text="Eliminar Tarjeta"/>
		</View>
	</ContentContainer>
</View>;


let styles = StyleSheet.create({
	imgContainer:{
		width: window.width * 0.6,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5,
		borderWidth:1,
		borderColor:'rgba(0,0,0,.15)'
	},
	img:{
		resizeMode:'contain',
		width: 120
	},
	textContainer:{
		width:window.width * 0.8,
		marginTop:15,
		marginBottom:30
	},
	bar:{
		borderBottomWidth:2,
		borderBottomColor:'gray',
		marginTop:15,
		alignSelf:'stretch',
		width:window.width * 0.8,
		marginBottom:15
	},
	text:{
		fontSize:12,
		color:'gray',
		paddingTop:10,
		paddingBottom:10,
		textAlign:'left'
	}
});