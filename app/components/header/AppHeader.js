import React, {Component} from 'react';

import {
  Header,
  Text,
  Left,
  Right
} from "native-base";

import { MaterialIcons } from '@expo/vector-icons';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Header style={{elevation : 2, borderBottomWidth: 1, borderColor : '#fff',  backgroundColor : '#fff', height : 45}}>
        <Left>
          <Text style = {{color : '#000', fontSize : 18}}>
            {this.props.navigation.state.key}
          </Text>
        </Left>
        <Right>
          <MaterialIcons name='settings' size={27}/>
        </Right>
      </Header>
    )
  }
}
