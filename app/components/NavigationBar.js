/**
 * NavigationBar (导航栏模块)
 * 作者 邱国辉
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  Navigator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import routesConfig from '../route-config';


export default class NavigationBar extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routesConfig.defaultComponent}
        configureScene={routesConfig.configureScene}
        renderScene={routesConfig.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBarBox}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  navBarBox: {
    height: 60,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  navBarTitle: {
    height: 40,
    lineHeight: 40,
  },
  navBarMenu: {
    paddingRight: 10,
    height: 40,
    overflow: 'hidden',
  },
  BackText: {
    lineHeight: 45,
    textAlign: 'left',
    color: 'rgba(0,0,255,0.9)',
    fontSize: 15,
    paddingLeft: 10,
  },
  menuText: {
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'right',
  },
})
