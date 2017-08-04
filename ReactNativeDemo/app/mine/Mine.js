/**
 * Created by jingnanzhang on 2017/5/31.
 */
//

import  React, {Component, } from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,
}from 'react-native';
import {
    StackNavigator,
}from 'react-navigation';


// Const的第一种方式  导入constant
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法
import MyView from '../nativeComponents/MyView'
import GesturePwd from '../customeComponents/GesturePwd'


export default class  Mine extends  Component{



    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <Button
                    title="跳转"
                    onPress={() =>
                        this.goToPage(navigate)}
                />

                <MyView
                     style={styles.reactView}
                />

            </View>


        )
    }

    goToPage(navigate){
        // let nav = StackNavigator({
        //
        //     // 登录的导航栏在LoginPage设置
        //     GesturePwdPage: {
        //         screen: GesturePwd,
        //         // navigationOptions:  CustomeNavigationBar('wetft'), // 测试自定义的导航栏
        //     }
        // },{
        //     mode: 'modal',
        // });

        navigate('GesturePwd', {info: '有Mine传给你的'}) // GesturePwd  TestListView  MineDetail
    }

    componentDidMount(){
        // this.testSet();

        // 测试数据存取
        // let user =   Global.getInfo(conster.saveUserkey).then(user => {
        //     alert(user.name)
        // }).catch(err => {
        //     switch (err.name) {
        //         case 'NotFoundError':
        //             // TODO;
        //             break;
        //         case 'ExpiredError':
        //             // TODO
        //             break;
        //     }
        //     alert('getInfo----error')
        // });


    }


    testSet = () => {

        const set = new Set([1, 2, 3, 4, 4]);
        // alert([...set]) // 1,2,3,4
        // alert(set.size) // 4

        // let set = Set();
        // set.add(1,'1', [1,2,3,3])
        // [...set];

    }





}





const  styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    reactView:{
        width: 200,
        height: 200,
        // backgroundColor: 'red',
    },

});

