'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	Navigator,
	View
} from 'react-native';

import { CheckBox, Container, Content, InputGroup, Input, Icon, Text, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import LoginLogo from './Partials/LoginLogo'

import theme from '../../themes/bonus';

export default class Login extends React.Component {

	constructor( props ){

		super( props );

		this.state = {
			idType: null,
			userid: null,
			password: null,
		}

	}

	componentWillReceiveProps( nextProps ){

		if( nextProps.session.loggedIn ) {

			this.props.navigator.push({
				name: "Home",
				sceneConfig: Navigator.SceneConfigs.FloatFromRight
			});

		}

	}

	render(){

		return (
			<Grid>
				<Row size={4}>
					<LoginLogo />
				</Row>
				<Row size={11}>
					<Container style={styles.formContainer} theme={theme}>
						<Content>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input 
									onChangeText={( userid ) => this.setState({ userid })}
									style={styles.textInput} 
									placeholder="Usuario" 
									value={this.state.userid}
								/>
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input 
									onChangeText={( password ) => this.setState({ password })}
									style={styles.textInput} 
									placeholder="Clave" 
									secureTextEntry
									value={this.state.password}
								/>
							</InputGroup>
							<Grid>
								<Col style={{flexDirection: 'row'}}>
									<CheckBox style={styles.checkBox} checked={{ true }}/>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF'}} small transparent>
										Recordar usuario
									</Button>
								</Col>
								<Col>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF'}} small transparent>
										¿Olvidó su clave?
									</Button>
								</Col>
							</Grid>
							<Grid>
								<Col>
									<Button onPress={() => {

											this.props.dispatch( this.props.sessionActions.requestLogin({

												userId: 80653260,
												password: 'p3rs301!',
												idType: '01'

											}));

										}}
									textStyle={styles.loginButtonText}
									style={styles.loginButton} 
									block>
										Ingresar
									</Button>
									<Button onPress={ () => this.props.changeScreen( 1 ) } textStyle={{color:'rgba(255,255,255,.7)',fontSize: 12}} style={{marginTop: 28,borderRadius: 20,shadowColor: 'transparent',borderColor: 'rgba(255,255,255,.2)'}} block bordered transparent>
										Crear tu cuenta
									</Button>
								</Col>
							</Grid>
						</Content>
					</Container>
				</Row>
			    <Row size={3}></Row>
			</Grid>
		);
	}
}

let styles = StyleSheet.create({
	checkBox: {
		marginTop:10,
		paddingLeft:2,
		paddingRight:2,
		paddingTop:1,
		paddingBottom:1,
		height: 15,
		borderColor: 'rgba(255,255,255,.3)',
		borderWidth: 1,
		backgroundColor: 'transparent',borderRadius: 3
	},
	formContainer: {
		marginTop: 24 ,
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
		marginBottom: 10,
	},
	loginButton: {
		marginTop: 32,
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent'
	},
	loginButtonText: {
		fontSize: 11,
	},
	textInput: {
		fontSize: 11
	},
});
/*
	
	<View style={{alignSelf: 'center', padding: 30}}>
		<Text style={{color: '#FFF', fontSize: 12}}>o contectar con</Text>
	</View>
	<Grid>
		<Col style={{paddingRight: 8}}>
			<Button style={{backgroundColor: '#3B5998',shadowColor: 'transparent'}} rounded block>
				<Icon name='logo-facebook' />
			</Button>
		</Col>
		<Col style={{paddingLeft: 8}}>
			<Button style={{backgroundColor: 'rgb(86,172,239)',shadowColor: 'transparent'}} rounded block>
				<Icon name='logo-twitter' />
			</Button>
		</Col>
	</Grid>

 */