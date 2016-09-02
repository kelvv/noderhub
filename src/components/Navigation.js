
import React, {Component} from 'react'
import {
  View,
  Navigator
} from 'react-native'


export default class Counter extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: '', component: this.props.component, index: 0 }}
        configureScene={(route) => {
          if (route.name == 'commentAdd' || route.name == 'postAdd') {
              return Navigator.SceneConfigs.FloatFromBottom
          } else {
              return Navigator.SceneConfigs.FloatFromRight
          }
        }
        }
        renderScene={(route, navigator) => {
          const Component = route.component;
          return (
            <View style={{ flex: 1 }}>
              <Component navigator={navigator} route={route} {...route.passProps}/>
            </View>
          );
        } }/>
    )
  }
}