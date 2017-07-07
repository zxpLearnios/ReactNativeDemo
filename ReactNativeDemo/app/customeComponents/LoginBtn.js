/**
 * Created by jingnanzhang on 2017/6/6.
 */
import  React, {Component, } from 'react';

import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
    Dimensions,
}from 'react-native';

// Const的第一种方式  导入constant
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法
// // Const的第二种方式
// import  Const from '../const/Const'


export  default class  LoginBtn extends  Component{



    state = {
        disabled:  true,  // 默认不可以交互
    };


    container = {
        // flex:1, // 注释掉，即view会刚好包裹住里面的内容
        justifyContent: 'center',
        alignSelf: 'center', // 父view的主轴默认为竖直，故这里为视水平的布局
        alignItems: 'center',
        width: conster.width - 80,
        height: 50,
        borderRadius: 25,
    };

    // 带有非颜色、大小、间距的设置时，须如此进行
    feedbackStyle = {
        disabled: this.state.disabled,
        onPress: this.props.onPress || (() => {alert('未实现登录按钮的点击方法')}),
    };

    // viewStyle={
    //     defaultBg: [],
    //     enableBg: ,
    // }

    registBtnStyle = {
        color: this.props.color || 'orange', // 默认为橙色
        fontSize: this.props.fontSize || 20, //默认 14
    }

    //  ---- 初始化 新增props：color   fontSize  onPress
    // 需要在constructor中初始化state，然后在需要修改时调用setState方法。
    constructor(props){
        super(props);


    }

    // 1.  是否刷新内部的子组件
    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.disabled !== nextState.disabled){
    //         return true
    //     }else {
    //         return false
    //     }
    // }

    render(){

        return (
            <TouchableWithoutFeedback
                disabled= {this.state.disabled} // {this.props.disabled} // 外部直接disabled时用 // {this.state.disabled}// 外部间接调用setState时用
                onPress={this.feedbackStyle.onPress}
            >
                {/* 如此设置后，LoginBtn的布局就会应用到此view上面 */}
                {/*<View ref={component => this._root = component} {...this.props} style={styles.button}>*/}

                <View backgroundColor={this.state.disabled ? 'red' : 'green'} style={[this.container, this.props.style]} >
                    <Text style={this.registBtnStyle}>{this.props.title}</Text>
                </View>

            </TouchableWithoutFeedback>

        );
    }


    // 2. 局部刷新(有时候我们需要直接改动组件并触发局部的刷新，但不使用state或是props。 setNativeProps 方法可以理解为web的直接修改dom。使用该方法修改 View 、 Text 等 RN自带的组件 ，则不会触发组件的 componentWillReceiveProps 、 shouldComponentUpdate 、componentWillUpdate 等组件生命周期中的方法。
    // )，不会造成 渲染组件结构和同步太多视图变化所带来大量的开销。但是只支持部分属性的设置


    // ----- private----
    /*在（不得不）频繁刷新而又遇到了性能瓶颈的时候。
     直接操作组件并不是应该经常使用的工具。一般来说只是用来创建连续的动画，同时避免渲染组件结构和同步太多视图变化所带来的大量开销。setNativeProps
     是一个“简单粗暴”的方法，它直接在底层（DOM、UIView等）而不是React组件中记录state，这样会使代码逻辑难以理清。所以在使用这个方法之前，请尽量先尝试用setState
     和shouldComponentUpdate方法来解决问题。*/
    // 2.
    setDisable = (bl) => {
        // 1. 会触发render
        this.setState({
            disabled: bl,
        });

    }

}

