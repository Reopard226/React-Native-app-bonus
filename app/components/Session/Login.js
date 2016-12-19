'use strict'

import React from 'react';
import {
	Image,
	StyleSheet,
	Navigator,
	View
} from 'react-native';

import { CheckBox, Container, Content, InputGroup, Input, Icon, Text, Button , Picker , Spinner } from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";

import LoginLogo from './Partials/LoginLogo'

import theme from '../../themes/bonus';

export default class Login extends React.Component {

	constructor( props ){

		super( props );

		this.state = {
			idType: '01',
			userId: '49999990', //80653260
			password: 'loyalty', //p3rs301!
		}

	}

	_renderSpinner = () => {

		if( this.props.session.loading )
			return <Spinner color="#FFF" />;

		return <Text></Text>;

	}

	render(){

		return (
			<Grid>
				<Row size={3}>
					<LoginLogo />
				</Row>
				{ this._renderSpinner() }
				<Row size={11}>
					<Container style={styles.formContainer} theme={theme}>
						<Content>
							<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' , alignSelf: 'stretch' ,borderWidth: 1 , borderColor: 'rgba(255,255,255,.15)', borderRadius: 6, marginBottom: 10, }}>
								<Image style={ styles.caret } source={ require( '../../img/arrow-select.png' ) }/>
								<Picker
									iosHeader="Tipo de Documento"
									prompt="Tipo de Documento"
									mode="dialog"
									selectedValue={ this.state.idType }
									onValueChange={ ( idType ) => this.setState({ idType }) }
									style={{ padding: 0 , margin: 0 , flex: 1 , alignSelf: 'stretch' , justifyContent: 'flex-start', alignItems: 'center', left: 0 }}
									textStyle={{ marginLeft: 20 , color: '#FFF' , fontSize: 11}}
									enabled={ !this.props.session.loading }
								>
										<Picker.Item key={0} label="D.N.I." value="01" />
										<Picker.Item key={1} label="C.I." value="02" />
										<Picker.Item key={2} label="C.E." value="03" />
										<Picker.Item key={3} label="PASAPORTE" value="04" />
								</Picker>
							</View>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input 
									onChangeText={( userId ) => this.setState({ userId })}
									style={styles.textInput} 
									placeholder="Núm. de Documento" 
									value={this.state.userId}
									disabled={ this.props.session.loading }
								/>
							</InputGroup>
							<InputGroup style={styles.inputGroup} borderType={'regular'}>
								<Input 
									onChangeText={( password ) => this.setState({ password })}
									style={styles.textInput} 
									placeholder="Clave" 
									secureTextEntry
									value={this.state.password}
									disabled={ this.props.session.loading }
								/>
							</InputGroup>
							<Grid style={{ marginTop: 12 }}>
								<Col style={{flexDirection: 'row'}}>
									<CheckBox style={styles.checkBox} checked={{ true }}/>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF', fontSize: 11}} small transparent>
										Recordar usuario
									</Button>
								</Col>
								<Col>
									<Button style={{alignSelf: 'center'}} textStyle={{color: '#FFF', fontSize: 11}} small transparent>
										¿Olvidó su clave?
									</Button>
								</Col>
							</Grid>
							<Grid>
								<Col>
									<Button onPress={() => {
											this.props.dispatch( this.props.sessionActions.requestLogin({
												userId:  this.state.userId,
												password:  this.state.password,
												idType:  '01'
											}));
										}}
										textStyle={styles.loginButtonText}
										style={styles.loginButton} 
										block
										disabled={ this.props.session.loading }
									>
										Ingresar
									</Button>
									<Button disabled={ this.props.session.loading } onPress={ () => this.props.changeScreen( 1 ) } textStyle={{color:'rgba(255,255,255,.7)',fontSize: 11}} style={{marginTop: 20,borderRadius: 20,shadowColor: 'transparent',borderColor: 'rgba(255,255,255,.2)'}} block bordered transparent>
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
	caret:{
		position: 'absolute',
		right: 14,
		top: 14,
		width:10,
		height:10,
		resizeMode: 'contain'
	},
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
		marginTop: 0 ,
		marginRight: 40,
		marginBottom: 0,
		marginLeft: 40,
		paddingTop: 28,
		paddingRight: 18,
		paddingBottom: 32,
		paddingLeft: 18,
	},
	inputGroup: {
		borderColor: 'rgba(255,255,255,.15)',
		borderRadius: 6,
		marginBottom: 14,
	},
	loginButton: {
		marginTop: 22,
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent'
	},
	loginButtonText: {
		fontSize: 11,
		fontFamily: 'Varela Round'
	},
	textInput: {
		fontSize: 11,
		fontFamily: 'Varela Round'
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