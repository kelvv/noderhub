import React, { Component } from 'react';
import {  StyleSheet , Text , View , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class Header extends Component {
  render() {
    return (
        <View style={styles.headView}>  
            <View style={styles.titleCenter}>
                <TouchableOpacity>
                    <View ></View>
                </TouchableOpacity>
                <Text style={styles.headText}>{this.props.title}</Text>
                <Icon name={ 'ios-create-outline' } size={33} style={styles.create}/>
            </View>
            <View style={styles.line}/>
        </View> 
    );
  }
}

const styles = StyleSheet.create({
    headView: {  
        paddingTop: 23,  
    }, 
    titleCenter: {  
        flexDirection : 'row',
        flex: 1 ,
        justifyContent: 'space-between',
        alignItems : 'center'
    }, 
    headText: {  
        backgroundColor: 'white',  
        height: 32,  
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'center' ,
        fontSize : 20,
        fontWeight : 'bold'
  },
  line: {
        height : 1,
        backgroundColor: '#afb0b2'
  },
  create: {
        alignSelf : 'flex-end',
        marginBottom : 5,
        marginRight : 5
  }
});

export default Header