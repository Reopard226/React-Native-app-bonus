'use strict'

import React from 'react'
import {
	Dimensions,
	Navigator,
	Text,
} from 'react-native';

import CatalogContainer from './CatalogContainer';
import HomeContainer from './HomeContainer';
import SessionContainer from './SessionContainer';
import WalletContainer from './WalletContainer';

export default class AppNavigator extends React.Component
{

	_renderScene( route , navigator ) {

		route.name = this.props.session.loggedIn ? route.name : this.props.session.redirectTo

		switch ( route.name ) {

			case 'Catalog':
				return <CatalogContainer  	{ ...this.props } navigator={ navigator }/>;

			case 'Home':
				return <HomeContainer 		{ ...this.props } navigator={ navigator }/>;

			case 'Login':
				return <SessionContainer 	{ ...this.props } navigator={ navigator } show="login"/>;

			case 'Register':
				return <SessionContainer 	{ ...this.props } navigator={ navigator } show="register"/>;

			case 'Wallet':
				return <WalletContainer 	{ ...this.props } navigator={ navigator }/>;

			default:
				return <Text style={ { marginTop: 25 , texAlign: 'center' } }>
					{`Navigator went to undefiend route ${route.name}`}
				</Text>

		}

	}

	render() {

		return(
			<Navigator
				configureScene={ (route) => ({ ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight }) }
				initialRoute={ { name: this.props.session.loggedIn ? 'Home' : 'Login' } }
				renderScene={ (route , navigator ) => this._renderScene( route , navigator )}
		        style={ { width: Dimensions.get('window').width } }
			/>
		);

	}

}