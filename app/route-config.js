import React, { Component } from 'react';
import { Navigator } from 'react-native';

import FirstPageComponent from './pages/FirstPageComponent'
import SecondPageComponent from './pages/SecondPageComponent'


const routes = {
  FirstPageComponent: {
    title: 'FirstPageComponent',
    component: FirstPageComponent,
    configureScene: null,
  },
  SecondPageComponent: {
    title: 'SecondPageComponent',
    component: SecondPageComponent,
  },
}

// 定义初始页面
const defaultComponent = routes[Object.keys(routes)[0]]

const config = {
  routes,
  defaultComponent,
  configureScene (route) {
    // 更多动画可参考 node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
    return route.configureScene || Navigator.SceneConfigs.FloatFromRight
  }
}

export default config
