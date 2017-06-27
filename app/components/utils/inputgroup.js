import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

export default class inputGroup extends Component {

  constructor(props){
      super(props)
  }

  render(){
    const marge = this.props.marginBottom ?  this.props.marginBottom :  20;
    return (
      <View style = {[styles.inputGroup, {marginBottom : marge}]}>
          <View style = {styles.inputGroupIcon}>
            <Image style={{width: 25, height: 25,}} source = {this.props.source} />
          </View>
          <View style = {styles.inputGroupInput}>
            <TextInput
              style={styles.input}
              placeholder = {this.props.placeholder}
              placeholderTextColor = "#ccc"
              selectionColor = '#ccc'
              //keybordType = 'email-adress'
              secureTextEntry = {this.props.secured ? true : false}
              underlineColorAndroid='transparent'
              />
          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  inputGroup : {
    flexDirection : 'row',
    marginBottom : 20,
    backgroundColor : '#5F8784',
    borderWidth : 2,
    borderColor : '#ccc',
    borderRadius : 10,
    height: 37,
  },
  inputGroupIcon : {
    paddingLeft : 8,
    paddingTop : 4
  },
  inputGroupInput : {
    width: 40,
    height: 40,
    flex : 1,
    marginLeft : 4
  },
  input : {
    height: 37,
    borderWidth : 0,
    fontSize : 14,
    color : 'white'
    //backgroundColor : 'black'
  },
})
