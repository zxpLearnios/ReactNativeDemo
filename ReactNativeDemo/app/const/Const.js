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
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

// resetAction 出栈
export const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'TabPage'}) // AppTab  TabPage
    ]
});


// 第二种方式
// const  Const ={
//
//      width: Dimensions.get('window').width,
//      height: Dimensions.get('window').height,
//
// };
//
// export  default  Const;







