'use strict'

import React from 'react';
import {
	Text
} from 'react-native';

import Drawer from 'react-native-drawer';

import BaseContainer from './BaseContainer';

export default ( props ) => (
	<Drawer
		open
		type="displace"
		content={ props.content }
		tapToClose={ true }
		openDrawerOffset={ 276 } // 20% gap on the right side of drawer
		panCloseMask={ 276 }
		styles={ drawerStyles }
		tweenHandler={ (ratio) => ({
			main: { opacity:(2-ratio)/2 }
		})}
	>
		<BaseContainer>
			{ props.children }
		</BaseContainer>
	</Drawer>
);

const drawerStyles = {
	drawer: {
		flex: 1,
		shadowColor: '#000000',
		shadowOpacity: 0.8,
		shadowRadius: 3
	},
	main: {
		// paddingLeft: 3,
	},
	drawerOverlay: {
		// backgroundColor: 'rgba(0,255,0,.3)', //green
	},
	mainOverlay: {
		// backgroundColor: 'rgba(0,0,0,.5)', //black
	},

}