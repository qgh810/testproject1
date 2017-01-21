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
            <View style={{backgroundColor: 'blue'}}>
              <Header
                showBackBtn={false}
                title={'发现'}
                showRightBtn={false} />
                <Text>Discover</Text>
            </View>
        );
    }
}
