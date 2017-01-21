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
          <Header
            showBackBtn={false}
            title={'联系人'}
            showRightBtn={false} />
          <Text>微信</Text>
        </View>
      )
    }
}
