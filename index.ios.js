import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app'

class app extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('testproject1', () => app);
