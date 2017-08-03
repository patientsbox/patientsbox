import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {Agenda, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';

const rendezvous = {
  '2017-05-16' : [
    {
      patient : 'Diawara Zakaridia',
      start : '08:00',
      end : '09:00'
    },
    {
      patient : 'Coulibary Karim',
      start : '09:10',
      end : '10:00'
    },
    {
      patient : 'Traore Awa',
      start : '10:00',
      end : '12:00'
    }
  ],
  '2017-06-10' : [
    {
      patient : 'Traore Awa',
      start : '10:00',
      end : '12:00'
    },
  ],
  '2017-07-09' : [
    {
      patient : 'Ouattara Moussa',
      start : '10:00',
      end : '12:00'
    }
  ]
};
export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      rendezvous : rendezvous
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2017-05-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        hideKnob={false}
        /*renderDay={(day, item) => {
          if(day){
            console.log(day);
            return (
              <View style={[styles.day]}>
                <Text style={[styles.dayNum]}>{day.day}</Text>
                <Text style={[styles.dayText]}>
                {"Lun"}

                </Text>
              </View>
            );
          }
          else if( item){
            return(
              <View style={[styles.day]}/>
            );
          }
        }}*/
        // monthFormat={'yyyy'}
        //theme={{calendarBackground: 'red'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        //console.log(strTime);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];

          if(this.state.rendezvous[strTime]){
            const planning = this.state.rendezvous[strTime];
            //alert(planning);
            for (var i = 0; i < planning.length; i++) {
              //planning[i]
              this.state.items[strTime].push({
                planning : planning[i]
              });
            }
          }

          //const numItems = Math.floor(Math.random() * 5);
          /*for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime +' / '+j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }*/
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 0);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(planningItem) {
    return (
      <TouchableOpacity
        onPress={()=>this.props.toVisualisation()}
        style={[styles.item]}>
          <Text>{planningItem.planning.start} à {planningItem.planning.end} </Text>
          <Text>{planningItem.planning.patient}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Pas de rdv</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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
