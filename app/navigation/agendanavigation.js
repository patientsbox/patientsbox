import React, { Component } from 'react';

import Agenda from '../components/agenda/index';
import RendezVous from '../components/agenda/rendezvous';
import Visualisation from '../components/agenda/visualisation';

import {StackNavigator} from 'react-navigation';

export const AgendaNavigation = StackNavigator (
    {
      Agenda : { screen : Agenda},
      RendezVous : { screen : RendezVous},
      Visualisation : {screen : Visualisation}
    },
    {
      navigationOptions  : {
        headerTintColor : '#fff',
        headerStyle : {
          backgroundColor : '#4A6664',
        }
      }
    }
);

export default class Nav extends Component {

  static navigationOptions = {
      header : null
  }

  render() {
    return(
      <AgendaNavigation />
    );
  }
}
