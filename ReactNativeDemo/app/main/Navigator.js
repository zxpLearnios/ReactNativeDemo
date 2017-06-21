/**
 * Created by jingnanzhang on 2017/5/31.
 */

import React, { Component } from 'react';
import {
    AppRegistry,

}from 'react-native';

import {
    TabNavigator,
    StackNavigator,
    TabBarBottom,
}from 'react-navigation'; // npm install --save react-navigation 来安装词库


// 导入js类
import  HomePage from '../home/Home'
import  MinePage from '../mine/Mine'

import  TabBarItem from '../main/TabBarItem'


import MineDetailPage from '../mine/MineDetail'


export  default  class Navigator extends  Component{

    render(){
        return <AppNavigator/>;
    }

}


const AppTab = TabNavigator({

        HomePage: {
            screen: HomePage,
            navigationOptions: {
                title: '主页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/icon_tabbar_misc.png')}
                        selectedImage={require('../img/icon_tabbar_misc_selected.png')}
                    />
                )
            }
        },

        MinePage: {
            screen: MinePage,
            navigationOptions: {
                title: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/icon_tabbar_mine.png')}
                        selectedImage={require('../img/icon_tabbar_mine_selected.png')}
                    />
                )
            }
        },
    },
    // 设置 tabbar
    {
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
            labelStyle:{fontSize: 12}, // 文字大小
            style: {backgroundColor: '#fff'}, // TabBar 背景色,
        },

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false, // 左右滑动
        animationEnabled: false, // 页面切换时需要动画
        lazy: true,


        initialRouteName: 'HomePage', // 默认显示的tab
        backBehavior:'none'
        // headerMode: 导航栏的显示模式: screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        // mode: 页面切换模式: 左右是card(相当于iOS中的push效果), 上下是- - modal(相当于iOS中的modal效果)

    }
);


// 所有需要push的页面均需加入此screen组里
const AppNavigator = StackNavigator({

    Tab: {
        screen: AppTab,
    },

    MineDetail:{
        screen: MineDetailPage,

        navigationOptions:{
            headerTitle:'我的详情',
            headerBackTitle:'返回我的',
        },

    },

});


