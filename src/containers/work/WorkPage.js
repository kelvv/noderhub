import React, { Component } from 'react';
import {  StyleSheet , View ,Text} from 'react-native';

class WorkPage extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.setting}>
              <View style={styles.line}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {  
        margin : 10,
        flex : 1
    },
    line : {
        height : 1,
        backgroundColor : 'grey'
    },
    setting : {

    }
});

export default WorkPage