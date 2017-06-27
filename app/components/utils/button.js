import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {

  constructor(props){
      super(props)
  }

  render(){
    return (
      <TouchableOpacity activeOpacity = {0.7} style = {styles.connexionButton} onPress = {this.props.onPress}>
        <Text style = {styles.buttonText}>{this.props.title}</Text>
      </TouchableOpacity >
    )
  }
}


const styles = StyleSheet.create({
  connexionButton : {
    backgroundColor : '#4A6664',
    borderRadius : 5,
    height : 34,
    justifyContent : 'center',
    alignItems : 'center',

  },

  buttonText : {
    color : '#fff',
    fontSize : 15,
    //fontFamily : 'sans-serif'
  }


})
