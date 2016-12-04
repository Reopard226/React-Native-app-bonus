'use strict'
import React, { Component } 		from 'react'
import { Platform,StyleSheet,View } from 'react-native'

class StatusBarBackground extends Component {
	render(){
		if (Platform.OS === 'ios') {
		  return(
		  	<View style={[styles.statusBarBackground, this.props.style || {}]}></View>
		  )
		}else{
		  return null
		}
	}
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: 20,
		backgroundColor: "transparent"
	}
})

module.exports = StatusBarBackground