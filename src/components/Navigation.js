
import React, {Component} from 'react'
import {
  View,
  NavigatorIOS,
  Text ,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import * as appActions from '../actions/appActions'


class Navigation extends Component {
  render() {
    let {changeScene} = this.props;
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{ 
          title: '主页', 
          component: this.props.component, 
          index: 0 ,
          rightButtonTitle:'发帖' ,
          onRightButtonPress: () => {
            alert('Ok');
          }
        }}
        style={{flex: 1}}
        />
    )
  }
}

/*
this.refs.nav.navigator.push({
              title: "test",
              component: EmptyPage,
              rightButtonTitle: 'Cancel',
              onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
            });
 */

export default Navigation;