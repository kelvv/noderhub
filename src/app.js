import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as appActions from './actions/appActions'
import { connect } from 'react-redux'
import home from './containers/home'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'


class noderhub extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {  selectedTab ,setSelectedTab} = this.props;
        
        return (
        <TabNavigator>
          <TabNavigator.Item
            selected={selectedTab === 'home'}
            title="主页"
            renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
            renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
            badgeText=""
            onPress={() => setSelectedTab('home')}>
            {<Text>123</Text>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={selectedTab === 'me'}
            title="我"
            renderIcon={() => <Icon name={ 'ios-person' } size={30} color={'gray'}/>}
            renderSelectedIcon={() => <Icon name={ 'ios-person' } size={30} color={'#4E78E7'}/>}
            badgeText=""
            onPress={() => setSelectedTab('me')}>
            {<Text>555</Text>}
          </TabNavigator.Item>
        </TabNavigator>
        );
  }
}

export default connect(
  state => ({
    selectedTab : state.app.selectedTab
  }),
  dispatch => ({
    setSelectedTab: (name) => dispatch(appActions.setSelectedTab(name))
  })
)(noderhub);