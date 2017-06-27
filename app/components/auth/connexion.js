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

export default class Connexion extends Component {

  static navigationOptions = {
      header : null
  }

  connexion(){
    this.props.navigation.navigate("Home");
  }

  inscription(){
    this.props.navigation.navigate("Inscription");
  }

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
        </View>
        <View style = {styles.loginContainer}>
          <View style = {styles.inputContainer}>
            <InputGroup source = {require("../../img/email.png")} placeholder = "Email"/>
            <InputGroup secured marginBottom = {0} source = {require("../../img/locked.png")} placeholder = "Mot de passe"/>
          </View>
          <View style = {styles.motdepasseContainer}>
            <Text style = {styles.motdepasseText}>Mot de passe oublié ? </Text>
          </View>
          <Button title = {"Connexion"} onPress = {this.connexion.bind(this)}/>
          <View style = {styles.inscriptionContainer}>
            <TouchableOpacity activeOpacity = {0.7} onPress = {this.inscription.bind(this)}>
              <Text style = {styles.inscriptionText}>INSCRIPTION</Text>
            </TouchableOpacity>
          </View>
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
    flex : 2,
  },
  loginContainer : {
    flex : 3
  },

  inputContainer : {

  },

  buttonContainer : {
    backgroundColor : 'white'
  },
  motdepasseContainer : {
    alignItems : 'flex-end',
    marginBottom : 35
  },
  motdepasseText : {
    fontSize : 15,
    color :  '#fff'
  },

  inscriptionContainer : {
    marginTop : 50,
    alignItems : 'center',
  },

  inscriptionText : {
    fontSize : 16,
    color :  '#fff'
  }
})
