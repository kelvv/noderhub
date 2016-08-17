import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as appActions from './actions/appActions'
import { connect } from 'react-redux'
import HomeView from './containers/HomeView'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'


class noderhub extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {  selectedTab ,setSelectedTab } = this.props;
        
        return (
        <TabNavigator>
            <TabNavigator.Item
                selected={selectedTab === 'home'}
                title="主页"
                renderIcon={() => <Icon name={ 'ios-home' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-home' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('home')}>
                <HomeView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'me'}
                title="我"
                renderIcon={() => <Icon name={ 'ios-person' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-person' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('me')}>
                <HomeView/>
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