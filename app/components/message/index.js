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

export default class Message extends Component {

  static navigationOptions = {
  }

  render() {
    return(
      <Container style={styles.container}>
        <Text>Message</Text>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center'
  },
})
