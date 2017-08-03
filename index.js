
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app/index';

class PatientsBox extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('PatientsBox', () => PatientsBox);
