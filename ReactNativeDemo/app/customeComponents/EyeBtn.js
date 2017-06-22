/**
 * Created by jingnanzhang on 2017/6/6.
 */
// 眼睛按钮

import  React, {Component} from 'react';

import {
    TouchableWithoutFeedback,
    View,
    Text,
    Image,
    StyleSheet,

}from 'react-native';

import {
    string,
    number,
    func,
}from 'prop-types'


// uri - 是一个表示图片的资源标识的字符串，它可以是一个http地址或是一个本地文件路径（使用require(相对路径)来引用）。
/*1.  图片使用方式1：
     <Image source ={{uri: 'icon'}}/>， 优缺点如下：
        1，这种方式获取到的图片不提供安全检查，因此我们需要自己指定图片大小，否则图片显示不出来。
        2，使用这种方式获取图片，uri中不能指定图片后缀，即只需要指定文件名即可。
        3，uri 方式支持字符串拼接，因此可以解决 require 方法不能拼接的问题，即解决方法是将图片放入APK中。

  2. <Image source ={{uri: 'http://....icon.png'}}/>， 优缺点如下：
    使用这种方法加载网络图片，同样必须指定图片的尺寸。

  3.　Image可以作为其他组件的背景图片展示，其方法是将Image嵌套在这些组件的外层

  4.


*/

let defaultImg = require('../img/icon_tabbar_mine_selected.png');
let selectImg = require('../img/icon_tabbar_mine.png');


export  default class  EyeBtn extends  Component{

    static propTypes={
        onPress: func,
        cliclkCallBack: () => {},
    }

    container = {
        justifyContent: 'center',
        alignItems: 'center',
    };

    imgStyle:{
        width: 20,
        height: 20,
        // tintColor	颜色，改变所有非透明像素的颜色
    };


    constructor(){
        super();

        this.state = {
            isDefaultImg: true,
            disabled:  true,  // 默认不可以交互
        };

    }

    render(){

        return (
            <TouchableWithoutFeedback
                disabled= {this.state.disabled} // {this.props.disabled} // 外部直接disabled时用 // {this.state.disabled}// 外部间接调用setState时用
                // ref={ (this.props.target) => this.pwdInput = this.props.target}
                onPress={this.clickAction.bind(this)} // this.props.onPress
            >
                <View  style={this.container}>

                    <Image
                        source={this.state.isDefaultImg? defaultImg: selectImg}
                        style={styles.imgStyle} >
                    </Image>

                </View>



            </TouchableWithoutFeedback>

        );
    }


    // 点击事件
    clickAction = () => { // callBack
        this.setState({
            isDefaultImg: !this.state.isDefaultImg,
        });

        // 注意这2种方法的区别
        // this.props.cliclkCallBack() && this.props.cliclkCallBack;
        EyeBtn.propTypes.cliclkCallBack && this.props.cliclkCallBack(); // 执行外部的方法
    }


    // 2.
    setDisable = (bl) => {
        // 1. 会触发render
        this.setState({
            disabled: bl,
        });

    }

}


const styles = StyleSheet.create({

    imgStyle:{
        width: 20,
        height: 20,
        // tintColor	颜色，改变所有非透明像素的颜色
    },

});
