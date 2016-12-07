'use strict'

import React from 'react';

import DrawerContainer from './Containers/DrawerContainer'
import Home from './Home/Home';
import DrawerContent from './Home/Partials/DrawerContent';

export default ( props ) => (
	<DrawerContainer { ...props } content={ <DrawerContent /> }>
		<Home { ...props } navigator={ props.navigator }/>
	</DrawerContainer>
);