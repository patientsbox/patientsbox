import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

import {
  Content,
  Container,
  CardItem,
  Card,
  Thumbnail,
  Body,
  Left,
  Right,
  Text,
  ListItem,
  Icon
} from 'native-base';

export default class Natification extends Component {

  static navigationOptions = {
    title : 'Fiche du patient'
  }

  render() {
    const {patient} = this.props.navigation.state.params;

    const analyses = patient.commentaires.map((commentaire , i)=>
    <Card key={i} >
      <CardItem header style = {{paddingBottom : 5, paddingTop : 5}}>
        <Text >Analyse du 22/05/2016</Text>
      </CardItem>
      <CardItem style = {{ paddingBottom : 5, paddingTop : 0, paddingRight : 0}}>
        <Body >
          <Text note>{commentaire} ...</Text>
        </Body>
      </CardItem>
      <CardItem style = {{ paddingBottom : 5, paddingTop : 0, paddingRight : 0,}}>
        <Body style={{paddingRight : 10, alignItems : 'flex-end'}}>
          <Text onPress = {()=>'ok'}>Voir plus</Text>
        </Body>
      </CardItem>
    </Card>
    );
    return(
      <Container>
        <Content>
          <Card >
            <CardItem >
              <Left>
                <Thumbnail source = {require('../../img/default_picture.png')} style = {{height : 80, width : 80}}/>
                <Body>
                  <Text style={{fontSize : 20,}}>{patient.name}</Text>
                  <Text note >{patient.birthday}</Text>
                </Body>
              </Left>
            </CardItem>
            <ListItem icon>
                <Left>
                    <Icon name="mail" />
                </Left>
                <Body>
                  <Text>{patient.email}</Text>
                </Body>
            </ListItem>
            <ListItem icon>
                <Left>
                    <Icon name="call" />
                </Left>
                <Body>
                  <Text>{patient.phone}</Text>
                </Body>
            </ListItem>

          </Card>
          {analyses}
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
