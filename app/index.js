import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, View, Navigator, Text, Dimensions } from 'react-native';
// import Button from './app/components/Button'
import Header from './components/Header'
import FirstPageComponent from './pages/FirstPageComponent'

export default class app extends Component {
  render() {
    let defaultName = 'FirstPageComponent'
    let defaultComponent = FirstPageComponent
    var {height, width} = Dimensions.get('window')
    return (
      <View style={styles.page}>
        <Header title="首页" showBackBtn={false}></Header>
        {/* <Text style={{backgroundColor: 'red'}}>231</Text> */}
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            // 更多动画可参考node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})
