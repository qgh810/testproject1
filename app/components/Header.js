import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, View, Navigator, Text, Dimensions, TouchableOpacity } from 'react-native';

export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  onBackPress = () => {
    console.log('后退132')
  }
  render() {
    var {height, width} = Dimensions.get('window')
    return (
      <View style={[styles.headerBox, {width: width}]}>
        <TouchableOpacity style={styles.headerBack} onPress={this.onBackPress}>
          <Text style={styles.BackText}>&lt;返回</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle]}>标题标题标题标题标题标题标题标题标题标题标题标题</Text>
        <TouchableOpacity style={styles.headerMenu} onPress={this.onBackPress}>
          <Text style={styles.MenuText}>...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBox: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    height: 60,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  headerBack: {
    paddingLeft: 10,
    width: 80,
    height: 40,
    overflow: 'hidden',
  },
  headerMenu: {
    width: 80,
    height: 40,
    overflow: 'hidden',
  },
  BackText: {
    lineHeight: 45,
    textAlign: 'left',
    color: 'blue',
    fontSize: 15,
  },
  menuText: {
    lineHeight: 40,
    textAlign: 'right',
  },
  headerTitle: {
    maxWidth: 150,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 18,
    overflow: 'hidden',
  }
})
