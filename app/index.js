import React, { Component } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';

import routesConfig from './route-config';

import NavigationBarBottom from './components/NavigationBarBottom'

export default class app extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedNav: {
        title: '微信',
        icon: 'comments',
      },
      component: routesConfig.defaultComponent.component
    }
  }
  onNavSelected = (nav) => {
    this.setState({component: routesConfig.routes[nav.name].component})
    this.setState({selectedNav: nav})
  }
  render () {
    return (
      <View style={styles.page}>
        {/* 页面容器 */}
        <View style={styles.content}>
          <this.state.component />
        </View>
        {/* 底部导航 */}
        <NavigationBarBottom
          selectedNav={this.selectedNav}
          onNavSelected={this.onNavSelected}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  content: {
    flex: 1,
    // paddingTop: 20,
    paddingBottom: 60,
  }
})
