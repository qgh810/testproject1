import React, { Component } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';

import routesConfig from './route-config';

import NavigationBar from './components/NavigationBar'
import FirstPageComponent from './pages/FirstPageComponent'

export default class app extends Component {
  render () {
    return (
      <View style={styles.page}>
        <NavigationBar/>
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
