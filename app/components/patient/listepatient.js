import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Title,
  Input,
  ListItem,
  Right,
  Left,
  Thumbnail,
  Text,
  List
} from 'native-base';

import {
  listePatients
} from '../../data/list';

export default class Patient extends Component {

  static navigationOptions = {
    title : "Patients"
  }

  render() {
    const listItems = listePatients.map((element, i) =>
      <ListItem avatar onPress = {() => this.props.navigation.navigate('FichePatient', {patient : element})} key={i}>
          <Left>
              <Thumbnail source={require('../../img/default_picture.png')} />
          </Left>
          <Body>
              <Text>{element.name}</Text>
              <Text note>{element.email}</Text>
          </Body>
          <Right>
              <Text note> Voir </Text>
          </Right>
      </ListItem>
    );

    return(
      <Container>
        <Content style={{backgroundColor : '#fff'}}>
          <List>
            {listItems}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
