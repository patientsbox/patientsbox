import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import Agenda from '../components/agenda/index';
import Notification from '../components/notification/index';
import Message from '../components/message/index';
import PatientNavigation from './patientnavigation';

import {
  Button,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";


import {TabNavigator, DrawerNavigator} from 'react-navigation';

const TabsNavigation = TabNavigator (
  {
    Agenda : {
      screen : Agenda,
      navigationOptions: {
        tabBarLabel: 'Agenda',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/agenda.png')}
            style={[styles.icon, {tintColor}]}/>
      }
    },
    Patient : {
      screen :  PatientNavigation,
      navigationOptions: {
        tabBarLabel: 'Patients',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/person.png')}
            style={[styles.icon, {tintColor}]}/>
      }
    },
    Notification : {
      screen :  Notification,
      navigationOptions: {
        tabBarLabel: 'Notif.',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/event.png')}
            style={[styles.icon, {tintColor}]}/>
      }
    },
    Message : {
      screen :  Message,
      navigationOptions: {
        tabBarLabel: 'Message',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/message.png')}
            style={[styles.icon, {tintColor}]}/>
        }
      }
    },
  {
    tabBarPosition : 'bottom',
    swipeEnabled : false,
    animationEnabled  : false,
    tabBarOptions : {
      showIcon : true,
      iconStyle : {
        padding : 0,
        marginBottom : 0,
        marginTop : 3
      },
      style : {
        backgroundColor : '#4A6664',
        paddingTop : 0,
        margin : 0
      },
      tabStyle : {
        marginTop : 0,
        marginBottom : 0,
        paddingTop : 0,
        paddingBottom : 0
      },
      labelStyle : {
        padding : 0,
        paddingBottom : 3,
        paddingTop : 0,
        margin : 0,
        color : '#fff',
        fontSize : 11,
      },
      upperCaseLabel  : false,
      indicatorStyle : {
        backgroundColor : 'transparent'
      }
    },
  }
)


export default class HomeNav extends Component {

  static navigationOptions = {
    header : null
  }

  render() {
    return(
      <TabsNavigation />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
      width: 20,
      height: 20,
      margin : 0,
      padding : 0
  }
})
