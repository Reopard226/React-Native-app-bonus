'use strict'

import React from 'react';

import Swiper from 'react-native-swiper';

import BaseContainer from './Containers/BaseContainer'
import Login from './Session/Login';
import Register from './Session/Register';

export default class SessionContainer extends React.Component {

	constructor( props ){
		super( props );
	}

	render(){

		return <BaseContainer>
				<Swiper ref={ (swiper) => { this._swiper = swiper }} showsButtons={ false } showsPagination={ false }>
					{ this.props.show === 'login' ? ( <Login changeScreen={ ( index ) => this._changeScreen( index ) } navigator={ this.props.navigator } /> ) : (<Register changeScreen={ ( index ) => this._changeScreen( index ) } navigator={ this.props.navigator } />) }
					{ this.props.show === 'login' ? ( <Register changeScreen={ ( index ) => this._changeScreen( index ) } navigator={ this.props.navigator } /> ) : (<Login changeScreen={ ( index ) => this._changeScreen( index ) } navigator={ this.props.navigator } />) }
				</Swiper>
			</BaseContainer>;

	}

	_changeScreen( index ){

		this._swiper.scrollBy( index );

	}

}