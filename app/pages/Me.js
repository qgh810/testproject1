import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import Header from '../components/Header'

export default class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onRightButton () {
      console.log('我')
    }
    render() {
        return (
            <View style={{backgroundColor: 'red'}}>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
                <Text>我</Text>
            </View>
        );
    }
}
