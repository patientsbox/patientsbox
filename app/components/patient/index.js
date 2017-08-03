import React, { Component } from 'react';

import ListePatients from './listepatient';

export default class Patients extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return(
      <ListePatients navigation={this.props.navigation}/>
    );
  }

}
