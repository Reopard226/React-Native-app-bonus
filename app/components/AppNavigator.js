'use strict'

import React, { Component }             from 'react'

import {
  Navigator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import First from './First';
import LoggedIn from './LoggedIn';
import ProductosWrapper from './ProductosWrapper';

export default class AppNavigator extends Component {

  _renderScene(route, navigator) {

    const globalNavigatorProps = {navigator}

    switch(route.name) {

      case "Productos":
        return(
          <ProductosWrapper navigator={navigator}/>
        )

      case "LoggedIn":
        return(
          <LoggedIn navigator={navigator}/>
        )

      case "Login":
        return (
          <First navigator={navigator}/>
        )

      default:
        return (
          <Text style={{marginTop:25}}>
            {`Navigator went to undefiend route ${route.name}`}
          </Text>
        )

    }

  }

  render() {

    console.log("Rendering Component::Navigator");

    return(
      <Navigator
        configureScene={(route) => ({...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight})}
        initialRoute={this.props.initialRoute}
        renderScene={(route,navigator) => this._renderScene(route,navigator)}
      />
    )

  }

}