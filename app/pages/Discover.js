import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import Header from '../components/Header'

export default class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
                <Text>朋友圈</Text>
            </View>
        );
    }
}
