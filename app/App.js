import React, { Component } from 'react';

import AppNavigator from './components/AppNavigator';

export default class App extends Component
{

	constructor( props )
	{
		super( props );
		this.state = {
			loggedIn: false,
			drawerOpened: false,
		};
	}

	render()
	{

		return (
			<AppNavigator
				initialRoute={ {name: "Login"} }
				openDrawer={ () => this._openDrawer() }
				closeDrawer={ () => this._closeDrawer() }
				drawerOpened={ this.state.drawerOpened }
			/>
		);

	}

	_openDrawer(){

		if( !this.state.drawerOpened )
			this.setState({ drawerOpened: true });

	}

	_closeDrawer(){

		if( this.state.drawerOpened )
			this.setState({ drawerOpened: false });

	}
	
}