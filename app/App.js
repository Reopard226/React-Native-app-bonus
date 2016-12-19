'use strict'

import React , { Component } from 'react';
import { connect } from 'react-redux';

import AppNavigator from './components/AppNavigator';
import SessionContainer from './components/SessionContainer';

// Actions
import couponsActions from './actions/couponsActions';
import productsActions from './actions/productsActions';
import sessionActions from './actions/sessionActions';

console.log( sessionActions );

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

		if( this.props.session.loggedIn ){

			return <AppNavigator { ...this.props }

				closeDrawer 	= { () => this._closeDrawer() }
				drawerOpened	= { this.state.drawerOpened }
				openDrawer 		= { () => this._openDrawer() }

				couponsActions	= { couponsActions }
				productsActions	= { productsActions }
				sessionActions	= { sessionActions }
				
			/>

		}

		return <SessionContainer { ...this.props } 

			closeDrawer 	= { () => this._closeDrawer() }
			drawerOpened	= { this.state.drawerOpened }
			openDrawer 		= { () => this._openDrawer() }

			sessionActions	= { sessionActions }

			show="login"
			
		/>;

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
		coupons: state.coupons,
		products: state.products,
		session: state.session,
	}

})(App);