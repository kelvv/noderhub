
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
        initialRoute={this.props.route}
        style={{flex: 1}}
        />
    )
  }
}

export default Navigation;