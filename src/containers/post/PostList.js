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
  constructor(props) {
    super(props);
    const { getPostList } = this.props;
    getPostList(1);
  }

  _renderRow(row){
    return (
      <PostRow style={styles.row} data={row}/>
    )
  } 

  _nextPage(){
     const { posts , getPostNext , curPage , refreshing  } = this.props;
     if( posts.length == 0 || refreshing ){
        return
     }
     getPostNext(curPage+1)
  }

  _renderFooter() {
    return (
      <ActivityIndicator
        animating = {this.props.fetchingNext}
        style = {{ height: 80 }
        }
        size = "large"
        />
    )
  }

  _renderSeparator(){
    return (
      <View style={styles.separator}></View>
    )
  }

  _onRefresh() {
    const { getPostList } = this.props;
    getPostList(1);
  }

  render() {
    const { dataSource , refreshing } = this.props;
    return (
      <ListView style={styles.container}
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
              renderSeparator={this._renderSeparator.bind(this)}
          />
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      paddingTop : 15
    },
    separator:{
        height : 1,
        backgroundColor : '#DEDEDE',
        marginLeft : 15,
        marginRight : 15
    }
});

export default connect(
  state => ({
    dataSource : state.post.dataSource,
    refreshing : state.post.refreshing || false ,
    fetchingNext : state.post.fetchingNext || false ,
    curPage: state.post.curPage || 1,
    posts: state.post.posts || []
  }),
  dispatch => ({
    getPostList : (page) => dispatch(postActions.getPostList(page)),
    getPostNext : (page) => dispatch(postActions.getPostNext(page)),
  })
)(PostList);