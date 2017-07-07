/**
 * Created by jingnanzhang on 2017/7/7.
 */
// goBack: () => { this.props.navigation.dispatch({ type: 'BACK', key: 'Home', params: {forwardTo: "Some page"} }); }

// componentWillReceiveProps(nextProps) { let {forwardTo} = nextProps.navigation.state.params; if(forwardTo) { this.props.navigation.navigate(forwardTo); } }


import  React, {Component, } from 'react';
import {
    Button,
    View,
    StyleSheet,
    AppRegistry,

}from 'react-native';


import CustomeNavigationBar from '../customeComponents/NavigationBar'

// Const的第一种方式  导入constant
import  * as conster from  '../const/Const' // 导出Const.js里所有的变量和方法


export default class Login extends Component{

    static navigationOptions = {
        headerTitle: '登录页',
        headerTintColor: '#993311',

        // headerLeft: 可以是Text Button等
    };

    render(){
        return (
            <View
                style={styles.container}>
                <Button
                    title="進入首頁"
                    onPress={this.loadHomePage.bind(this)}
                />

            </View>
        )
    }

    // 使用resetAction，出栈
    loadHomePage(){
        this.props.navigation.dispatch(conster.resetAction)
    }

}

// const previousGetActionForPathAndParams = AppNavigator.router.getActionForPathAndParams;
//
//
// Object.assign(AppNavigator.router, {
//     getActionForPathAndParams(path, params) {
//         if (
//             path === 'my/custom/path' &&
//             params.magic === 'yes'
//         ) {
//             // returns a profile navigate action for /my/custom/path?magic=yes
//             return NavigationActions.navigate({
//                 routeName: 'Profile',
//                 action: NavigationActions.navigate({
//                     // This child action will get passed to the child router
//                     // ProfileScreen.router.getStateForAction to get the child
//                     // navigation state.
//                     routeName: 'Friends',
//                 }),
//             });
//         }
//         return previousGetActionForPathAndParams(path, params);
//     }
// }

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})






