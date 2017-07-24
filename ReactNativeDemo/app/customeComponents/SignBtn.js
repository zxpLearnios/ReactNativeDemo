/**
 * Created by jingnanzhang on 2017/7/18.
 */
// 签到签退按钮 modal使用时，必须用view作为其contentView类似于scroller，使用Button时必须设置title

import  React, {Component, } from 'react';

import {
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity,
}from 'react-native';


let outbgImg = require('../../../content/img/sign/signOut_bg.png');
let inbgImg = require('../../../content/img/sign/signIn_bg.png');
let closeImg = require('../../../content/img/userInfo_logout.png');


export  default class  SignBtn extends  Component{

    main={
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }

    container = {
        width: 230,
        height: 170,
    };

    closeImg={
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
    }

    closeBtn = {
        width: 20,
        height: 20,
        marginTop: -20,
        alignSelf: 'flex-end',
    }

    signOutBtn={
        width: 70,
        height: 30,
        marginTop: 115,
        alignSelf: 'center',
    }

    // type : 'signIn', 'signOut'
    constructor(props){
        super(props);

        this.state={
            visiable: false,
        }
    }

    // modal的内部必须有个contentView
    render(){

        return (

            <Modal
                animationType={"fade"} //none slide fade
                transparent={true} // 必须，才可以实现覆盖
                visible={this.state.visiable}
            >

                <View style ={this.main}>

                    <Image source={(this.props.type === 'signIn')? inbgImg: outbgImg} style={[this.container, this.props.style]} >
                        {/*close*/}
                        <View>
                            <Image style={this.closeImg} source={(this.props.type === 'signOut')? closeImg: null}/>
                            {
                                (this.props.type === 'signOut')? (<TouchableOpacity onPress={this.dismiss} style ={this.closeBtn} />) : <TouchableOpacity/>
                            }
                        </View>

                        {/*sign*/}
                        <TouchableOpacity onPress={() => alert(this.props.type)} style ={this.signOutBtn} />

                    </Image>
                </View>

            </Modal>


        );
    }


    dismiss = (e) => {

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


