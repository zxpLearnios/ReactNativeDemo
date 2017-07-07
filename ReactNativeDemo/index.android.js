/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';



import Main from './app/main/Main'


export default class MyRNProject extends Component {


    render() {
        return <Main/>
    }


}

AppRegistry.registerComponent('ReactNativeDemo', () => MyRNProject);