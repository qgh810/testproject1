import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Wechat from './pages/Wechat'
import Contacts from './pages/Contacts'
import Discover from './pages/Discover'
import Me from './pages/Me'

const routes = {
  Wechat: {
    title: '微信',
    component: Wechat,
  },
  Contacts: {
    title: '通讯录',
    component: Contacts,
  },
  Discover: {
    title: '发现',
    component: Discover,
  },
  Me: {
    title: '我',
    component: Me,
  },
}

// 定义初始页面
const defaultComponent = routes[Object.keys(routes)[0]]

const config = {
  routes,
  defaultComponent,
}

export default config
