'use strict'

import React from 'react';

import Swiper from 'react-native-swiper';

import BaseContainer from './Containers/BaseContainer'
import Login from './Session/Login';
import Register from './Session/Register';

export default ( props ) => (
	<BaseContainer>
		<Swiper showsButtons={ false } showsPagination={ false }>
			{ props.show === 'login' ? ( <Login navigator={ props.navigator } /> ) : (<Register navigator={ props.navigator } />) }
			{ props.show === 'login' ? ( <Register navigator={ props.navigator } /> ) : (<Login navigator={ props.navigator } />) }
		</Swiper>
	</BaseContainer>
);