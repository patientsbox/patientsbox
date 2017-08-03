import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Title,
  Icon,
  Button,
  Fab
} from 'native-base';

import Agenda from './agenda';

const {height, width} = Dimensions.get("window");

export default class Patient extends Component {

  static navigationOptions = {
    title : 'Agenda',
  }

  constructor(props){
    super(props);
    this.state = {
      active : false,
    }
  }
  toRendezVous(){
      this.props.navigation.navigate('RendezVous');
  }

  toVisualisation(){
    this.props.navigation.navigate('Visualisation');
  }

  render() {
    //alert(height)
    return(
      <Container>
        <Agenda toVisualisation = {this.toVisualisation.bind(this)}/>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ color: '#4A6664', height : 50, width : 50 }}
          position="bottomRight"
          onPress = {()=>this.toRendezVous()}>
            <Icon name="add" onPress = {()=>this.toRendezVous()}/>
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
