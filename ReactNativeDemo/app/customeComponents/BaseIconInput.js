/**
 * Created by jingnanzhang on 2017/7/17.
 */
// 左边有icon的输入框
import React,{PropTypes, Component, } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,

} from 'react-native';

import {Icon, Color, } from "LocalReference";
import TimerBtn from './CaptureBtn'

let text = '';
let isFor_Other = false;
let icons = ['icon-xingming', 'icon-shenfenzheng', 'icon-shouji1', 'icon-iconfontbianji1', 'icon-iconsuo', 'icon-iconsuo'];

export default class BaseIconInput extends Component {


    static propTypes={
        isForOther: PropTypes.bool, // 是：黑色，否：白色
        tag: PropTypes.number, // 用于设置图标
        type: PropTypes.string, // 'pwd', 'id' 'verCode', 'phone', 'default', 'regist-phone'(有验证码按钮，11),other-phone(有验证码按钮，6位)
        hint: PropTypes.string, // placeholder
        onChange: PropTypes.func, // 外部调用，并传入text
        onClickVerCodeBtn: PropTypes.func, // 点击验证码按钮
    };

    verCode={
        marginLeft: 15,
        width: 80,
        color: this.props.isForOther? null: 'white',
    }

    render(){
        const {type, hint, isForOther, onChange, onClickVerCodeBtn} = this.props;
        isFor_Other = isForOther;
        return (
            <View style ={[styles.container, this.props.style]}>

                {/*icon*/}
                <Icon size={(this.props.tag === 3)? 14: 20} name={icons[this.props.tag]} color={(!isForOther? 'white': null)} style={styles.icon}/>

                <View style={styles.leftSep}/>

                <TextInput
                    fontSize={14}
                    placeholderTextColor={(isForOther? null: 'white')}
                    color ={(isForOther? null: 'white')}
                    placeholder={hint}
                    secureTextEntry={type === 'pwd'}
                    keyboardType={(type === 'pwd' || type === 'default')? 'default': 'numeric'}
                    underlineColorAndroid={'transparent'}
                    maxLength={this._getMaxLength()}
                    clearButtonMode={'while-editing'}
                    style={styles.input}
                    onChangeText={(t) => {
                        text = t;
                        onChange&&onChange(t);
                    }}
                />

                 {/*右边分割线*/}
                {
                    (type === 'regist-phone' || type === 'other-phone') ? <View style={styles.rightSep}/> : <Text/>

                }

                {/*验证码输入框*/}
                {/*点击TouchableOpacity，向外传值的方式*/}
                {

                    (type === 'regist-phone') ?
                        <TimerBtn  ref={timer => this.timer = timer}
                                   color='white'
                                   onPress={() => {this.timer.setStart()}} // {onClickVerCodeBtn && onClickVerCodeBtn(text)}
                                   style={this.verCode}
                        />: null
                    // (type === 'regist-phone') ?
                    //     (<TouchableOpacity
                    //         onPress={() => {onClickVerCodeBtn && onClickVerCodeBtn(text)}}
                    //     >
                    //         <Text  style={this.verCode}>发送验证码</Text>
                    //     </TouchableOpacity>) :  <Text/>

                }

                {
                    (type === 'other-phone') ?
                        <TimerBtn  ref={timer => this.timer = timer}
                                   onPress={() => {this.timer.setStart()}} // {onClickVerCodeBtn && onClickVerCodeBtn(text)}
                                   style={this.verCode}
                        />: null
                        // (<TouchableOpacity
                        //     onPress={() => {onClickVerCodeBtn && onClickVerCodeBtn(text)}}
                        // >
                        //     <Text style={this.verCode}>发送验证码</Text>
                        // </TouchableOpacity>) :  <Text/>
                }


            </View>)
    }


    _getMaxLength(){
        if (this.props.type === 'pwd'){
            return 20;
        }else if (this.props.type === 'id'){
            return 18;
        }else if (this.props.type === 'phone' || this.props.type ==='regist-phone'){
            return 11;
        }else if (this.props.type === 'verCode' || this.props.type === 'other-phone'){
            return 6;
        }else {
            return 20;
        }
    }

}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius:3,
        backgroundColor: 'rgba(221, 221, 221, 0.2)',
    },

    icon:{
        marginLeft: 15,
        // backgroundColor:'red',
    },

    leftSep:{
        marginLeft: 15,
        height: 40,
        width:1,
        backgroundColor: 'rgba(153, 153, 153, 0.2)',
    },

    input:{
        flex:1,
        marginLeft: 15,
    },

    rightSep:{
        marginLeft: 0,
        height: 40,
        width:1,
        backgroundColor: 'rgba(153, 153, 153, 0.2)',
    },


});


