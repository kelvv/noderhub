import React, { Component } from 'react';
import {  StyleSheet, TextInput, View , TouchableHighlight , Text , ListView , ActivityIndicator,
  RefreshControl
} from 'react-native';
import GiftedListView from 'react-native-gifted-listview'
import GiftedSpinner from 'react-native-gifted-spinner'
import * as postActions from '../../actions/postActions'
import { connect } from 'react-redux'
import PostRow from './PostRow'



class PostList extends Component {


  _renderRow(row){
    return (
      <PostRow/>
    )
  } 

  _nextPage(){
     const { dataSource , getPostNext , curPage , refreshing } = this.props;
     if(dataSource.length===0 || refreshing){
        return
     }
     getPostNext(curPage+1)
  }

  _renderFooter() {
    <ActivityIndicator
        animating = {this.props.fetchingNext}
        style = {{ height: 80 }
        }
        size = "large"
    />
    
  }

  _onRefresh() {
    const { getPostList } = this.props;
    getPostList(1);
  }

  render() {
    const { dataSource , refreshing = true} = this.props;
    return (
        <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this) }
            enableEmptySections={true}
            onEndReached={this._nextPage.bind(this) }
            onEndReachedThreshold={0}
            contentInset={{ top: -20 }}
            contentOffset={ { y: 20 }}
            renderFooter={this._renderFooter.bind(this) }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh.bind(this) }
                tintColor="#000"
                title="加载中..."
                titleColor="#000"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#000"
                />}
            />
    );
  }
}

export default connect(
  state => ({
    dataSource : state.post.dataSource,
    refreshing : state.post.refreshing,
    fetchingNext : state.post.fetchingNext,
    curPage: state.post.curPage || 0
  }),
  dispatch => ({
    getPostList : (page) => dispatch(postActions.getPostList(page)),
    getPostNext : (page) => dispatch(postActions.getPostNext(page)),
  })
)(PostList);