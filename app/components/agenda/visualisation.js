import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Visualisation extends Component {

  static navigationOptions = {
    title : 'Voir un planning',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
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
