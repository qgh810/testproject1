import React, { Component } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';

import routesConfig from './route-config';

import NavigationBarBottom from './components/NavigationBarBottom'
import FirstPageComponent from './pages/FirstPageComponent'

export default class app extends Component {
  render () {
    return (
      <View style={styles.page}>
        <NavigationBarBottom/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
})
