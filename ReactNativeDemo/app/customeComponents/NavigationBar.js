/**
 * Created by jingnanzhang on 2017/7/7.
 */
// 自定义导航栏


import React, { Component } from 'react';

import {
    Button,
} from 'react-native';

import {
    TabNavigator,
    StackNavigator,
    TabBarBottom,
}from 'react-navigation'; // npm install --save react-navigation 来安装词库


const StackOptions = ({headerTitle}) => {

    // 用来判断是否隐藏或显示header
    const visible= true;
    let header;
    if (visible === false){
        header = null;
    }
    const headerStyle = {backgroundColor:'#4ECBFC'};
    var headerTitle=headerTitle;
    const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'}
    const headerBackTitle = false;
    const headerLeft = (

        <Button
            title={'左边'}
            // onPress={()=>{navigation.goBack()}}
        />
    );
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};

module.exports = StackOptions;