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

export default class Natification extends Component {

  static navigationOptions = {
  }

  render() {
    return(
      <Container>
        <Header style = {{backgroundColor : '#4A6664', }}>
          <Body>
            <Title>Notification</Title>
          </Body>
        </Header>
        <Text>Notification</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
