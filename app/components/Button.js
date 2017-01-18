/**
 * 按钮组建
 */
'use strict';
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  onBtnClick = () => {
    console.log(this.props)
    this.props.onBtnClick()
  }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.onBtnClick}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    width: 100,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
})
