'use strict'

import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'native-base';

import Style from '../../styles/Style';

export default ( props ) => <Button
	block
	disabled=	{ props.disabled ? props.disabled : false }
	onPress=	{ props.onPress }
	textStyle=	{ styles.text }
	style=		{ styles.button }>
	{ props.text }
</Button>;

const styles = StyleSheet.create({
	button: {
		backgroundColor: Style.MAIN_COLOR,
		borderRadius: ( 10 * Style.UNIT),
		shadowColor: 'transparent'
	},
	text: {
		fontSize: Style.FONT_SIZE_SMALLER,
		fontFamily: Style.MAIN_FONT
	},
});