/**
 * Created by jingnanzhang on 2017/7/18.
 */
// 有背景色无边框的按钮
import  React, {Component, } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';
import {Color, } from "LocalReference";


export  default class  BaseBgBtn extends  Component{

    // title, onPress

    container = {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: Color.colorFF6633,
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

                <View style={[this.container, this.props.style]} >
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