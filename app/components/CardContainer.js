'use strict'

import React from 'react';

import BaseContainer from './Containers/BaseContainer';
import Card from './Cards/Partials/Card';

export default ( props ) => (
	<BaseContainer>
		<Card { ...props } />
	</BaseContainer>
);