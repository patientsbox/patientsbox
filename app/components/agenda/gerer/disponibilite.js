import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  ListItem,
  Radio,
  Right,
  Text,
  Container,
  Content,
  Left,
  Body
} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {CalendarList} from 'react-native-calendars';

import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Index extends Component {

  static navigationOptions = {
    title : 'Ajout de planning',
  }

  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isManageAvailability : false,
      isManageAppointment : false,
    };
  }


_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this._hideDateTimePicker();
};

handleAvailability(){
  if(!this.state.isManageAvailability){
    this.setState({
      isManageAvailability : true,
      isManageAppointment : false
    })
  }
}
handleAppointment(){
  if(!this.state.isManageAppointment){
    this.setState({
      isManageAvailability : false,
      isManageAppointment : true
    })
  }
}

render() {
    let content = "";
    if(this.state.isManageAppointment){
      content = <Text> rdv </Text>
    }else if (this.state.isManageAvailability) {
      content = <Text> disponibilite </Text>
    }

    return (
      <Container>
        <Content style={{backgroundColor : '#fff'}}>
          <Text>Disponibilite</Text>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  container: {
     flexDirection: 'row'
   },
   dayNum: {
     fontSize: 28,
     fontWeight: '200',
     color: '#eee'
   },
   dayText: {
     fontSize: 14,
     fontWeight: '300',
     color: '#ccc',
     marginTop: -5,
     backgroundColor: 'rgba(255,0,0,0)'
   },
   day: {
     width: 63,
     alignItems: 'center',
     justifyContent: 'flex-start',
     marginTop: 32
   },
   today: {
     color: '#000'
   }

});
