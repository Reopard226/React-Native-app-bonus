'use strict'

import React from 'react';
import {
	Dimensions,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { Button, List, ListItem, Radio, Picker, Spinner } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

import CartIcon from '../Partials/CartIcon';
import GoBack from '../Partials/GoBack';

export default class Product extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			modalVisible: false,
			points: null,
			value: null,
			radioSelected: 1,
			init: false
		}
	}

	componentDidMount(){

		this.props.dispatch( this.props.productsActions.requestProductDetail( { productId: this.props.product.id } ) );

	}

	componentWillReceiveProps( nextProps ){

		if( !this.state.init && nextProps.products.productDetail !== null ){

			if( nextProps.products.productDetail.value !== null && nextProps.products.productDetail.points !== null ){

				this.setState({
					points: nextProps.products.productDetail.points,
					value: nextProps.products.productDetail.plusValue,
					init: true
				});

			}

		}

	}

	render(){

		if( this.props.products.productDetail === null )
			return <Spinner color="#FFF" />

		return (
			<View style={styles.container}>
				<GoBack { ...this.props } />
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
				<Modal
					animationType={'slide'}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => null}
					supportedOrientations={ ['portrait'] }
					>
					<View style={[styles.container, styles.modalBackgroundStyle]}>
						<View style={[styles.innerContainer, styles.innerContainerTransparentStyle]}>
						<Text>
							{ `Su producto se agregó con éxito al carrito.` }
						</Text>
						<Button
							onPress={ () => {

								this.setState({ modalVisible: false })

								this.props.navigator.push({
									name: "CouponConfirm",
									sceneConfig: Navigator.SceneConfigs.FloatFromRight
								});

							}}
							style={styles.modalButton}
							title={"Aceptar"}>
							Aceptar
						</Button>
						<Button
							onPress={ () => this.setState({ modalVisible: false }) }
							style={styles.modalButton}
							title={"Cerrar"}>
							Cerrar
						</Button>
						</View>
					</View>
				</Modal>
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
					<TouchableOpacity style={{ borderTopWidth: 1, borderTopColor:'rgba(0,0,0,.15)' , paddingTop: 10 , justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 80, paddingRight: 80}}
						onPress={() => {
							this.setState({ 
								radioSelected: 1 , 
								value: this.props.products.productDetail.plusValue,
								points: this.props.products.productDetail.points 
							})
						}}
					>
						<Radio style={{flex: 1}} selected={this.state.radioSelected == 1 ? true : false} />
                        <Text style={{ alignSelf: 'center' ,flex: 5, fontFamily: 'Oswald', fontWeight: 'bold', fontSize: 18}}>{ this.props.products.productDetail.points + 'pts + $/.' + this.props.products.productDetail.plusValue }</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor:'rgba(0,0,0,.15)' , paddingBottom: 15 , justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: 80, paddingRight: 80}}
						onPress={() => {
							this.setState({ 
								radioSelected: 2 , 
								value: this.props.products.productDetail.plusValue2,
								points: this.props.products.productDetail.points2 
							})
						}}
					>
						<Radio style={{flex: 1}} selected={this.state.radioSelected == 2 ? true : false} />
                        <Text style={{ alignSelf: 'center' ,flex: 5, fontFamily: 'Oswald', fontWeight: 'bold', fontSize: 18}}>{ this.props.products.productDetail.points2 + 'pts + $/.' + this.props.products.productDetail.plusValue2 }</Text>
					</TouchableOpacity>
					<View style={{ justifyContent: 'center' , alignItems: 'center', flexDirection: 'row' }}>
						<View style={[ styles.button , { 
							flex: 1 , borderRadius: 6 , backgroundColor: 'rgba(0,0,0,0)' , 
							borderWidth: 1, borderColor: 'rgba(0,0,0,.2)' ,
							marginLeft: 10 , marginRight: 10 ,
							flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center',
							alignSelf: 'stretch' } ]}>
							<Image style={ styles.caret } source={ require( '../../img/product/arrow-select.png' ) }/>
							<Picker
							iosHeader="Select one"
							mode="dropdown"
							selectedValue={"1"}
							onValueChange={()=> null}
							style={{ flex: 1 , alignSelf: 'stretch' , marginLeft: 10 }}
							textStyle={{ flex: 1 , alignSelf: 'stretch' , textAlign: 'left' , fontSize: 12 , paddingLeft: 14 , paddingTop: 2}}
							>
								<Picker.Item label="1" value="1" />
								<Picker.Item label="2" value="2" />
								<Picker.Item label="3" value="3" />
								<Picker.Item label="4" value="4" />
								<Picker.Item label="5" value="5" />
								<Picker.Item label="6" value="6" />
								<Picker.Item label="7" value="7" />
								<Picker.Item label="8" value="8" />
								<Picker.Item label="9" value="9" />
								<Picker.Item label="10" value="10" />
							</Picker>
						</View>
						<Button block rounded style={styles.button}
							onPress={ () => {
								this.props.dispatch( this.props.shoppingActions.addToCart({ 
									id: this.props.product.id, 
									name: this.props.products.productDetail.name,
									value: this.state.value,
									points: this.state.points
								}));
							}}
						> Añadir al carrito </Button>  
					</View>
					{ this._seeStock() } 
				</View>
			</View>
		);
	}

	_seeStock(){

		if( true || this.props.products.productDetail.errorCode != '5' )
			return <Button block rounded textStyle={{color: 'blue', fontSize: 12}} style={styles.button2}> Ver Stock </Button> ;

		return null;

	}
}

let styles = StyleSheet.create({
	caret:{
		position: 'absolute',
		right: 14,
		top: 14,
		width:10,
		height:10,
		resizeMode: 'contain'
	},
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
		flex: 3,
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		// alignSelf:'center',
		marginTop: 20,
	},
	button2:{		
		flex: 1,
		backgroundColor: '#FFF', 
		borderWidth: 2,
		borderColor: 'rgba(0,0,255,.3)',
		borderRadius: 20,
		shadowColor: 'transparent',		
		alignSelf:'stretch',
		marginTop: 20,
		maxHeight: 60,
		maxWidth: 364,
		marginLeft: 8
	}
});
