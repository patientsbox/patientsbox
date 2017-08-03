import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Content,
  Container,
  Body,
  Title
} from 'native-base';

export default class Natification extends Component {

  static navigationOptions = {
    title : 'ooo'
  }

  render() {
    return(
      <Container>
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
