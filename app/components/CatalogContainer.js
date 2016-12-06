'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer'
import Catalog from './Catalog/Catalog';

export default ( props ) => (
	<BaseContainer>
		<Catalog navigator={ props.navigator }/>
	</BaseContainer>
);