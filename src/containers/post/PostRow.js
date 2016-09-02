import React, { Component } from 'react';
import {  StyleSheet , Text , View , Image ,TouchableHighlight} from 'react-native';
import Tag from '../../components/Tag'
const env=  require('../../config/env.json')
import {formatDate} from '../../utils/dateHandler'

class PostRow extends Component {
  render() {
    this.props.data.author.avatar_url = this.props.data.author.avatar_url.startsWith('https:')?
            this.props.data.author.avatar_url:'https:'+this.props.data.author.avatar_url
    
    if(this.props.data.tab==='job'){
        return false;
    }
    
    if(this.props.data.top){
        this.props.data.tab = 'top'
    }
    return (    
        <TouchableHighlight onPress={this.props._renderDetial}>
            <View style={styles.container}>  
                <View style={styles.headcontainer}>  
                    <Image style={styles.head} source={{uri:this.props.data.author.avatar_url}}/>
                    <Text style={styles.name}>{this.props.data.author.loginname}</Text>
                    <Text style={styles.time}>{formatDate(this.props.data.last_reply_at,true)}</Text>
                </View> 
                <TouchableHighlight  >
                    <Text style={styles.title}>{this.props.data.title}</Text>
                </TouchableHighlight>
                <View style={styles.headcontainer}>  
                    <Tag style={styles.tag} content={env.tags[this.props.data.tab]} visibility={this.props.data.tab && this.props.data.tab!==""}/>
                    <Text style={styles.smallGray}>阅读 </Text>
                    <Text style={styles.smallGray}>{this.props.data.visit_count}</Text>
                    <Text style={styles.smallGray}> | </Text>
                    <Text style={styles.smallGray}>评论 </Text>
                    <Text style={styles.smallGray}>{this.props.data.reply_count}</Text>
                </View> 
            </View> 
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    container: {  
        margin : 10
    },
    headcontainer : {
        flexDirection: 'row',
        alignItems : 'center'
    },
    head : {
        width : 27,
        height : 27
    },
    name: {
        fontSize : 15 ,
        marginRight : 5,
        marginLeft : 5
    },
    time : {
        fontSize : 10 ,
        color : 'gray'
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