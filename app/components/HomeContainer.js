'use strict'

import React from 'react';

import Home from './Home/Home';
import BaseContainer from './Containers/BaseContainer'

export default ( props ) => (
	<BaseContainer>
		<Home navigator={ props.navigator }/>
	</BaseContainer>
);