/**
 * Created by jingnanzhang on 2017/6/6.
 */
// 有边框的按钮

import  React, {Component, } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';


export  default class  BaseBorderBtn extends  Component{

    // title, onPress

    container = {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderColor: 'white',
        borderWidth: 1,
    };

    btnStyle = {
        color: this.props.color || 'white', // 默认为橙色
        fontSize: this.props.fontSize || 20, //默认 14
    }

    render(){

        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.props.onPress}
            >

                <View backgroundColor={'rgba(1,1,1,0)'} style={[this.container, this.props.style]} >
                    <Text style={this.btnStyle}>{this.props.title}</Text>
                </View>

            </TouchableOpacity>

        );
    }



    // 2.
    setDisable = (bl) => {
        // 1. 会触发render
        this.setState({
            disabled: bl,
        });

    }

}

