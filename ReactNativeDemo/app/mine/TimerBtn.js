/**
 * Created by jingnanzhang on 2017/6/6.
 */
// 验证码按钮


import  React, {Component} from 'react';

import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
    Dimensions,

}from 'react-native';



let defaultTitle ='获取验证码';
var isRunning = false; // 记录倒计时是否开始
let defaultTotalCount = 9;

/*
* 使用export default时，对应的import语句不需要使用大括号；不使用export default时，对应的import语句需要使用大括号
* */
export default class  TimerBtn extends  Component{

    // static propTypes = {
    // title:  PropTypes.string,
    // titleColor: PropTypes.string,
    // fontSize: PropTypes.number,
    // clickAction: PropTypes.func,
    //
    // textStyle: Text.propTypes.style, // 包含了title、 titleColor、fontSize
    // defaultBg: Text.propTypes.backgroundColor,
    // disableBg: Text.propTypes.backgroundColor;
    //     ...,
    // };


    textStyle = {
        color: 'orange',
        fontSize: 16 || this.props.fontSize, // 这样可以给属性默认值

    };

    // 必须写在非render（）里
    state={
        isStart: false,
        disabled: this.props.disabled || true, // 默认不可点击
        totalCount:  defaultTotalCount, // 默认总时数
    };

    // 新增state:  disabled
    constructor(props){
        super(props);

    }

    // 新增 prop:  disabled
    render(){

        const {titleColor} = this.props;

        return (
            <TouchableWithoutFeedback
                ref={feedback => this.feedback = feedback}
                disabled={this.state.disabled}
                onPress={this.props.onPress} // 必须外部点击了才会调用，故这里须将点击事件交给外部处理，内部保留数字递减事件即可。this.state.isStart? this.countDown: ()=>{alert('没有实现定时器的onPress')}
            >
                {/* 如此设置后，则外部设置的CaptureBtn布局就会应用到此view上面 */}
                <View  style={[styles.container, this.props.style]} >
                    <Text style={this.textStyle} >{isRunning? this.state.totalCount + 's': defaultTitle}</Text>
                </View>

            </TouchableWithoutFeedback>

        );

    }


    componentDidMount(){

    }

    componentWillUnmount(){
        isRunning = false;
        console.log(this.timer);
        this.timer && clearTimeout(this.timer);
    }

    // 1.外部设置，按钮是否可点击
    setDisable = (bl) => {

        this.setState({
            disabled: bl,
        });

    };

    // 2.外部调用
    setIsStart =(bl) => {

        if (bl){
            this.countDown();
        }

    }

    // 内部方法。 是否开始倒计时
    // 用countDown() 则得this.用countDown.bind(this),
    countDown = () => {


        // console.log(isRunning, this.state.totalCount);

        if (!isRunning) {


            // this.timer && clearTimeout(this.timer);

            this.timer = setInterval( () => {

                if(this.state.totalCount == 1){

                    isRunning = false;
                     clearTimeout(this.timer);

                    this.setState({
                        disabled: false,
                        totalCount: defaultTotalCount,
                    });
                }else{

                    isRunning = true;
                    let totalTime = this.state.totalCount;

                    this.setState({
                        disabled: true,
                        totalCount: totalTime - 1,
                    });
                }

            }, 1000);

        }else {
            return;
        }



    }


}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'flex-end',
    },


});
