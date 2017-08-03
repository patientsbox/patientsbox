import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  TimePickerAndroid
} from 'react-native';

import {
  Text,
  Container,
  Content,
  Input,
  ListItem,
  Left,
  Body,
  Item,
  Button
} from 'native-base';

import {LocaleConfig} from 'react-native-calendars';

import { MaterialIcons } from '@expo/vector-icons';

//import DateTimePicker from 'react-native-modal-datetime-picker';

//import Calendrier from './calendrier';

export default class Disponibilite extends Component {

  static navigationOptions = ({navigation}) =>{
      return {
        title : "Ajout de rendez-vous",
      }
    }

  constructor(props) {
    super(props);
    this.state = {
      patient : "",
      day : null,
      start : "",
      end : "",
      location : "",
      note : "",
      showCalendar : false
    }
  }

  closeCalendar(){
    this.setState({showCalendar : false})
  }

  formatTime(pTime){
    if(!pTime){
      return '00';
    }
    if(pTime > 0 && pTime < 10){
      return '0'+pTime;
    }
    return pTime;
  }

  async openDatePicker(element, time){
    try {
      let h = 10;
      let m = 0;
      if(time && time.length){
        let times = time.split(':');
        if(times != null && times.length==2){
          h = parseInt(times[0]);
          m = parseInt(times[1]);
        }
      }
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: h,
        minute: m,
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction){
        const time = this.formatTime(hour) + ':' +this.formatTime(minute);
        if(element=='start'){
          this.setState({start : time})
        }
        else{
          this.setState({end : time})
        }
      }
    } catch ({code, message}) {
      alert(message)
    }
  }

  formatDay(){
    if(this.state.day == null){
      return ""; // TODO
    }
    const {day, month, year} = this.state.day;
    return day+' '+LocaleConfig.locales['fr'].monthNamesShort[month-1]+' '+year;
  }

  renderDay(){
    let content = "";
    if(this.state.day == null){
      content = (
        <Text style={{color : '#afb9bf', fontSize : 17}}>
          {'25 Mai 2015'}
        </Text>
      );
    }
    else {
        content = (
          <Text style={{color : '#000', fontSize : 17}}>
            {this.formatDay()}
          </Text>
        );
    }
    return(
      <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Calendrier', {from : this.from.bind(this)})} style={{flexDirection : 'row'}}>
        {content}
      </TouchableOpacity>
    );
  }

  from(day){
    //console.log(LocaleConfig.locales['fr'].monthNamesShort[month-1]);
    this.setState({day : day});
  }

  isTimeEmpty(time){
    return time != null && time.trim().length == 0;
  }

  isStartEmpty(){
    return this.isTimeEmpty(this.state.start);
  }

  isEndEmpty(){
    return this.isTimeEmpty(this.state.end);
  }

  onPressDay(day){
    console.log(day);
  //  this.closeCalendar();
  }

  renderTime(){
    let isStartEmpty = this.isStartEmpty();
    let isEndEmpty = this.isEndEmpty();
    return(
      <View style={{marginLeft : 7, flexDirection : 'row',}}>
        <TouchableOpacity onPress = {() => this.openDatePicker('start', this.state.start)}>
          <Text style={{color : isStartEmpty ? '#afb9bf' : '#000', fontSize : 17}}>
            {isStartEmpty ? '09:00' : this.state.start}
          </Text>
        </TouchableOpacity>
        <Text> - </Text>
        <TouchableOpacity onPress = {() => this.openDatePicker('end', this.state.end)}>
          <Text style={{color : isEndEmpty ? '#afb9bf' : '#000', fontSize : 17}}>
            {isEndEmpty ? '10:00' : this.state.end}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  componentWillReceiveProps(props){
    console.log(props);
  }

  render() {
    console.log(this.props.navigation.state.key);
    return (
      <View style={{backgroundColor : '#fff', flex : 1, paddingTop : 20, paddingLeft : 20}}>

        <Item style={{borderBottomWidth : 1, borderColor : '#ccc'}}>
           <MaterialIcons style = {{marginRight : 10}} color = '#4A6664' name='person' size={25}/>
           <Input onChangeText = {(patient)=>this.setState({patient})} placeholderTextColor = '#afb9bf' placeholder='Patient'/>
        </Item>

        <ListItem style={{borderBottomWidth : 1, borderColor : '#ccc' , justifyContent : 'flex-start',  margin : 0, paddingTop : 10, paddingBottom : 10, paddingLeft : 0, marginLeft : 0}}>
          <Left style={{flex : 0}}>
            <MaterialIcons style = {{marginRight : 10}} color = '#4A6664' name='today' size={25}/>
          </Left>

          <View style={{marginLeft : 7, flexDirection : 'row', flex : 1, justifyContent : 'space-between'}}>
            {this.renderDay()}
          </View>
        </ListItem>

        <ListItem style={{borderBottomWidth : 1, borderColor : '#ccc' , justifyContent : 'flex-start',  margin : 0, paddingTop : 10, paddingBottom : 10, paddingLeft : 0, marginLeft : 0}}>
          <Left style={{flex : 0}}>
            <MaterialIcons style = {{marginRight : 10}} color = '#4A6664' name='timer' size={25}/>
          </Left>
          {this.renderTime()}
        </ListItem>

        <Item style={{borderBottomWidth : 1, borderColor : '#ccc'}}>
           <MaterialIcons style = {{marginRight : 10}} color = '#4A6664' name='location-on' size={25}/>
           <Input placeholderTextColor = '#afb9bf' placeholder='Ajouter un lieu'/>
        </Item>

        <Item style={{borderBottomWidth : 1, borderColor : '#ccc',}}>
             <MaterialIcons style = {{marginRight : 10}} color = '#4A6664' name='note' size={25}/>
             <Input placeholderTextColor = '#afb9bf' placeholder='Ajouter une note' multiline={false} />
         </Item>

         <View style = {{marginTop : 50, flex : 1, flexDirection : 'row', justifyContent : 'space-between'}}>
           <Button onPress={()=>console.log('o')} bordered style={{padding : 0, borderColor : '#4A6664', borderRadius : 5, height : 35}}>
            <Text style={{color : '#4A6664',}}>Enregistrer</Text>
           </Button>
         </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
});
