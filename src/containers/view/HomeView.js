import React, { Component } from 'react';
import {  StyleSheet , ScrollView , View } from 'react-native';
import Header from '../../components/Header'
import TabTitle from '../../components/TabTitle'
import PostList from '../../containers/post/PostList'
import PostRow   from '../../containers/post/PostRow'

class HomeView extends Component {
  render() {
    return (
      <View>
          <Header title="NoderHub"/>
          <TabTitle title="全部帖子"/>
          <PostList/>
          <PostRow/>
          <PostRow/>
          <PostRow/>
      </View>
    );
  }
}


export default HomeView