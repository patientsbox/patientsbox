import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import Button from '../utils/button';

import InputGroup from '../utils/inputgroup';

export default class Inscription extends Component {

  static navigationOptions = {
      //header : null
      title : 'Création du compte',
      headerStyle : {
        backgroundColor : '#4A6664'
      },
      headerTitleStyle : {
        color : '#fff'
      },
      headerTintColor : '#fff'
  }


  inscription(){
    this.props.navigation.navigate("Connexion");
  }

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
        </View>
        <View style = {styles.loginContainer}>
          <View style = {styles.inputContainer}>
            <InputGroup source = {require("../../img/person.png")} placeholder = "Nom Prénom"/>
            <InputGroup source = {require("../../img/email.png")} placeholder = "Email"/>
            <InputGroup secured marginBottom = {0} source = {require("../../img/locked.png")} placeholder = "Mot de passe"/>
          </View>

          <Button title = {"CREER SON COMPTE"} onPress = {this.inscription.bind(this)}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 0,
    paddingBottom : 0,
    paddingRight : 50,
    paddingLeft : 50,
    backgroundColor : '#65918E'
  },
  logoContainer : {
    flex : 3,
  },
  loginContainer : {
    flex : 6
  },

  inputContainer : {
    marginBottom : 50
  },



})
