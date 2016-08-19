import React, { Component } from 'react';
import {  StyleSheet , Text , View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class TabTitle extends Component {
  render() {
    return (
        <View style={styles.container}>  
            <View style={styles.head}> 
                <View style={styles.line}></View>
                <Text style={styles.title}>{this.props.title}</Text>
             </View> 
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {  
        flexDirection : 'row',
        justifyContent : 'flex-start',
        height : 35,
        margin :5
    }, 
    head : {
        flexDirection : 'row',
        margin : 10
    },
    line: {  
        width :2,
        height : 15,
        backgroundColor: '#007aff',
    }, 
    title: {  
        backgroundColor: 'white',  
        fontSize : 13,
        marginLeft : 5,
        color : '#007aff'
  }
});

export default TabTitle