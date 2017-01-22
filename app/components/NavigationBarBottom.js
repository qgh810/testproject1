import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window')

export default class NavigationBarBottom extends Component {
  // 定义默认的props
  static defaultProps = {
    navs: [
      {
        title: '微信',
        icon: 'comments',
        name: 'Wechat',
      },
      {
        title: '通讯录',
        icon: 'vcard-o',
        name: 'Contacts',
      },
      {
        title: '发现',
        icon: 'eye',
        name: 'Discover',
      },
      {
        title: '我',
        icon: 'user-o',
        name: 'Me',
      },
    ],
    selectedNav: {
      title: '微信',
      icon: 'comments',
      name: 'wechat',
    },
  }

  constructor (props) {
    super(props)
    this.state = {
      navs: this.props.navs,
      selectedNav: this.props.selectedNav,
    }
  }

  // 计算当前nav是否被选中
  computedSelectedNav = (nav) => {
    return (this.state.selectedNav.title === nav.title)
  }

  // 计算当前nav图标样式
  computedIconStyle = (nav) => {
    return this.computedSelectedNav(nav) ? [styles.icon, styles.selectedColor] : styles.icon
  }

  // 计算当前nav文案样式
  computedTitleStyle = (nav) => {
    return this.computedSelectedNav(nav) ? [styles.title, styles.selectedColor] : styles.title
  }

  // 监听当前nav点击事件
  onNavSelected = (nav) => {
    this.props.onNavSelected && this.props.onNavSelected(nav)
    this.setState({selectedNav: nav})
  }

  render () {
    return (
      <View style={styles.container}>
        {
          this.state.navs && this.state.navs.map((nav) => {
            return (
              <TouchableOpacity style={styles.navigator} key={nav.title} onPress={() => { this.onNavSelected(nav) }}>
                <Icon name={nav.icon} style={this.computedIconStyle(nav)}/>
                <Text style={this.computedTitleStyle(nav)}>{nav.title}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    );
  }
}
//
// <Navigator
//   initialRoute={routesConfig.defaultComponent}
//   configureScene={routesConfig.configureScene}
//   renderScene={(route,navigator) => <route.component {...route} navigator={navigator} />}
// />

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: width,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    textAlign: 'center',
    fontSize: 24,
    padding: 6,
    paddingBottom: 4,
    color: '#777',
  },
  title: {
    fontSize: 10,
    color: '#777',
    textAlign: 'center',
  },
  selectedColor: {
    color: 'green'
  }
})
