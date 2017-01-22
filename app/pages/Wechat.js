import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';

import Header from '../components/Header'

export default class Wechat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onRightButton = () => {
      console.log('里面')
    }
    render() {
        return (
          <View>
            <Text>微信</Text>
            <Text>微信</Text>
            <Text>微信</Text>
            <Text>微信</Text>
            <Text>微信</Text>
          </View>
        );
    }
}
