import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';



import Agenda from '../components/agenda/index';

import Notification from '../components/notification/index';

import Message from '../components/message/index';

import Patients from '../components/patient/index';

import {TabNavigator, DrawerNavigator} from 'react-navigation';


const ICON_STYLE = 27;

function getIcon(name, tintColor){
    return(
      <MaterialIcons name={name} size={ICON_STYLE} color={tintColor} />
    )
}


const TabsNavigation = TabNavigator (
  {
    Agenda : {
      screen : Agenda,
      navigationOptions: {
        title : 'Agenda',
        tabBarLabel: 'Agenda',
        tabBarIcon : ({ tintColor }) => getIcon('event', tintColor)
      }
    },
    Patients : {
      screen :  Patients,
      navigationOptions: {
        title : 'Patients',
        tabBarLabel: 'Patients',
        tabBarIcon : ({ tintColor }) => getIcon('person', tintColor)
      }
    },
    Notification : {
      screen :  Notification,
      navigationOptions: {
        title : 'Notification',
        tabBarLabel: 'Notif.',
        tabBarIcon : ({ tintColor }) => getIcon('notifications', tintColor)
      }
    },
    Message : {
      screen :  Message,
      navigationOptions: {
        title : 'Message',
        tabBarLabel: 'Message',
        tabBarIcon : ({ tintColor }) => getIcon('message', tintColor)
      }
    }

    },

  {
    
    tabBarPosition : 'bottom',
    //swipeEnabled : false,
    animationEnabled  : false,
    tabBarOptions : {
      showIcon : true,
      //showLabel : false,
      iconStyle : {
        padding : 0,
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
        paddingTop : 5,
        paddingBottom : 0
      },
      iconStyle :{
        width: ICON_STYLE,
        height: ICON_STYLE,
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
    navigationOptions: ({navigation}) =>{
      return {
        headerRight : <TouchableOpacity style={{margin:0, marginLeft: 2, marginRight: 5, justifyContent:'center', alignItems:'center'}}><MaterialCommunityIcons color='#000' name='dots-vertical' size={30} /></TouchableOpacity>,
        headerLeft : null,
        headerStyle :{
          elevation:2,
        },
        headerTitleStyle:{
          color : '#000'
        }
      }
    }
  }
)

export default TabsNavigation;



