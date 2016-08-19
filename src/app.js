import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as appActions from './actions/appActions'
import { connect } from 'react-redux'
import HomeView from './containers/view/HomeView'
import WorkView from './containers/view/WorkView'
import MeView from './containers/view/MeView'
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
                title="发现"
                renderIcon={() => <Icon name={ 'ios-home' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-home' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('home')}>
                <HomeView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'work'}
                title="招聘"
                renderIcon={() => <Icon name={ 'ios-man' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-man' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('work')}>
                <WorkView/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={selectedTab === 'me'}
                title="我的"
                renderIcon={() => <Icon name={ 'ios-person' } size={25} color={'gray'}/>}
                renderSelectedIcon={() => <Icon name={ 'ios-person' } size={25} color={'#4E78E7'}/>}
                badgeText=""
                onPress={() => setSelectedTab('me')}>
                <MeView/>
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