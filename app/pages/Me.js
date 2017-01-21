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
    render() {
        return (
            <View style={{backgroundColor: 'red'}}>
              <Header
                showBackBtn={false}
                title={'我'}
                showRightBtn={false} />
              <Text>我</Text>
            </View>
        );
    }
}
