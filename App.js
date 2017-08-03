import React, { Component } from 'react';

import App from './app/index';

import Expo from "expo";

import {StyleSheet, View, Text} from 'react-native'


import {
  Constants,
} from 'expo';

export default class PatientsBox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <View><Text>Chargement ...</Text></View>;
        }
        return (
            <View style={styles.container}>
                <App />     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#fff',
        marginTop : Constants.statusBarHeight
    }
})