/**
 * Created by jingnanzhang on 2017/7/7.
 */
// 将控制器加入 导航栈

import {
    AppRegistry,
}from 'react-native';

import {Navigation} from 'react-navigation';
export default function (pageName) {
    return function (target) {

        AppRegistry.registerComponent() //registerComponent(pageName, ()=>target);
    }
}

