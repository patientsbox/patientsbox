import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { NavigationActions } from 'react-navigation';

const {height, width} = Dimensions.get("window");

import {CalendarList} from 'react-native-calendars';

export default class Calendrier extends Component {

  constructor(props){
    super(props);
  }

  onPressDay(day){

    const setParamsAction = NavigationActions.setParams({
      params: { title: 'Hello' },
      key: this.props.navigation.state.params.from,
    })
    this.props.navigation.dispatch(setParamsAction);

    const backAction = NavigationActions.back({
      //key: this.props.navigation.state.params.from
    });
    this.props.navigation.state.params.from(day);
    this.props.navigation.dispatch(backAction)

  }

  render() {
    return(
      <View >
        <CalendarList
          // Callback which gets executed when visible months change in scroll view. Default = undefined
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          onDayPress={this.onPressDay.bind(this)}
          style={{borderWidth : 0,}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#65918E'
  },
})
