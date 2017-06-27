import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Title
} from 'native-base';
import Agen from './agenda';

export default class Patient extends Component {

  static navigationOptions = {
  }

  render() {
    return(
      <Container>
        <Header style = {{backgroundColor : '#4A6664', }}>
          <Body>
            <Title>Agenda</Title>
          </Body>
        </Header>
        <Agen />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
