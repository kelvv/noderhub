import React, { Component } from 'react';
import {  StyleSheet , Text , View , Image ,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Tag from '../../components/Tag'

class PostRow extends Component {
  render() {
    return (
        <View style={styles.container}>  
            <View style={styles.headcontainer}>  
                <Image style={styles.head} source={require('../../images/head.png')}/>
                <Text style={styles.name}>kelvv</Text>
                <Text style={styles.smallGray}>5小时前</Text>
            </View> 
            <TouchableHighlight  onPress={this.props._renderDetial}>
                <Text style={styles.title}>【原创分享】Nodejs跨平台轻量级图片编解码库【增加Jpeg质量调整】</Text>
            </TouchableHighlight>
            <View style={styles.headcontainer}>  
                <Tag style={styles.tag} content="精华"/>
                <Text style={styles.smallGray}>阅读 </Text>
                <Text style={styles.smallGray}>300 </Text>
                <Text style={styles.smallGray}>| </Text>
                <Text style={styles.smallGray}>评论 </Text>
                <Text style={styles.smallGray}>8 </Text>
            </View> 
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {  
        margin : 10
    },
    headcontainer : {
        flex: 1,
        flexDirection: 'row',
        alignItems : 'center'
    },
    head : {
        width : 30,
        height : 30
    },
    name: {
        fontSize : 15 ,
        marginRight : 5
    },
    smallGray : {
        fontSize : 10 ,
        color : 'gray'
    },
    title : {
        fontSize : 17 ,
        margin : 10
    },
    tag : {
        width : 10,
        height : 10
    }
});

export default PostRow