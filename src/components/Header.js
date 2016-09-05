import React, { Component } from 'react';
import {  StyleSheet , Text , View , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

class Header extends Component {

    _back(){
        let {currentNavigator } = this.props
        if(currentNavigator.state.presentedIndex>0)
            currentNavigator.pop();
    }

    render() {
        let {currentNavigator ,title} = this.props
        return (
            <View style={styles.headView}>  
                <View style={styles.titleCenter}>
                    {
                        (currentNavigator&&currentNavigator.state.routeStack.length>1)?(
                            <TouchableOpacity onPress={this._back.bind(this)}>
                                <Icon name={ 'ios-arrow-back-outline' } size={33} style={styles.pop}/>
                            </TouchableOpacity>)
                            :
                            (<View/>)
                    }
                    <Text style={styles.headText}>{title}</Text>
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
  },
  pop : {
      alignSelf : 'flex-start',
        marginBottom : 5,
        marginLeft : 10
  }
});

export default connect(
  state => ({
    currentNavigator : state.app.currentNavigator,
    title : state.app.title
  })
)(Header);