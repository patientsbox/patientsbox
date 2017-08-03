import React, {Component} from 'react';

import {
  Header,
  Text,
  Left
} from "native-base";

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Header style={{elevation : 0,  backgroundColor : '#4A6664', height : 35}}>
        <Left>
          <Text style = {{color : '#fff', fontSize : 18}}>
            {this.props.navigation.state.key}
          </Text>
        </Left>
      </Header>
    )
  }
}
