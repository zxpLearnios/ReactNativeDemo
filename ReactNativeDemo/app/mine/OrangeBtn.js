/**
 * Created by jingnanzhang on 2017/6/6.
 */

import  React, {
    PropTypes, Component} from 'react';

import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
    Text,

}from 'react-native';

export  default  class OrangeBtn extends  Component{

    static propTypes = {
        // title: PropTypes.string,
        // titleColor: PropTypes.string,
        // fontSize: PropTypes.number,
        // ...Text.props, // 则外部设置 OrangeBtn的color属性时，就相当于是设置了 OrangeBtn里面的Text的color

        textStyles: Text.propTypes.style, // 则外部设置 OrangeBtn的textStyles{{}}里面写字典形式，则自动设置给OrangeBtn里面的Text了
    };


    constructor(props){
        super(props);


    }

    // 字体的样式（字体颜色、大小）
    textStyle={
        color: this.props.color || 'orange', // 默认为橙色
        fontSize: this.props.fontSize || 14, //默认 14
    }


    render(){
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                {/* 如此设置后则，外部设置的OrangeBtn的布局就会应用到此view上面 */}
                <View style={[styles.container, this.props.style]}>
                    {/*外部使用实例： <OrangeButton title='Q易借服务协议'
                     textStyles={{
                     color: 'red',
                     fontSize: 20,
                     }}
                     onPress= {this.protocolClickAction}/>*/}
                    <Text style={[this.textStyle, this.props.textStyles]} >{this.props.title}</Text>
                </View>

            </TouchableWithoutFeedback>

        );
    }



}

const  styles = StyleSheet.create({


    container:{
        // flex:1, // 注释掉，即view会刚好包裹住里面的内容
        justifyContent: 'center',
        alignItems: 'center',

    },


});

