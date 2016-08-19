import React, { Component } from 'react';
import {  StyleSheet , Text , View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Tag extends Component {
  render() {
    return (
        <View style={styles.container}> 
            <View style={styles.border}> 
                <Text style={styles.content}>{this.props.content}</Text>
            </View> 
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    container: {  
        alignItems: 'flex-start'
    }, 
    border: {  
        borderWidth: 1,
        borderColor: '#007aff',
        padding : 5,
        borderRadius: 3,
        margin : 5,
        alignItems: 'flex-start'
    }, 
    content : {
        fontSize : 10,
        color: '#007aff'
    }
});

export default Tag