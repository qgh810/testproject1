import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import Header from '../components/Header'

export default class Constacts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
      return (
        <View style={{backgroundColor: 'yellow'}}>
            <Text>联系人</Text>
            <Text>联系人</Text>
            <Text>联系人</Text>
            <Text>联系人</Text>
            <Text>联系人</Text>
        </View>
      )
    }
}
