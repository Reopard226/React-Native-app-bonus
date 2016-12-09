'use strict'

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

export default React.createClass({

	tabIcons: [],

	propTypes: {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	},

	componentDidMount() {
		this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
	},

	setAnimationValue( { value, } ) {
		this.tabIcons.forEach((icon, i) => {

			const progress = Math.min(1, Math.abs(value - i))

			icon.setNativeProps({
				style: {
					color: this.iconColor(progress),
				},
			});

		});
	},

	//color between rgb(59,89,152) and rgb(204,204,204)
	iconColor(progress) {
		const red = 59 + (204 - 59) * progress;
		const green = 89 + (204 - 89) * progress;
		const blue = 152 + (204 - 152) * progress;
		return `rgb(${red}, ${green}, ${blue})`;
	},

	render() {
		return <View style={[styles.tabs, this.props.style, ]}>
			{ this.props.tabs.map( ( tab , i ) => {
				return <View key={tab} style={{marginBottom: 3,borderBottomWidth: 3, borderBottomColor: (this.props.activeTab === i ? 'rgb(31,75,164)' : 'transparent') }}><TouchableOpacity onPress={() => this.props.goToPage(i)} style={ styles.tab }>
					<Text style={{fontSize: 12, fontFamily:'Oswald',color: (this.props.activeTab === i ? '#000' : 'rgba(0,0,0,.3)' ) }}>{tab}</Text>
				</TouchableOpacity></View>;
			}) }
		</View>;
	},
});

const styles = StyleSheet.create({
	tab: {
		paddingTop: 0,
		paddingBottom: 10,
		paddingLeft: 34,
		paddingRight: 34,
	},
	tabs: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingLeft: 4,
		borderWidth: 0,
		borderTopWidth: 2,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopColor: 'rgba(255,255,255,0.2)',
	},
});