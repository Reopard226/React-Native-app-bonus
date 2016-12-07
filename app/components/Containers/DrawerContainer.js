'use strict'

import React from 'react';
import {
	Text
} from 'react-native';

import Drawer from 'react-native-drawer';

import BaseContainer from './BaseContainer';

export default ( props ) => (
	<Drawer
		open={ props.drawerOpened }
		type="displace"
		content={ props.content }
		tapToClose={ true }
		openDrawerOffset={ 276 }
		panCloseMask={ 276 }
		onClose={() => props.closeDrawer()}
		styles={{
			drawer: {
				flex: 1,
			},
			mainOverlay: {
				backgroundColor: props.drawerOpened ? 'rgba(0,0,0,.3)' : 'transparent',
			},
		}}
	>
		<BaseContainer>
			{ props.children }
		</BaseContainer>
	</Drawer>
);