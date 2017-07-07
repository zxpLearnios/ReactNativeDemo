/**
 * Created by jingnanzhang on 2017/5/31.
 */
import  React, {Component, } from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,

}from 'react-native';



import MyView from '../nativeComponents/MyView'

export default class  Mine extends  Component{



    render(){

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                <Button
                    title="跳转"
                    onPress={() =>
                        // this.btnAction
                        navigate('TestListView', { info: '由Mine传给其他页面' }) // TestListView   MineDetail
                    }
                />

                <MyView
                     style={styles.reactView}
                />

            </View>


        )
    }





}





const  styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    reactView:{
        width: 200,
        height: 200,
        // backgroundColor: 'red',
    },

});

