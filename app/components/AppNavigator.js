'use strict'

import React from 'react'
import {
  Navigator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SessionContainer from './SessionContainer';
import HomeContainer from './HomeContainer';
import CatalogContainer from './CatalogContainer';

export default class AppNavigator extends React.Component
{

  _renderScene( route , navigator) {

    const globalNavigatorProps = {navigator}

    switch(route.name) {

      case "Productos":
        return(
          <CatalogContainer navigator={navigator}/>
        )

      case "LoggedIn":
        return(
          <HomeContainer navigator={navigator}/>
        )

      case "Login":
        return (
          <SessionContainer navigator={navigator}/>
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