import React, { Component } from 'react';
import {  StyleSheet , Text , View , Image ,TouchableHighlight , WebView , ScrollView ,Dimensions} from 'react-native';
import Tag from '../../components/Tag'
const env=  require('../../config/env.json')
import * as postActions from '../../actions/postActions'
import {formatDate} from '../../utils/dateHandler'
var HTMLView = require('react-native-htmlview')
import { connect } from 'react-redux'

class PostDetail extends Component {
    _renderNode(node, index, parent){
        if(node.name==='img'){
            let {height, width} = Dimensions.get('window');
            return (
                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start',width: 450, height: 338 , margin:10}}>
                    <Image source={{uri:node.attribs.src.startsWith('https:')?
                                node.attribs.src:'https:'+node.attribs.src
                                }}
                                style={{width: width - 50, height: 250}}>
                    </Image>
                </View>
            )
        }
        
    }

    render() {
        let {postDetail} = this.props
        return postDetail?(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={{uri: postDetail.author.avatar_url.startsWith('https:')?
                            postDetail.author.avatar_url:'https:'+postDetail.author.avatar_url}}
                            style={styles.head} />
                    <View style={styles.titleView}>
                        <Text style={styles.name}>{[postDetail.author.loginname]}</Text>
                        <View Style={styles.line} ></View>
                        <Text style={styles.time}>{formatDate(postDetail.last_reply_at,true)}</Text>
                    </View>
                </View>
                <ScrollView style={{backgroundColor : '#fff'}}>
                    <View style={{marginTop:-60}}>
                        <Text style={styles.title}>{postDetail.title}</Text>
                        <Text style={styles.tip}>{` 发布于${formatDate(postDetail.create_at,false)} | ${postDetail.visit_count} 次浏览 `}</Text>
                        <View style={styles.line}></View>
                        <View style={{margin:15}}>
                            <HTMLView value= { postDetail.content } renderNode={this._renderNode.bind(this)}/>
                        </View>
                    </View>
                    <View >
                        <View style={{height:1,backgroundColor:'#F5F5DC'}}></View>
                        <View style={styles.commntView}>
                            <Text style={{color:'#007aff'}}>{`评论 ${postDetail.reply_count}`}</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#F5F5DC'}}></View>
                    </View>
                </ScrollView>
            </View>
        ):null;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#fff',
        flex:1,
        marginTop : 65
    },
    header : {
        backgroundColor : '#F7F7F7',
        height : 40 ,
        flexDirection: 'row',
        alignItems : 'center'
    },
    line: {
        height : 1,
        backgroundColor: '#afb0b2',
        marginLeft :15,
        marginRight :15,
        marginTop :12
    },
    head : {
        height : 25,
        width : 25,
        marginLeft : 15
    },
    name : {
        fontSize : 13,
        marginLeft : 13,
        fontFamily: 'Arial' 
    },
    time : {
        fontSize : 10,
        marginTop : 5,
        marginLeft : 13,
        color : 'gray'
    },
    title: {
        fontWeight : 'bold',
        fontSize : 20,
        margin : 15
    },
    tip: {
        fontSize : 10,
        color : 'gray',
        marginLeft : 15
    },
    htmlView: {
        margin : 15
    },
    commntView:{
        marginLeft :15,
        height: 30,
        justifyContent : 'center',
        backgroundColor:'#F7F7F7'
    },
    a: {
        fontWeight: '300',
        color: '#FF3366', // pink links
    },
    imgWrapper:{
        width : 50,
        height: 50
    },
    img:{

    }
});

export default connect(
  state => ({
      postDetail : state.post.postDetail
  }),
  dispatch => ({
  })
)(PostDetail);