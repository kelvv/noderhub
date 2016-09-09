import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View ,
  Image ,
  WebView
} from 'react-native';
import { bindActionCreators } from 'redux'
import * as appActions from './actions/appActions'
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import PostList from './containers/post/PostList'
import WorkPage from './containers/work/WorkPage'
import SettingPage from './containers/setting/SettingPage'

var HTMLView = require('react-native-htmlview')



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
                    <Navigation
                        route={{ 
                            title: '主页', 
                            component: PostList, 
                            index: 0 ,
                            rightButtonTitle:'发帖' ,
                            onRightButtonPress: () => {
                            alert('Ok');
                            }
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={selectedTab === 'work'}
                    title="招聘"
                    renderIcon={() => <Icon name={ 'ios-man' } size={25} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-man' } size={25} color={'#4E78E7'}/>}
                    badgeText=""
                    onPress={() => setSelectedTab('work')}>
                    <Navigation
                        route={{ 
                            title: '招聘', 
                            component: WorkPage, 
                            index: 0 
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={selectedTab === 'me'}
                    title="我的"
                    renderIcon={() => <Icon name={ 'ios-person' } size={25} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-person' } size={25} color={'#4E78E7'}/>}
                    badgeText=""
                    onPress={() => setSelectedTab('me')}>
                    <Navigation
                        route={{ 
                            title: '我的', 
                            component: SettingPage, 
                            index: 0 
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
  }
}

var styles = StyleSheet.create({
  con:{
      margin :10
  },
  h1 : {
      fontSize :32,
      fontWeight :'bold'
  },
  h2 : {
      fontSize :26,
      fontWeight :'bold'
  }
})

export default connect(
  state => ({
    selectedTab : state.app.selectedTab
  }),
  dispatch => ({
    setSelectedTab: (name) => dispatch(appActions.setSelectedTab(name))
  })
)(noderhub);