/**
 * Created by jingnanzhang on 2017/5/31.
 */
import  React, {Component} from 'react';
import {
    Text,
    Button,
    View,
    StyleSheet,

}from 'react-native';

// import MineDetailPage from './MineDetail'
import MyReactView from '../nativeComponents/MyReactView'

export default class  Mine extends  Component{
    render(){

        const { navigate } = this.props.navigation;

        return (
            <View>

                <Button
                    title="跳转"
                    onPress={() =>
                        // this.btnAction
                        navigate('MineDetail', { name: '传给其他页面' })
                    }
                />

                {/*<MyReactView*/}
                    {/*ref={testNativeView => this.testNativeView = testNativeView}*/}
                       {/*style={styles.reactView}*/}
                {/*/>*/}

            </View>


        )
    }

    btnAction = () => {
        // this.testNativeView.doSomething('在js里调用ios原生控件的方法')

        this.testNativeView.doSomething(('RN->原生的数据'),(error,events) => {
            if (error) {
                console.warn(error);
            } else {
                alert(events)//返回的数据
            }
        });
    }


}

const  styles = StyleSheet.create({
   reactView:{
       // flex: 1,
       width: 100,
       height: 200,
       alignItems: 'center',
       justifyContent: 'center',
       // backgroundColor: 'red',
   },

});





