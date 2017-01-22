/**
 * NavigationBar (导航栏模块)
 * 作者 邱国辉
 */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import routesConfig from '../route-config';


export default class NavigationBar extends Component {
  constructor(props) {
    super(props)
    // 初始化默认状态
    this.state = {
      showBackBtn: false,
      showRightBtn: false,
      rightBtnName: '',
      title: '',
    }

    // 读取props的属性
    for (let attr in props) {
      this.state[attr] = props[attr]
    }
  }

  // 监听右侧按钮
  onRightButton = () => {
    this.refOnRightButton && this.refOnRightButton()
  }

  // 组件内部定义的事件
  onRightButtonCallBack () {}

  refCallBack = (ref) => {
    this.state.title = ref.state.title || this.props.initTitle
    this.state.showBackBtn = ref.state.showBackBtn || false
    this.showRightBtn = Boolean(ref.state.rightBtnName)
    this.state.rightBtnName = ref.state.rightBtnName
    this.onRightButtonCallBack = ref.onRightButton
  }

  // 渲染页面
  renderScene = (route,navigator) => {
    var Component = this.props.initComponent || route.component
    return <Component
      ref={(ref) => {this.onRightButtonCallBack = ref && ref.onRightButton}}
      {...route}
      navigator={navigator} />
  }

  // 头部导航栏
  NavigationBarRouteMapper = () => {
    return {
      LeftButton: (route, navigator, index, navState) => {
        return (
          this.state.showBackBtn ?
          <TouchableOpacity
            style={styles.navBarBack}
            onPress={() => navigator.pop()}>
            <Text style={[styles.BackText]}>
              <Icon name="angle-left" style={[styles.BackText, {fontSize: 19}]} />
              返回
            </Text>
          </TouchableOpacity>
          : null
        );
      },
      RightButton: (route, navigator, index, navState) => {
        return (
          this.state.showRightBtn ?
          <TouchableOpacity style={styles.navBarMenu} onPress={this.onRightButton}>
            <Text style={styles.menuText}>
              <Icon name="navicon" style={styles.menuText}/>
            </Text>
          </TouchableOpacity>
          : null
        );
      },

      Title: (route, navigator, index, navState) => {
        return (
          <View>
            <Text style={[styles.navBarTitle]}>{this.state.title || this.props.initTitle}</Text>
            <StatusBar barStyle="light-content" />
          </View>
        );
      },
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: this.props.initComponent}}
        configureScene={routesConfig.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={this.NavigationBarRouteMapper()}
            style={styles.navBarBox}
          />
        }
      />
    )
  }
}

var NavigationBarRouteMapper = function () {
  return {
    LeftButton: function(route, navigator, index, navState) {
      return (
        <TouchableOpacity
          style={styles.navBarBack}
          onPress={() => navigator.pop()}>
          <Text style={[styles.BackText]}>
            <Icon name="angle-left" style={[styles.BackText, {fontSize: 19}]} />
            返回
          </Text>
        </TouchableOpacity>
      );
    },
    RightButton: function(route, navigator, index, navState) {
      return (
        <TouchableOpacity style={styles.navBarMenu} onPress={() => {
          this.onRightButton()
        }}>
          <Text style={styles.menuText}>
            <Icon name="navicon" style={styles.menuText}/>
          </Text>
        </TouchableOpacity>
      );
    },

    Title: function(route, navigator, index, navState) {
      return (
        <View>
          <Text style={[styles.navBarTitle]}>{route.title}</Text>
          <StatusBar barStyle="light-content" />
        </View>
      );
    },
  };
};

const styles = StyleSheet.create({
  navBarBox: {
    height: 60,
    paddingTop: 20,
    backgroundColor: '#333238',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  navBarTitle: {
    height: 40,
    lineHeight: 40,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBarMenu: {
    paddingRight: 10,
    height: 40,
    overflow: 'hidden',
  },
  BackText: {
    lineHeight: 45,
    textAlign: 'left',
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10,
  },
  menuText: {
    fontSize: 20,
    lineHeight: 40,
    textAlign: 'right',
    color: '#fff',
  },
})
