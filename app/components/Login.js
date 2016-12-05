import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Navigator,
	// Text,
	View
} from 'react-native';

import { CheckBox , Container, Content, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import StatusBarBackground from './StatusBarBackground';

import theme from '../themes/bonus';

export default class Login extends Component
{

	constructor( props ){
		super( props );
		this.state = {
			loggedIn: false,
		};
	}

	render(){

		return (

			<Grid>
				<StatusBarBackground />
				<Row size={4} style={styles.row}>
					<View style={styles.logoContainer} >
						<Image style={styles.logo} source={require('../img/bonus-logoBlanco300.png')} />
					</View>
				</Row>
				<Row size={11} style={styles.row}>
					<Container style={styles.formContainer} theme={theme}>
						<Content>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Usuario" />
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input style={styles.textInput} placeholder="Clave" secureTextEntry/>
							</InputGroup>
							<Grid>
								<Col>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF'}} small transparent>Recordar usuario</Button>
								</Col>
								<Col>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF'}} small transparent>¿Olvidó su clave?</Button>
								</Col>
							</Grid>
							<Grid>
								<Col>
									<Button onPress={(event) => {

											this.props.navigator.push({
												name: "LoggedIn",
												sceneConfig: Navigator.SceneConfigs.FloatFromBottom
											});

										}} textStyle={{fontSize: 12}} style={{marginTop: 10, backgroundColor: 'rgb(32,76,165)',borderRadius: 20,shadowColor: 'transparent'}} block>Ingresar</Button>
								</Col>
							</Grid>
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
				    	</Content>
				    </Container>
			    </Row>
			    <Row size={3} style={styles.row}>
					<Container style={styles.formContainer} theme={theme}>
						<Content style={{top:-10}}>
							<Grid>
								<Col>
									<Button textStyle={{color:'rgba(255,255,255,.7)',fontSize: 12}} style={{borderRadius: 20,shadowColor: 'transparent',borderColor: 'rgba(255,255,255,.2)'}} block bordered transparent>
										Crear tu cuenta
									</Button>
								</Col>
							</Grid>
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
		marginTop: 0 ,
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
	textInput: {

	},
	logo: {
		resizeMode: 'contain',
		height: 58/1.8, // 58
		width: 300/1.8, // 300
		// alignSelf: 'center',
		marginTop: 26,
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