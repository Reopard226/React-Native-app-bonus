'use strict'

import React from 'react';
import {
	Text
} from 'react-native';

import Drawer from 'react-native-drawer';

import BaseContainer from './BaseContainer';

export default ( props ) => <Drawer
	content=			{ props.content }
	onClose=			{ () => props.closeDrawer() }
	open=				{ props.drawerOpened }
	openDrawerOffset=	{ 276 }
	panCloseMask=		{ 276 }
	styles={{
		drawer: {
			flex: 1,
		},
		mainOverlay: {
			backgroundColor: props.drawerOpened ? 'rgba(0,0,0,.3)' : 'transparent',
		},
	}}
	tapToClose=			{ true }
	type=				"displace"
>
	<BaseContainer>
		{ props.children }
	</BaseContainer>
</Drawer>;