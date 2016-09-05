import React, { Component } from 'react';
import {  StyleSheet , ScrollView , View ,Text ,Navigator} from 'react-native';
import Header from '../../components/Header'
import PostList from '../../containers/post/PostList'
import Navigation from '../../components/Navigation'
import { connect } from 'react-redux'

class HomeView extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Navigation
              component={PostList}
          />
      </View>
    );
  }
}
//<Header title={this.props.currentSceneTitle}/>

export default connect(
  state => ({
    currentSceneTitle : state.post.currentSceneTitle
  })
)(HomeView);