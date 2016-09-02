import React, { Component } from 'react';
import {  StyleSheet , Text , View , Image ,TouchableHighlight , WebView} from 'react-native';
import Tag from '../../components/Tag'
const env=  require('../../config/env.json')
import {formatDate} from '../../utils/dateHandler'

class PostDetail extends Component {
  render() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: 'https://avatars.githubusercontent.com/u/7406269?v=3&s=120'}}
                        style={styles.head} />
                <View style={styles.titleView}>
                    <Text style={styles.name}>{'十三爷'}</Text>
                    <View Style={styles.line} ></View>
                    <Text style={styles.time}>{'2016-10-11 9:32:11'}</Text>
                </View>
            </View>
            <View style={{flex:1,backgroundColor : '#fff'}}>
                <Text style={styles.title}>用Vue.js编写了cnodejs.org的h5客户端(webapp)</Text>
                <Text style={styles.tip}>发布于 6 小时前  313 次浏览  来自 问答</Text>
                <View style={styles.line}></View>
                <WebView source={{ html: '<h1>123</h1>' }} style={styles.htmlView}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#fff',
        flex:1,
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
    }
});

export default PostDetail