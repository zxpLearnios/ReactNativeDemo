/**
 * Created by jingnanzhang on 2017/6/8.
 */

// 常量，使用看Home LoginBtn

import {
    Dimensions,
    Platform,
}from 'react-native';

import {
    NavigationActions
} from 'react-navigation'

const backAction = NavigationActions.back({
    key: 'Profile'
});



// 第一种方式: 但是外部可以修改这个值
const  kwidth = Dimensions.get('window').width;
const kheight = Dimensions.get('window').height; // export
const saveUserkey = 'saveUserkey=key'; // 不能使用'_'
const delay = time => new Promise(resolve => setTimeout(resolve, time))

let modeType = 'card';
export {kwidth as width, kheight as height, saveUserkey, delay, modeType}; // 可以使用as來重命名

/*
*  resetAction 出栈
*  重新设置主页
* **/
export const resetMainPageAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'TabPage'}) // AppTab  TabPage
    ]
});


// 第二种方式
// const  Const ={
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
// };



// function delay(timeout) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, timeout);
//     });
// }





