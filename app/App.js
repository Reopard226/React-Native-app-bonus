'use strict'

import React , { Component } from 'react';
import { connect } from 'react-redux';

import AppNavigator from './components/AppNavigator';

// Actions
import * as sessionActions from './actions/sessionActions';

class App extends Component
{

	constructor( props )
	{
		super( props );
		this.state = {
			drawerOpened: false,
		};
	}

	componentWillReceiveProps( nextProps ) {

		if( nextProps.session.user.id !== undefined && nextProps.session.user.id !== null && nextProps.session.user.id != '' )
			nextProps.session.loggedIn ? null : nextProps.dispatch( sessionActions.updateLoggedInState( 'loggedIn' ) );
		else
			nextProps.session.loggedIn ? nextProps.dispatch( sessionActions.updateLoggedInState( 'loggedOut' ) ) : null;

	}

	render()
	{

		return <AppNavigator { ...this.props }

			closeDrawer 	= { () => this._closeDrawer() }
			drawerOpened	= { this.state.drawerOpened }
			openDrawer 		= { () => this._openDrawer() }

			sessionActions	= { sessionActions }
		/>

	}

	_closeDrawer() {

		if( this.state.drawerOpened )
			this.setState({ drawerOpened: false });

	}

	_openDrawer() {

		if( !this.state.drawerOpened )
			this.setState({ drawerOpened: true });

	}
	
}

export default connect(( state ) => {

	return {
		session: state.session,
	}

})(App);