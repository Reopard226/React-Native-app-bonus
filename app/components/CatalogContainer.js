'use strict'

import React from 'react';

import Catalog from './Catalog/Catalog';
import BaseContainer from './Containers/BaseContainer'

export default ( props ) => (
	<BaseContainer>
		<Catalog navigator={ props.navigator }/>
	</BaseContainer>
);