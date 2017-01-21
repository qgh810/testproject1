import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import Header from '../components/Header'

export default class Wechat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
              <Header
                showBackBtn={false}
                title={'微信'}
                icon="plus"/>
                <Text>微信</Text>
                <Text>微信</Text>
                <Text>微信</Text>
                <Text>微信</Text>
                <Text>微信</Text>
            </View>
        );
    }
}
