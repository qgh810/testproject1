import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';

import Header from '../components/Header'

export default class Wechat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '微信',
        rightBtnName: 'plus',
        messages: [
          {
            image: 'https://user-gold-cdn.xitu.io/2016/11/29/ebfdcade79bfb709f9a295fc70a39e42',
            name: '名字',
            content: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字2',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15'
          },
        ]
      };
    }
    onRightButton = () => {
      console.log('里面')
    }
    render() {
        return (
          <View style={styles.container}>
            <ScrollView
              keyboardDismissMode="on-drag"
              >
              {
                (() => {
                  return this.state.messages.map((message, index) => {
                    return <List {...message} key={index}></List>
                  })
                })()
              }
            </ScrollView>
          </View>
        );
    }
}
class List extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <TouchableOpacity style={styles.list}>
        <View style={styles.listContainer}>
          <Image style={styles.listImage} source={{uri: this.props.image}} />
          <View style={styles.listContent}>
            <Text style={styles.listContentTitle}>{this.props.name}</Text>
            <Text
              numberOfLines={1}
              style={styles.listContentText}>
              {this.props.content}
            </Text>
            <Text style={styles.listContentTime}>{this.props.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  list: {
    height: 60,
    paddingLeft: 10
  },
  listContainer: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listImage: {
    width: 45,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  listContent: {
    flex: 1,
    height: 45,
    paddingLeft: 10,
  },
  listContentTitle: {
    fontSize: 16,
    height: 25,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  listContentText: {
    height: 20,
    lineHeight: 20,
    color: '#aaa',
  },
  listContentTime: {
    position: 'absolute',
    right: 10,
    top: 5,
    fontSize: 12,
    color: '#bbb'
  }
})
