/**
 * Created by jingnanzhang on 2017/7/20.
 */
// navbar的item,

import React, {Component, }from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
}from 'react-native';
import {
    string,
    func,
}from 'prop-types'

export default class NavBarItem extends Component{

    container = {
        flex: 1, // ios里navItem的高度本来就=44，左边item距左10---15，可知右边
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginLeft: 10,
        marginRight: 10,
        // maxWidth: 30, // 最大宽度
    };

    sub = {
        color: this.props.color || null,
        fontSize: this.props.fontSize || 16,
    };

    static propTypes={
        type: string, // 'btn', 'img'
        title: string,
        img: string,
        onPress: func,
    };

    render(){
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.props.onPress}
            >

                <View style={[this.container, this.props.style]} >
                    {
                        (this.props.type === 'btn')? (<Text style={this.sub}>{this.props.title || '未设置'}</Text>) :
                            (<Image source={this.props.img} style={this.sub}/>)
                    }

                </View>

            </TouchableOpacity>
        )

    }




}

