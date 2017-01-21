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
  constructor(props) {
    super(props)
    // 初始化默认状态
    this.state = {
      showBackBtn: true,
      showMenuBtn: true,
      backgroundColor: 'rgba(255,255,255,0.9)',
      title: '标题',
      backText: '返回',
      titleColor: '#000',
      backTextColor: 'blue'
    }

    // 读取props的属性
    for (let attr in props) {
      this.state[attr] = props[attr]
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={routesConfig.defaultComponent}
        configureScene={routesConfig.configureScene}
        renderScene={(route,navigator) => <route.component {...route} navigator={navigator} />}
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

var NavigationBarRouteMapper = {
   LeftButton: function(route, navigator, index, navState) {
     console.log(navState)
    //  var previousRoute = navState.routeStack[index - 1];
     return (
       <TouchableOpacity
         style={styles.navBarBack}
         onPress={() => navigator.pop()}>
         <Text style={[styles.BackText]}>
           <Icon name="angle-left" style={[styles.BackText, {fontSize: 19}]} />返回</Text>
         </TouchableOpacity>
     );
   },
   RightButton: function(route, navigator, index, navState) {
     return (
       <TouchableOpacity style={styles.navBarMenu} onPress={() => {
         console.log(231)
         route.onRightButton && route.onRightButton()}
       }>
         <Text style={styles.menuText}>
           <Icon name="navicon" style={styles.menuText}/>
         </Text>
       </TouchableOpacity>
     );
   },

   Title: function(route, navigator, index, navState) {
     return (
       <Text style={[styles.navBarTitle]}>{route.title}</Text>
     );
   },
 };

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
