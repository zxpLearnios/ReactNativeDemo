/**
 * Created by jingnanzhang on 2017/6/1.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Button,
    TouchableWithoutFeedback,


}from 'react-native';




import {Page, Decorator, AppDevice, Icon, Color} from "LocalReference";
import CMButton from '../../../libs/react-native-qk-button';
import TimeCountDownView from './Login/TimeCountDownView';
import EyeBtn from './Login/SecureTextEntryButton';

let font_size =  15;
let font_color = '#333333';
let font_orangeCl = '#FF5A00';
let protocolColor = '#999999';
let margin = 10; // 输入框居左
let leftTextWidth = 50; // '手机号' 文字的宽度
let top = 20; // 三个输入框top间距
let topViewH = 210 - 2*top;


export default  class Regist extends  Page{


    // 本类里所有的常量
    constGlobal={
        phoneHint: '请输入手机号码',
        verCodeHint: '请输入验证码',
        pwdHint: '密码须含有数字和字母，6-20位',
    }

    keyboardState = {
        behavior: 'position', //  padding height  position
        modalOpen: false,
        keyboardVerticalOffset: 64,
        // keyboardShouldPersistTaps: 'handle', // 已无此属性了
    }


    phoneInputState = {
        // multiline: true, // 设置可以输入多行文字
        // textAlign: 'end', // 设置文本横向布局方式
        keyboardType: 'numeric', // 键盘类型
        maxLength: 11, // 最大输入长度
        clearButtonMode: 'while-editing', //  清除按钮出现的时机
        underlineColorAndroid: 'transparent' // 在安卓上的下划线颜色
        // enablesReturnKeyAutomatically: true, // 如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。
        // returnKeyType：'', // 决定返回键的样式
    }

    pwdInputState={
        maxLength: 20,
        clearButtonMode: 'while-editing',
    }

    // 数据
    data = {
        phone: '',
        verCode: '',
        pwd: '',
    }

    constructor(props) { // 初始化组件
        super(props);


        this.state={
            visiablePwd: false,
            verCodeBtnDisable: true,
            registBtnDisable: true,
        }
    }

    render (){
        return this.setSubviews();
    }

    componentDidMount(){

    }

    componentWillUnmount() {
        this.dismissKeyboardClick();
    }


    setSubviews = () => {
        return (
            <View style={styles.mainContainer}>

                <ScrollView
                    // keyboardDismissMode='on-drag'
                >
                    <View style={styles.contentView}>
                        <TouchableOpacity activeOpacity={1.0} onPress={this.dismissKeyboardClick.bind(this)} />


                        <KeyboardAvoidingView
                            // behavior = {this.keyboardState.behavior}
                            // keyboardVerticalOffset = {this.keyboardState.keyboardVerticalOffset}
                            >

                            {/*头部*/}
                            <View style={styles.topView}>


                                {/*手机号*/}
                                <View style={styles.phoneView}>
                                    <Text  style={styles.phoneText} >手机号</Text>

                                    <TextInput
                                        placeholder={this.constGlobal.phoneHint}
                                        keyboardType={this.phoneInputState.keyboardType}
                                        maxLength={this.phoneInputState.maxLength}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        underlineColorAndroid={this.phoneInputState.underlineColorAndroid}
                                        style={styles.phoneInput}
                                        onChangeText={phone => this.handlePhoneFieldChange(phone)}
                                    />


                                </View>

                                {/*验证码*/}
                                <View style={styles.verCodeView}>
                                    <Text title="验证码" style={styles.verCodeText}>验证码</Text>
                                    <TextInput
                                        placeholder={this.constGlobal.verCodeHint}
                                        keyboardType={this.phoneInputState.keyboardType}
                                        underlineColorAndroid={this.phoneInputState.underlineColorAndroid}
                                        maxLength={6}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        style={styles.verCodeInput}
                                        onChangeText={verCode => this.handleVerCodeFieldChange(verCode)}
                                    />
                                    <TimeCountDownView  textFont={font_size} style={styles.verCodeBtn}
                                        ref={verCodeBtn => this.verCodeBtn = verCodeBtn}
                                                       startName="获取验证码"
                                                       againName="重新获取"
                                                       textColor='#FF5A00'
                                                       timeCount={59}
                                                       timeDownCallBack={this.verCodeBtnAction}

                                    />

                                </View>

                                {/*密码*/}
                                <View style={styles.pwdView}>
                                    <Text text="密码" style={styles.pwdText}>密码</Text>
                                    <TextInput
                                        ref={pwdInput => this.pwdInput = pwdInput}
                                        placeholder={this.constGlobal.pwdHint}
                                        underlineColorAndroid={this.phoneInputState.underlineColorAndroid}
                                        keyboardType={this.pwdInputState.keyboardType}
                                        maxLength={this.pwdInputState.maxLength}
                                        secureTextEntry={!this.state.visiablePwd}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        style={styles.pwdInput}
                                        onChangeText={pwd => this.handlePwdFieldChange(pwd)}
                                    />



                                    <EyeBtn   clickCallBack={this.eyeBtnAction}>

                                    </EyeBtn>


                                </View>



                            </View>

                            {/* 注册*/}
                            <View style={styles.centeView}>

                                <CMButton text={'立即注册'} disabled={this.state.registBtnDisable} buttonStyle={{
                                    height: 50,
                                    width: AppDevice.screenWidth() - 80,
                                    borderRadius: 25,
                                    alignSelf: 'center',
                                    backgroundColor: this.state.registBtnDisable ? Color.colorD8D8D8 : Color.colorFF5A00,
                                }}
                                          textSytle={
                                              {
                                                  fontSize:20,
                                                  color: 'white',
                                              }
                                          }
                                touchCallBack={this.registAction.bind(this)}
                                    >

                                </CMButton>

                                <View style={styles.protocolView}>
                                    <Text style={styles.protocolText}>注册即代表同意《</Text>

                                    <CMButton text={'Q易借服务协议'} disabled={false}
                                              textSytle={
                                                  {
                                                      fontSize:14,
                                                      color: font_orangeCl,
                                                  }
                                              }
                                              touchCallBack={this.protocolClickAction.bind(this)}
                                        >

                                    </CMButton>

                                    <Text style={styles.protocolText}>》</Text>
                                </View>

                            </View>

                            {/*底部*/}
                            <View style={styles.bottomView}>
                                <Text style={styles.haveAccountText}>已有账号？</Text>


                                <CMButton text={'直接登录'} disabled={false}
                                          textSytle={
                                              {
                                                  fontSize:14,
                                                  color: font_orangeCl,
                                              }
                                          }
                                          touchCallBack={this.loginAction.bind(this)}
                                >


                                </CMButton>

                            </View>


                        </KeyboardAvoidingView>

                    </View>



                </ScrollView>


            </View>

        );

    };

    // 必须将textInput放入scroller里，然后加点击空白处的事件，不实现方法即可实现点击空白处退键盘
    dismissKeyboardClick(){

    }


    handlePhoneFieldChange (phone){
        this.data.phone = phone;

        // 手机号不为空时，才可以点击验证码按钮
        if (this.data.phone.length != 0){
            this.verCodeBtn.updateCodeLength(true);
        }else {
            this.verCodeBtn.updateCodeLength(false);
        }

        this.updateRegisteBtnState();
    }

    handleVerCodeFieldChange(verCode){
        this.data.verCode = verCode;
        this.updateRegisteBtnState();
    }

    handlePwdFieldChange(pwd){
        this.data.pwd = pwd;


        this.updateRegisteBtnState();

    }

    // 等价于  updateRegisteBtnState = () = {}
    updateRegisteBtnState = function () {

        if (this.data.phone.length != 0 && this.data.verCode.length != 0 && this.data.pwd.length != 0){

            this.setState({
                registBtnDisable: false,
            })
        }
        else {
            this.setState({
                registBtnDisable: true,
            })
        }

    };

    eyeBtnAction = () => {
        this.setState({
            visiablePwd: !this.state.visiablePwd,
        })
    };

    verCodeBtnAction = () => {
        alert('手机号是：' +this.data.phone);
    }

    registAction(){
        alert('手机号是：' +this.data.phone + '  验证码是：' + this.data.verCode + '  密码是：'+ this.data.pwd);
    }

    loginAction(){
        this.push({screen: "account.Login"});
    }

    protocolClickAction = () => {
        alert('协议');

    }


}


const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        backgroundColor: 'white',
    },

    contentView:{
        flex: 1,
        justifyContent: 'space-between',
    },

    topView: {
        height: topViewH,
        alignItems: 'center', //  子view在次轴的布局
        margin: 20,
        marginTop: 50,
    },

    phoneView:{
        flex: 1,
        // backgroundColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: Color.colorE5E5E5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    verCodeView:{
        flex: 1,
        marginTop: top,
        borderBottomWidth: 1,
        borderBottomColor: Color.colorE5E5E5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    pwdView:{
        flex: 1,
        marginTop: top,
        borderBottomWidth: 1,
        borderBottomColor: Color.colorE5E5E5,
        flexDirection: 'row',
        alignItems: 'center',
    },


    phoneText:{
        color: font_color,
        fontSize: font_size,
        width: leftTextWidth,
    },

    verCodeText:{
        color: font_color,
        fontSize: font_size,
        width: leftTextWidth,
    },

    pwdText:{
        color: font_color,
        fontSize: font_size,
        width: leftTextWidth,
    },

    phoneInput:{
        flex: 1,
        color: font_color,
        fontSize: font_size,
        marginLeft: margin,
        // textAlign: 'center',
    },

    verCodeInput:{
        flex: 1,
        color: font_color,
        fontSize: font_size,
        marginLeft: margin,

    },

    pwdInput:{
        flex: 1,
        color: font_color,
        fontSize: font_size,
        marginLeft: margin,
    },

    verCodeBtn:{
        width: 90,
        height: 40,
    },

    // ------   注册 因为topview的margin=20 ----//
    centeView:{
        top: 20,
        height: 70,
        justifyContent: 'center',
    },

    regisBtn:{
        fontSize: 20,
        color: 'orange',
    },

    protocolView:{
        height: 20,
        top: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    protocolText:{
        color: protocolColor,
        fontSize: 14,
        alignSelf: 'center',
    },

    // 底部
    bottomView:{
        height: 20,
        marginTop: Cons * (150/667),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    haveAccountText:{
        color: protocolColor,
        fontSize: 14,
    },

});


