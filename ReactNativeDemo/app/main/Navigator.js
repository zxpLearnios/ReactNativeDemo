/**
 * Created by jingnanzhang on 2017/5/31.
 */
// 这里只写tab页


import React, { Component } from 'react';

import {
    Button,
    Text,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    TabBarBottom,
}from 'react-navigation'; // npm install --save react-navigation 来安装词库


// 导入js类
import  HomePage from '../home/Home'
import  MinePage from '../mine/Mine'
import LoginPage from '../mine/Login'

import CustomeNavigationBar from '../customeComponents/NavigationBar'
import  TabBarItem from '../main/TabBarItem'
import  NavBarItem from '../main/NavBarItem'




import MineDetailPage from '../mine/MineDetail'
import TestListViewPage from '../mine/TestListView'
import GesturePwdPage from '../customeComponents/GesturePwd'

import  * as conster from  '../const/Const'

let navRightItemImg = require('../img/plus.png');
export  default  class Navigator extends  Component{

    render(){
        return <AppNavigator/>;
    }

    test(){



    }
}

// 几个table页面
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
            activeTintColor: 'orange', // 选中tabItem
            inactiveTintColor: 'gray', // 普通tabItem
            labelStyle:{fontSize: 12}, // 文字大小
            style: {backgroundColor: '#fff'}, // TabBar 背景色,
        },

        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false, // 左右滑动
        animationEnabled: false, // 页面切换时不需要动画
        lazy: true,


        initialRouteName: 'MinePage', // 默认显示的tab MinePage HomePage
        backBehavior:'none',  // 回调
    },

);




/*
* 1. 所有需要push的页面均需加入此screen组里
* 2. 下面的StackNavigator默认显示里面的第一个screen
*
* */
const AppNavigator = StackNavigator({
    // 登录的导航栏在LoginPage设置
    LoginPage:{
        screen: LoginPage,
        // navigationOptions:  CustomeNavigationBar('wetft'), // 测试自定义的导航栏
    },

    TabPage: {
        screen: AppTab,
        // 设置navigation NavBarItem, 使tab页左右都有按钮
        navigationOptions:{
            headerLeft: <NavBarItem type={'btn'} onPress={() => alert('点击了left-navigation')}/>,
            headerRight: <NavBarItem type={'img'} img={navRightItemImg} onPress={() => alert('点击了right-navigation')}/>
        },
    },


    MineDetail:{
        screen: MineDetailPage,
         navigationOptions:{
            headerTitle:'我的详情',
         },

    },

    TestListView:{
        screen: TestListViewPage,
        header:{
            // visible: false, // 是否顯示導航欄
        },

    },
    GesturePwd:{
        screen: GesturePwdPage,
    },
}, {
    // headerMode: 导航栏的显示模式: screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    mode: this.modeType,//页面切换模式: 左右是card(相当于iOS中的push效果), 上下是- -  (相当于iOS中的 效果)
    // onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }
});


