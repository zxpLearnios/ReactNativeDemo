/**
 * Created by jingnanzhang on 2017/6/8.
 */

// 常量，使用看Home LoginBtn

import {
    Dimensions,
    Platform,

}from 'react-native';


// 第一种方式: 但是外部可以修改这个值
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;


// 第二种方式
// const  Const ={
//
//      width: Dimensions.get('window').width,
//      height: Dimensions.get('window').height,
//
// };
//
// export  default  Const;







