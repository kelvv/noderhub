
import React, {Component} from 'react'
import {
  View ,
  Text ,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import * as appActions from '../actions/appActions'


class RectButton extends Component {
  render() {
    let {changeScene} = this.props;
  }
}

export default RectButton;