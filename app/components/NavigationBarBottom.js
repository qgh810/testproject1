import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window')

export default class NavigationBarBottom extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navs: [
        {
          title: '微信',
          icon: 'comments', //comments
        },
        {
          title: '通讯录',
          icon: 'vcard-o',
        },
        {
          title: '发现',
          icon: 'eye',
        },
        {
          title: '我',
          icon: 'user-o',
        },
      ],
      selectedNav: {
        title: '微信',
        icon: 'comments', //comments
      },
    }
  }

  computedSelectedNav = (nav) => {
    return (this.state.selectedNav.title === nav.title)
  }

  computedIconStyle = (nav) => {
    return this.computedSelectedNav(nav) ? [styles.icon, styles.selectedColor] : styles.icon
  }

  computedTitleStyle = (nav) => {
    return this.computedSelectedNav(nav) ? [styles.title, styles.selectedColor] : styles.title
  }

  onNavSelected = (nav) => {
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

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 60,
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
    fontSize: 26,
    padding: 8,
    color: '#777',
  },
  title: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  selectedColor: {
    color: 'green'
  }
})
