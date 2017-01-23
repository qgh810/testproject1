import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Animated,
    Easing,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import Header from '../components/Header'
import Triangle from '../components/Triangle'
var {height, width} = Dimensions.get('window')

export default class Wechat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '微信',
        rightBtnName: 'plus',
        showFloatNav: false,
        messages: [
          {
            image: 'https://user-gold-cdn.xitu.io/2016/11/29/ebfdcade79bfb709f9a295fc70a39e42',
            name: '名字',
            content: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 4
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字2',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 1
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
          {
            image: 'https://dn-mhke0kuv.qbox.me/6fe34414c019596859e1.jpg?imageView2/1/w/164/h/164/q/85/format/jpg/interlace/1',
            name: '名字3',
            content: '聊天内容聊天内容',
            time: '下午6:15',
            unreadCount: 0
          },
        ]
      };
    }
    onRightButton = () => {
      this.setState({
        showFloatNav: !this.state.showFloatNav
      })
    }
    render() {
        return (
          <View style={styles.container}>
            {
              this.state.showFloatNav ? <FloatNavBar
                onClose={this.onRightButton}
               /> : null
            }
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
  onPress = () => {
    console.log('此时应该跳转页面进入聊天详情页面')
  }
  render () {
    return (
      <TouchableHighlight
        underlayColor="#f2f2f2"
        style={styles.list}
        onPress={this.onPress}>
        <View style={styles.listContainer}>
          <Image style={styles.listImage} source={{uri: this.props.image}} >
          </Image>
          {
            this.props.unreadCount ?
            <View style={styles.unreadCount}>
              <Text style={styles.unreadCountText}>{this.props.unreadCount}</Text>
            </View>
            : null
          }

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
      </TouchableHighlight>
    )
  }
}

class FloatNavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fadeInOpacity: new Animated.Value(0),
      navs: [
        {
          title: '发起群聊',
          icon: 'message',
        },
        {
          title: '添加朋友',
          icon: 'add-user',
        },
        {
          title: '扫一扫',
          icon: 'hair-cross',
        },
        {
          title: '收付款',
          icon: 'credit',
        },
      ]
    }
  }
  onOther = () => {
    this.props.onClose && this.props.onClose()
  }
  render () {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.floatNavBarLayer}
        onPress={this.onOther}>
        <Animated.View style={[styles.floatNavBarContainer, {
          opacity: this.state.fadeInOpacity
        }]}>
          <Triangle
            style={styles.floatNavBarTriangle}
            size={12}
            color="#333238"
            direction="top"/>
          <View style={styles.floatNavBarContent}>
            {
              (() => {
                return this.state.navs.map((nav, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={
                        index === this.state.navs.length - 1
                        ?
                        styles.floatNavBarTextBox
                        :
                        [styles.floatNavBarTextBox, commonStyles.bordered]
                      }
                      key={index}>
                      <Icon
                        name={nav.icon}
                        style={styles.floatNavBarIcon}/>
                      <Text
                        style={styles.floatNavBarText}>
                        {nav.title}
                      </Text>
                    </TouchableOpacity>
                  )
                })
              })()
            }
          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    Animated.timing(this.state.fadeInOpacity, {
      toValue: 1, // 目标值
      duration: 200, // 动画时间
      easing: Easing.ease // 缓动函数
    }).start()
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
    borderRadius: 5,
  },
  unreadCount: {
    position: 'absolute',
    left: 37,
    top: 3,
    width: 14,
    height: 14,
    backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
  },
  unreadCountText: {
    color: '#fff',
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    fontWeight: 'bold',
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
  },

  floatNavBarLayer: {
    position: 'absolute',
    width: width,
    height: 2000,
    zIndex: 2,
  },
  floatNavBarContainer: {
    position: 'absolute',
    top: 10,
    right: 5,
    backgroundColor: '#333238',
  },

  floatNavBarTriangle: {
    position: 'absolute',
    top: -6,
    right: 8,
  },

  floatNavBarContent: {
    paddingLeft: 10,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 3,
  },

  floatNavBarIcon: {
    fontSize: 16,
    color: '#fff',
    paddingTop: 8,
    paddingRight: 7,
  },

  floatNavBarTextBox: {
    height: 30,
    flexDirection: 'row',
  },

  floatNavBarText: {
    lineHeight: 30,
    color: '#fff',
  },

})

const commonStyles = StyleSheet.create({
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)'
  }
})
