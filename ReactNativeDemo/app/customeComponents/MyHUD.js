/**
 * Created by jingnanzhang on 2017/6/9.
 */
// 弹框  rgb设置背景色 alpha
// RN 的组件除了 Text，其他组件默认是不支持点击事件，也不能响应基本触摸事件，故提供以下组件：TouchableHighlight , TouchableNativeFeedback , TouchableOpacity 和 TouchableWithoutFeedback
// Modal使用时，必须在内部价格view作为contentView
import  React, {Component} from 'react';

import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,
    Modal,

}from 'react-native';


let margin = 15;
let btnFontSize = 18;
let btnViewH = 50;

// Const的第一种方式
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法
// // Const的第二种方式
// import  Const from '../const/Const'

export  default  class MyHUD extends  Component{

    // static propTypes = {
    //     // title: PropTypes.string,
    //     // titleColor: PropTypes.string,
    //     // fontSize: PropTypes.number,
    //     // ...Text.props, // 则外部设置 OrangeBtn的color属性时，就相当于是设置了 OrangeBtn里面的Text的color
    //
    //     textStyles: Text.propTypes.style, // 则外部设置 OrangeBtn的textStyles{{}}里面写字典形式，则自动设置给OrangeBtn里面的Text了
    // };


    constructor(props){
        super(props);

        this.state={
            visiable: false,
        }
    }

    modalStyle={

    }

    // 字体的样式（字体颜色、大小）
    textStyle={
        backgroundColor: 'gray',
        textAlign: 'center',
        color: this.props.color || 'orange', // 默认为橙色
        fontSize: this.props.fontSize || 20, //默认 14
        // numberOfLines: 0,
        margin: margin, // 之后则父view的尺寸即可确定，父view无须设置flex，设置宽或高即可
    }


    render(){
        return (
            <Modal
                animationType={"fade"} //none slide fade
                transparent={true} // 必须，才可以实现覆盖
                visible={this.state.visiable} >

                <TouchableWithoutFeedback onPress={this.dismiss}>
                    {/* 如此设置后则，外部设置的OrangeBtn的布局就会应用到此view上面 */}
                    <View
                        ref={container => this.container = container}
                        style={[styles.container, this.props.style]}>

                        <View
                            onStartShouldSetResponder={this.onStartShouldSetResponder}
                            style={styles.contentView}>

                            {/*提示文字*/}
                            <Text  style={[this.textStyle, this.props.textStyles]} >{ this.props.text}</Text>



                            {/*水平分割线*/}
                            <View  style={styles.horizontalSep}/>

                            {/*底部*/}
                            <View style={styles.bottomView}>

                                {/*按钮view*/}
                                <View style={styles.btnContainer}>


                                    {/*确定按钮*/}
                                    <TouchableWithoutFeedback onPress={this.sureAction}>
                                        <View  style={styles.sureView}>
                                            <Text
                                                style={styles.sureText}>确定</Text>
                                        </View>
                                    </TouchableWithoutFeedback>


                                    {/*取消按钮*/}
                                    <TouchableWithoutFeedback onPress={this.cancleAction}>
                                        <View style={styles.cancleView}>
                                            <Text
                                                style={styles.cancleText}>取消</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                </View>

                            </View>

                            {/*竖直分割线*/}
                            <View  style={styles.verticalSep}/>


                        </View>




                    </View>



                </TouchableWithoutFeedback>

            </Modal>


        );
    }

    sureAction() {

        alert('确定');
    }


    cancleAction(){
        alert('quxiao');

    }

    // 是否处理事件, 不会影响内部按钮对点击事件的接受。即点击container时，不会dismiss
    onStartShouldSetResponder = () => {
        return true;
    }

    /*
    * identifier ：触摸的 ID，一般对应手指，在多点触控的时候，用来区分是哪个手指的触摸事件；
     locationX 和 locationY ：触摸点相对组件的位置；
     pageX 和 pageY ：触摸点相对于屏幕的位置；
     timestamp ：当前触摸的事件的时间戳，可以用来进行滑动计算；
     target ：接收当前触摸事件的组件 ID；
     changedTouches ：evt 数组，从上次回调上报的触摸事件，到这次上报之间的所有事件数组。因为用户触摸过程中，会产生大量事件，有时候可能没有及时上报，系统用这种方式批量上报；
     touches ：evt 数组，多点触摸的时候，包含当前所有触摸点的事件。
    * */
    dismiss = (e) => {

        console.log(e.nativeEvent);
        if (e.nativeEvent.target == this.container){
            console.log('点击到了内容view');
        }

        this.setState({
            visiable: false,
        })
    }

    open = () => {
        this.setState({
            visiable: true,
        })
    }

}


// 一般情况下，对于Text最后用view来包装以便设置其布局，因为Text的textAlign属性并不好用
const  styles = StyleSheet.create({


    // ------  大view--------//
    container:{
        flex:1, // 注释掉，即view会刚好包裹住里面的内容
        // opacity: 0.8, // 则里面的所有字view均会受影响
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(38, 38, 38, 0.7)', // 此法里面的view不会受透明度的影响

    },

    contentView:{
        width:  conster.width * 0.8,
        borderRadius: 15,
        alignItems: 'center', // 填充
        justifyContent: 'center',
        backgroundColor: 'white',
    },


    bottomView:{
        height: btnViewH,
        alignSelf: 'stretch', // 水平填充
        justifyContent: 'center',
    },


    // ------  分割线--------//
    horizontalSep:{
        backgroundColor: 'red',
        height: 1,
        alignSelf: 'stretch', // 填充
    },

    verticalSep:{
        backgroundColor: 'red',
        width: 1,
        height: btnViewH,
        marginTop: -btnViewH, // 顶部距bottom的距离
        alignSelf: 'center',
    },

    // ------  底部--------//
    btnContainer:{
        height: btnViewH,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

    sureView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cancleView:{
        flex: 1,
        alignItems: 'center', // stretch
        justifyContent: 'center',
    },

    sureText:{
        fontSize: btnFontSize,
        color: '#383838',
    },

    cancleText:{
        fontSize: btnFontSize,
        color: '#102589',
    },


});