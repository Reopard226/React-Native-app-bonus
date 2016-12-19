'use strict'

import React from 'react';
import {
	Button,
	Dimensions,
	Image,
	Modal,
	Navigator,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native';

import { Tabs, Text, Spinner } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import Icon from 'react-native-vector-icons/Ionicons';

export default class Coupons extends React.Component
{

	constructor( props ){

		super( props );

		this.state = {
			modalVisible: false,
			points: null,
			value: null
		}

		this.coupons = [
			{
				id: 1,
				name: 'Cupon 1000',
				points: 1000,
				image: require( '../../img/cupones/cupon1000.jpg' ),
				value: '50.00'
			},
			{
				id: 1,
				name: 'Cupon 500',
				points: 500,
				image: require( '../../img/cupones/cupon500.jpg' ),
				value: '25.00'
			}
		]

	}

	componentDidMount(){

		this.props.dispatch( this.props.couponsActions.requestBonusCoupons( { userId: this.props.session.user.id } ) );

	}

	_items(){

		return this.coupons.map( ( item , index ) => {

			return <Image source={item.image} key={index} style={{ resizeMode: 'stretch' , width: ( Dimensions.get('window').width / 2 ) , height: 210, padding: 0}}>
				<TouchableOpacity
					style={{ flex: 1 , alignSelf: 'stretch' , flexDirection: 'column' , justifyContent: 'flex-end' , alignItems: 'center' }}
					onPress={() => {

						this.setState({ 
							modalVisible: !this.state.modalVisible,
							points: item.points,
							value: item.value
						});

					}}
				>
					<Text style={{ flex: 1 , width: ( Dimensions.get('window').width / 2 ) , maxHeight: 43 , paddingBottom: 18 , paddingTop: 18, paddingLeft: 25 , paddingRight: 5 , color: '#FFF' , backgroundColor: 'rgba(0,0,0,.5)' , fontFamily: 'Varela Round' , textAlign: 'left',fontSize: 15, lineHeight: 12}}>{ item.name }</Text>
				</TouchableOpacity>
			</Image>

		});

	}

	render() {

		if( ! this.coupons )
			return <Spinner color="#FFF" />

		return (
			<View>
				<View style={styles.header}>
					<View style={{width:Dimensions.get('window').width, flexDirection:'row',
								  justifyContent:'center'}}>
						<Image source={require('../../img/bonus-logoBlanco300.png')}
							style={{ height: 58/3.7, // 58
								width: 300/3.7, // 300
								resizeMode: 'contain', top: -5 }} 	
						/>
					</View>
					<Text style={{ fontSize:20, lineHeight: 40, color:'#FFF',
						textAlign:'center', fontFamily: 'Oswald', marginTop: 0,
						top: -20, fontWeight: '100', height: 30
					}}>
					CUPONES
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
							{ `Se procedera el descuento de ${this.state.points} puntos Bonus y se le asignara $\\.${this.state.value} a su tarjeta principal Bonus.` }
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
				<ScrollView contentContainerStyle={{flexWrap:'wrap' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center' ,}} tabLabel="TODOS" style={{ height: 621 ,backgroundColor: '#FFF'}}>
					{ this._items() }
				</ScrollView>
				<Text>{ this.props.coupons.bonusCoupons[0] ? this.props.coupons.bonusCoupons[0].rawRequest : '' }</Text>
			</View>
		);

	}
}

let styles = StyleSheet.create({
	header:{
		height: 100,
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	modalBackgroundStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	innerContainer: {
		borderRadius: 10,
		alignItems: 'center',
	},
	innerContainerTransparentStyle: {
		backgroundColor: '#fff', padding: 20
	},
	row: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		marginBottom: 20,
	},
	rowTitle: {
		flex: 1,
		fontWeight: 'bold',
	},
	button: {
		borderRadius: 5,
		flexGrow: 1,
		height: 44,
		alignSelf: 'stretch',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	buttonText: {
		fontSize: 18,
		margin: 5,
		textAlign: 'center',
	},
	modalButton: {
		marginTop: 10,
	},
	pickerItem: {
		fontSize: 16,
	},
});