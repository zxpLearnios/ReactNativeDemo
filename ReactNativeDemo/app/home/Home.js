/**
 * Created by jingnanzhang on 2017/5/31.
 */

import  React, {Component} from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';


// Const的第一种方式
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法
// // Const的第二种方式
// import  Const from '../const/Const'

export default class  Home extends  Component{

    constructor(){
        super();

    }

    render(){
        console.log(conster.width + 1);
        return <View style={styles.container} />;

    }


}


const  styles = StyleSheet.create({
    container:{
        width: conster.width - 40,
        flex: 1,
        backgroundColor: 'red',
    },
});

