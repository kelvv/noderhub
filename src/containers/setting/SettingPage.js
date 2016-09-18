import React, { Component } from 'react';
import {  StyleSheet , View ,Text ,Dimensions} from 'react-native';
import Camera from 'react-native-camera';

class SettingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.setting}>
              <View style={styles.line}/>
              <View style={styles.container}>
                <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.fill}>
                <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
              </View>
          </View>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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

    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});

export default SettingPage