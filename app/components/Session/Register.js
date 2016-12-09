'use strict'

import React, { Component } from 'react';
import {
	Image,
	Navigator,
	StyleSheet,
	// Text,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from '../Partials/StatusBarBackground';
import BackIcon from './Partials/BackIcon';

import theme from '../../themes/bonus';

export default class Register extends Component
{

	constructor( props ){
		super( props );
		this.state = {
			loggedIn: false,
		};
	}

	render(){

		if ( this.state.loggedIn )
			return null;

		return (

			<Grid>
				<StatusBarBackground />
				<BackIcon index={ -1 } changeScreen={this.props.changeScreen} />
				<Row size={3} style={styles.row}>
					<View style={styles.logoContainer} >
						<Image style={styles.logo} source={require('../../img/bonus-logoBlanco300.png')} />
					</View>
				</Row>
				<Row size={12} style={styles.row}>
					<Container style={[styles.formContainer,{paddingTop: 6}]} theme={theme}>
						<Content>
							<View style={{marginBottom: 10}}>
								<Text style={{textAlign: 'center', color: 'rgba(255,255,255,.9)', fontSize: 18}}>Crear Cuenta</Text>
							</View>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Nombre Completo" />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="D.N.I." />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Email" />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Teléfono" />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'} secureTextEntry >
								<Input style={styles.textInput} placeholder="Contraseña" />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Repetir Contraseña" />
							</InputGroup>
							<Grid>
								<Col>
									<Button onPress={(event) => {

											this.props.navigator.push({
												name: "Home",
												sceneConfig: Navigator.SceneConfigs.FloatFromBottom
											});

										}} textStyle={{fontSize: 12}} style={{marginTop: 28, backgroundColor: 'rgb(32,76,165)',borderRadius: 20,shadowColor: 'transparent'}} block>
										Registrar mi cuenta
									</Button>
								</Col>
							</Grid>
							<View style={{alignSelf: 'center', padding: 30, paddingTop: 32}}>
								<Text style={{color: 'rgba(255,255,255,.5)', fontSize: 9, textAlign: 'center', lineHeight: 12}}>{"Al presionar << Registrar mi cuenta >> acepta nuestros"}<Text style={{fontSize: 9,color:'#FFF', lineHeight: 12}}> Terminos y Servicios</Text></Text>
							</View>
				    	</Content>
				    </Container>
			    </Row>
			</Grid>

		);

	}
}

let styles = StyleSheet.create({
	formContainer: {
		// backgroundColor: 'green',
		marginTop: 0,
		marginRight: 40,
		marginBottom: 0,
		marginLeft: 40,
		paddingTop: 32,
		paddingRight: 18,
		paddingBottom: 32,
		paddingLeft: 18,
	},
	inputGroup: {
		borderColor: 'rgba(255,255,255,.15)',
		borderRadius: 6,
		marginBottom: 8,
	},
	textInput: {
		fontSize: 11
	},
	logo: {
		resizeMode: 'contain',
		height: 58/1.7, // 58
		width: 300/1.7, // 300
		// alignSelf: 'center',
		top: 4
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		paddingLeft: 100,
		paddingRight: 100,
	},
	row: {

	},
});