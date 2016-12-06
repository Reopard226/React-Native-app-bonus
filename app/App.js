import React, { Component } from 'react';

import AppNavigator from './components/AppNavigator';

export default class App extends Component
{

	constructor( props )
	{
		super( props );
		this.state = {
			loggedIn: false,
		};
	}

	render()
	{

		return (
			<AppNavigator
				initialRoute={{name: "Login"}}
			/>
		);

	}
}