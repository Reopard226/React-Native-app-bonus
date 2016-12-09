/**
 * Bonus Android
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/App'

export default class Bonus extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('bonus', () => Bonus);
