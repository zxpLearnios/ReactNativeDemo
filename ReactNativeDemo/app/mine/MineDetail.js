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
    Alert,
    TouchableWithoutFeedback,


}from 'react-native';




let font_size =  16;
let font_color = '#333333';
let margin = 15; // 输入框居左
let subViewH = 40;
let leftTextWidth = 50; // '手机号' 文字的宽度
let top = 20; // 三个输入框top间距
let topViewH = 210 - 2*top;


import  OrangeButton from  './OrangeBtn'
import  LoginBtn from  './LoginBtn'
import TimerBtn from  './TimerBtn'
import EyeBtn from  './EyeBtn'
import  Hud from  './MyHUD'


import  * as conster from  '../const/Const'

export default  class MineDetail extends  Component{


    // 本类里所有的常量
    constGlobal={
        phoneHint: '请输入手机号码',
        verCodeHint: '请输入验证码',
        pwdHint: '密码须含有数字和字母，6-20位',
    }

    static constGlobal1=function () {
        return MineDetail.prototype.props.constGlobal;
    }


    keyboardState = {
        behavior: 'position', //  padding height  position
        modalOpen: false,
        // keyboardVerticalOffset: 64,
        underlineColorAndroid: 'transparent',
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
        // keyboardType: '',
        maxLength: 20,
        clearButtonMode: 'while-editing', //  清除按钮出现的时机
    }

    // 数据
    data = {

        phone: '',
        verCode: '',
        pwd: '',
    }

    constructor(props) { // 初始化组件
        super(props);

        this.state = {
            // phone: '',
            // verCode: '',
            // pwd: '',
        }


    }

    render (){
        return this.setSubviews();
    }

    //绝对不要在componentWillUpdate和componentDidUpdate中调用this.setState方法，否则将导致无限循环调用。
    componentDidMount(){ // render之后调用,在组件渲染完成后调用一次.

    }

    componentWillUnmount() { //销毁时调用,通常做一些取消绑定
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
                                        placeholder='请输入手机号'
                                        keyboardType={this.phoneInputState.keyboardType}
                                        underlineColorAndroid={this.phoneInputState.underlineColorAndroid}
                                        maxLength={this.phoneInputState.maxLength}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        style={styles.phoneInput}
                                        onChangeText={phone => this.handlePhoneFieldChange(phone)}
                                    />

                                    <TimerBtn  ref={timer => this.timer = timer} style={styles.timerBtn}>

                                    </TimerBtn>

                                </View>

                                {/*验证码*/}
                                <View style={styles.verCodeView}>
                                    <Text title="验证码" style={styles.verCodeText}>验证码</Text>
                                    <TextInput
                                        placeholder={this.constGlobal.verCodeHint}
                                        keyboardType={this.phoneInputState.keyboardType}
                                        maxLength={6}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        style={styles.verCodeInput}
                                        onChangeText={verCode => this.handleVerCodeFieldChange(verCode)}
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
                                        // secureTextEntry={this.state.visiablePwd}
                                        clearButtonMode={this.phoneInputState.clearButtonMode}
                                        style={styles.pwdInput}
                                        onChangeText={pwd => this.handlePwdFieldChange(pwd)}
                                    />

                                    <EyeBtn ref={eyeBtn => this.eyeBtn = eyeBtn} cliclkCallBack={this.eyeBtnAction.bind(this)}>

                                    </EyeBtn>

                                </View>



                            </View>

                            {/* 注册*/}
                            <View style={styles.centeView}>

                               <LoginBtn
                                    ref={loginBtn => this.loginBtn = loginBtn}
                                    title="立即注册"
                                    onPress={this.registAction.bind(this)}>

                                </LoginBtn>


                                <View style={styles.protocolView}>
                                    <Text style={styles.protocolText}>注册即代表同意《</Text>


                                    <OrangeButton title='Q易借服务协议'
                                                  onPress= {this.protocolClickAction}/>

                                    <Text style={styles.protocolText}>》</Text>
                                </View>

                            </View>

                            {/*底部*/}
                            <View style={styles.bottomView}>
                                <Text style={styles.haveAccountText}>已有账号？</Text>

                                <OrangeButton title='直接登录'
                                              onPress= {this.loginAction} >

                                </OrangeButton>

                            </View>


                        </KeyboardAvoidingView>

                    </View>



                </ScrollView>


                {/*根布局中添加弹出框层*/}
                {this.renderHUD()}

            </View>




        );

    };

    renderHUD(){
        return (
            <Hud ref={hud => this.hud = hud} text="这是提示内容，这是提示内容这这是提示-------内容这是提示内容">
            </Hud>
        );

    }

    // 必须将textInput放入scroller里，然后加点击空白处的事件，不实现方法即可实现点击空白处退键盘
    dismissKeyboardClick(){

    }


    handlePhoneFieldChange (phone){
        this.data.phone = phone;

        // 手机号不为空时，才可以点击验证码按钮
        if (this.data.phone.length != 0){
            this.timer.setDisable(false);
        }else {
            this.timer.setDisable(true);
        }

        this.updateRegisteBtnState();
    }

    handleVerCodeFieldChange(verCode){
        this.data.verCode = verCode;
        this.updateRegisteBtnState();
    }

    handlePwdFieldChange(pwd){
        this.data.pwd = pwd;

        if (this.data.pwd.length != 0){
            this.eyeBtn.setDisable(false);
        }else {
            this.eyeBtn.setDisable(true);
        }

        this.updateRegisteBtnState();

    }

    // 等价于  updateRegisteBtnState = () = {}
    updateRegisteBtnState = function () {

        if (this.data.phone.length != 0 && this.data.verCode.length != 0 && this.data.pwd.length != 0){


            // 1. 不会触发render，使有动画时的效果更好
            // this.loginBtn.setNativeProps({
            //     style: {disabled: false},
            // })

            // 2. 调用loginBtn的setState方法，会触发render
            this.loginBtn.setDisable(false);
        }else {
            // this.loginBtn.setNativeProps({
            //     style: {disabled: true},
            // })

            this.loginBtn.setDisable(true);
        }

    };

    eyeBtnAction = () => {



    };


    registAction(){
        alert('手机号是：' +this.data.phone + '  验证码是：' + this.data.verCode + '  密码是：'+ this.data.pwd);
    }

    loginAction(){
        alert('登录');
    }

    protocolClickAction = () => {
        // alert('协议');

        // alert('点击了eyebtn');

        // Alert.alert(
        //     '标题',
        //     '子标题',
        //     [
        //         {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //         {text: '确定', onPress: () => console.log('OK Pressed') , style: 'ok'},
        //     ],
        //
        //     // { cancelable: false }
        // )

        // this.hud.open();

        // 测试定时器按钮，这样可以的话，则说明网络请求成功后，外部即可使其开始了
        this.timer.startAction();

        // for (item in this.refs) {
        //     if (item.typeName == 'TextInpuit'){
        //
        //         let textInput = item;
        //         if (textInput.isFocused()){
        //
        //         }else {
        //
        //         }
        //
        //     }else {
        //         continue;
        //     }
        // }

    }


}

// 只需改变mainView的高度即可改变3个view的高度. 最后使用marginTop不用top
const styles = StyleSheet.create({

    mainContainer:{
        flex:1, // flex 即自己在父view的主轴方向上的伸缩系数, 若已经设置了高度则宽度可以不设置（会自动占满其余部分）
        backgroundColor: 'white',
    },

    contentView:{
        flex: 1,
        justifyContent: 'space-between',
    },

    topView: {

        height: topViewH,
        // backgroundColor: '#544399',

        // flexDirection: 'column', // row column 决定布局的主轴(默认为竖直轴)
        // justifyContent: 'space-around', // 子view在主轴的布局
        alignItems: 'center', //  子view在次轴的布局
        margin: 20,
        marginTop: 100,
    },



    keyBoardView:{
        flex: 1,
    },


    timerBtn:{
        marginLeft: 10,
        marginRight: 0,
    },

    phoneView:{
        flex: 1,
        // backgroundColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        // justifyContent: 'center', // 子view在主轴的布局
        // alignSelf: 'center', // 决定自己在父view的次轴方向的布局 alignSelf属性相当于将父容器的alignItems属性进行了覆盖。
    },

    verCodeView:{
        flex: 1,
        marginTop: top,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
    },

    pwdView:{
        flex: 1,
        marginTop: top,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
    },


    phoneText:{

        // backgroundColor: 'gray',
        // color: font_color,
        fontSize: font_size,
        alignSelf: 'center',
        width: leftTextWidth,
    },

    verCodeText:{
        fontSize: font_size,
        alignSelf: 'center',
        width: leftTextWidth,
    },

    pwdText:{
        fontSize: font_size,
        alignSelf: 'center',
        width: leftTextWidth,
    },

    phoneInput:{
        flex: 1,
        height: 20,
        // backgroundColor: 'gray',
        fontSize: font_size,
        marginLeft: margin,
        alignSelf: 'center',
    },

    verCodeInput:{
        flex: 1,

        height: 20,
        fontSize: font_size,
        marginLeft: margin,
        alignSelf: 'center',

    },

    pwdInput:{
        flex: 1,  // flex 即自己在父view的主轴方向上的伸缩系数, 若已经设置了高度则宽度可以不设置（会自动占满其余部分）
        // backgroundColor: 'red',
        height: 20,
        fontSize: font_size,
        marginLeft: margin,
        alignSelf: 'center',
    },

    // ------   注册 因为topview的margin=20 ----//
    centeView:{
        // backgroundColor: 'orange',
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
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    protocolText:{
        fontSize: 14,
        alignSelf: 'center',
    },

    // 底部
    bottomView:{
        // backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: conster.height * (150/667),
        height: 20,
    },

    haveAccountText:{
        fontSize: 14,
    },

});

