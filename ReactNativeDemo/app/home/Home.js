/**
 * Created by jingnanzhang on 2017/5/31.
 */

import  React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    ReactNative,
}from 'react-native';

// 退键盘第三方
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Const的第一种方式
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法
// // Const的第二种方式
// import  Const from '../const/Const'

export default class  Home extends  Component{

    constructor(){
        super();

    }

    // 键盘的弹出、隐藏
    render(){
        // console.log(conster.width + 1);
        // return <View style={styles.container} />;
        return (
            <KeyboardAwareScrollView >
                <View style={styles.container}>
                    <TextInput  placeholder="请输入----" onFocus={(event: Event) => {
                        // alert(event.target)
                        // this._scrollToInput(ReactNative.findNodeHandle())
                    }}
                                style={styles.input}
                    />
                    <TextInput/>
                </View>

            </KeyboardAwareScrollView>
        );

    }

    _scrollToInput (reactNode: any) {
        this.refs.keyboardScroll.scrollToFocusedInput(reactNode)
    }



}


const  styles = StyleSheet.create({
    container:{
        marginTop: 50,
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    input:{
        height: 40,
    },
});

