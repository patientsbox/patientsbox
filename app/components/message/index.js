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

export default class Message extends Component {

  static navigationOptions = {
  }

  render() {
    return(
      <Container>
        <Header style = {{backgroundColor : '#4A6664', }}>
          <Body>
            <Title>Message</Title>
          </Body>
        </Header>
        <Text>Message</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
