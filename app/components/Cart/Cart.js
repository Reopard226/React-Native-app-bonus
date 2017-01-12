'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';

import {Button, Icon , List , ListItem} from 'native-base';

import BackIcon from '../Partials/BackIcon';
import Header   from '../Partials/Header';

const items = ( props ) => {

	return props.shopping.cart.map(( item , index ) => {

		return <View key={index} style={{ paddingLeft: 20, paddingRight: 20 , flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', paddingBottom: 10 , paddingTop: 10 , borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.15)'}}>
			<Image style={{width: 80 , height: 80}} source={{ uri: ( 'http://www.bonus.com.pe/images/productos/' + item.id + '.jpg' ) }} />
			<Text style={{flex:1, fontSize: 12, fontFamily: 'Varela Round', marginLeft: 10, marginRight: 10}}>{item.name}</Text>
			<Text style={{flex:1,color: 'blue',fontSize: 12,fontFamily: 'Oswald'}}>{`${item.points} pts. + $/.${item.value}`}</Text>
			<TouchableOpacity
				onPress={() => {
					props.dispatch( props.shoppingActions.removeFromCart( index ) );
				}}
			>
				<Image style={{width: 40 , height: 40}} source={require( '../../img/cupones/delete.png' )} />
			</TouchableOpacity>
		</View>

	});

}

const total = ( props ) => {


	var totalValue = 0;
	var totalPoints = 0;

	props.shopping.cart.forEach(( item , index ) => {
		totalValue += parseFloat( item.value );
		totalPoints += parseFloat( item.points );
	});

	return <View style={{flexDirection: 'row' , justifyContent: 'center' , alignItems: 'center', paddingTop: 10 , paddingBottom: 10 , borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,.15)'}}>
	<Text style={{  paddingLeft: 40 , flex: 1 ,fontSize: 16, fontFamily: 'Oswald' , fontWeight: 'bold' , paddingTop: 10 , paddingBottom: 10, textAlign: 'left'}}>
		TOTAL
	</Text>
	<Text style={{ paddingRight: 40 , flex: 1 , fontSize: 16, fontFamily: 'Oswald' , fontWeight: 'bold' , paddingTop: 10 , paddingBottom: 10, textAlign: 'right'}}>
		{`${totalPoints} pts. + $/. ${totalValue}`}
	</Text></View>

}

export default ( props ) => <View style={styles.container}>
	<Header titleView="MI CARRITO" noBackBtn/> 
	<BackIcon { ...props }/>             
	<View style={styles.main}>
		{items( props )}
		{total( props )}
		<Button style={{width: 300, alignSelf: 'center', borderRadius: 24, marginTop: 40, backgroundColor: 'rgb(32,76,165)'}}>Canjear</Button>
	</View>
</View>;

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
		padding:0,		
		paddingTop: 0,
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

