import React, { Component } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';

import routesConfig from './route-config';

import NavigationBarBottom from './components/NavigationBarBottom'
import Page from './pages/Page'

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
  // 监听底部导航切换
  onNavSelected = (nav) => {
    this.setState({component: routesConfig.routes[nav.name].component})
    this.setState({selectedNav: nav})
  }
  render () {
    return (
      <View style={styles.page}>
        <Page
          initComponent={this.state.component}
          initTitle={this.state.selectedNav.title}
        />
        {/* 页面容器 */}
        {/* <View style={styles.content}>
          <this.state.component />
        </View> */}
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
