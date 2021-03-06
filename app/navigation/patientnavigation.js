import React, { Component } from 'react';

import FichePatient from '../components/patient/fichepatient';
import ListePatient from '../components/patient/listepatient';

import {StackNavigator} from 'react-navigation';

export const PatientNavigation = StackNavigator (
    {
      ListePatient : { screen : ListePatient},
      FichePatient : { screen : FichePatient},
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
      <PatientNavigation />
    );
  }
}
