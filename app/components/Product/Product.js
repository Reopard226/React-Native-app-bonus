'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import {Button, List, ListItem, Radio, Spinner} from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

import CartIcon from '../Partials/CartIcon';
import BackIcon from '../Partials/BackIcon';

export default class Product extends React.Component {

	componentDidMount(){

		this.props.dispatch( this.props.productsActions.requestProductDetail( { productId: this.props.product.id } ) );

	}

	render(){ 

		console.log( this.props.products.productDetail );

		if( this.props.products.productDetail === null )
			return <Spinner color="#FFF" />

		return (
			<View style={styles.container}>
				<BackIcon { ...this.props } />
				<CartIcon { ...this.props } />
				<View style={styles.header}>
					<View style={{width:Dimensions.get('window').width,
									flexDirection:'row',
									justifyContent:'center'}}>
						<Image source={require('../../img/bonus-logoBlanco300.png')}
								 style={{ 
								height: 58/3.7, // 58
								width: 300/3.7, // 300
										resizeMode: 'contain',
										top: -5
								 }}
						/>
					</View>
					<Text style={{
						fontSize:20,
						color:'#FFF',
						textAlign:'center',
						fontFamily: 'Oswald',
						marginTop: 0,
						top: -10
					}}>
						{ this.props.product.category.toUpperCase() }
					</Text>
				</View>
				<View style={styles.main}>
					<Image source={{ uri: ( 'http://www.bonus.com.pe/images/productos/' + this.props.product.id + '.jpg' ) }} 
						style={{
							alignSelf:'center',
							marginTop: 10,
							resizeMode: 'contain',
							height:200,
							width:200,
						}}
					/>
					<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingBottom:5}}>
						<Icon name="ios-star" size={15} color="gold" />
						<Icon name="ios-star" size={15} color="gold" />
						<Icon name="ios-star" size={15} color="gold" />
					</View>
					<View style={{
						paddingTop:8,
						marginLeft:5,
						marginRight:5,
						marginTop: 0,
						marginBottom: 10,
						// borderTopWidth:2,
						// borderTopColor:'rgba(0,0,0,.15)'
					}}>
						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>{ this.props.products.productDetail.name }</Text>
					</View>
					<Text style={styles.body}>{ this.props.products.productDetail.description }</Text>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 80, paddingRight: 80}}>
						<Radio style={{flex: 1}} selected={false} />
                        <Text style={{ alignSelf: 'center' ,flex: 5, fontFamily: 'Oswald', fontWeight: 'bold', fontSize: 18}}>{ this.props.products.productDetail.points + 'pts + $/.' + this.props.products.productDetail.plusValue }</Text>
					</View>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 80, paddingRight: 80}}>
						<Radio style={{flex: 1}} selected={false} />
                        <Text style={{ alignSelf: 'center' ,flex: 5, fontFamily: 'Oswald', fontWeight: 'bold', fontSize: 18}}>{ this.props.products.productDetail.points2 + 'pts + $/.' + this.props.products.productDetail.plusValue2 }</Text>
					</View>
					<Button block rounded style={styles.button}> Añadir al carrito </Button>  
					{ this._seeStock() } 
				</View>
			</View>
		);
	}

	_seeStock(){

		if( true || this.props.products.productDetail.errorCode != '5' )
			return <Button block rounded textStyle={{color: 'blue'}} style={styles.button2}> Ver Stock </Button> ;

		return null;

	}
}

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
		
	},
	button:{		
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center',
		marginTop: 20,
	},
	button2:{		
		backgroundColor: '#FFF', 
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center',
		marginTop: 20,
	}
});
