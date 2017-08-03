import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

import Agenda from '../components/agenda/index';

import Notification from '../components/notification/index';
import Message from '../components/message/index';

import Patients from '../components/patient/index';

import AppHeader from '../components/header/AppHeader';

import {
  Button,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label,
  Header,
  Text,
  Left
} from "native-base";


import {TabNavigator, DrawerNavigator} from 'react-navigation';

const TabsNavigation = TabNavigator (
  {
    Agenda : {
      screen : Agenda,
      navigationOptions: ({navigation}) => ({
        header : <AppHeader navigation={navigation}/>,
        title : 'Agenda',
        tabBarLabel: 'Agenda',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/agenda.png')}
            style={[styles.icon, {tintColor}]}/>
      })
    },
    Patients : {
      screen :  Patients,
      navigationOptions: ({navigation}) => ({
        header : <AppHeader navigation={navigation}/>,
        title : 'Patients',
        tabBarLabel: 'Patients',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/person.png')}
            style={[styles.icon, {tintColor}]}/>
      })
    },
    Notification : {
      screen :  Notification,
      navigationOptions: ({navigation}) => ({
        title : 'Notification',
        header : <AppHeader navigation={navigation}/>,
        tabBarLabel: 'Notif.',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/event.png')}
            style={[styles.icon, {tintColor}]}/>
      })
    },
    Message : {
      screen :  Message,
      navigationOptions: ({navigation}) => ({
        header : <AppHeader navigation={navigation}/>,
        title : 'Message',
        tabBarLabel: 'Message',
        tabBarIcon : ({ tintColor }) =>
          <Image source={require('../img/message.png')}
            style={[styles.icon, {tintColor}]}/>
      })
    }

    },

  {
    tabBarPosition : 'up',
    //swipeEnabled : false,
    animationEnabled  : false,
    tabBarOptions : {
      showIcon : true,
      showLabel : false,
      iconStyle : {
        padding : 0,
        //marginBottom : 0,
        margin : 10
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


export default TabsNavigation;

const styles = StyleSheet.create({
  icon: {
      width: 25,
      height: 25,
      margin : 0,
      padding : 0
  }
})
