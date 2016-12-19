'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Cart from './Cart/Cart';

export default ( props ) => (
	<BaseContainer>
		<Cart { ...props } navigator={ props.navigator }/>
	</BaseContainer>
);