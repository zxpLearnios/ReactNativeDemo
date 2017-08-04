//
// function decorator(type) {
//     if (type != "modal" && type != "screen") {
//         throw (type);
//     }
// }
// decorator.type = {
//     modal: "modal",
//     screen: "screen",
// };
//
// global.PAGE = decorator;
// export default decorator;

import React,{Component} from 'react';
import {StackNavigator,} from 'react-navigation';

export default class Page extends Component{

    push(page){
        let AppNavigator = StackNavigator({

            // 登录的导航栏在LoginPage设置
            page: {
                screen: page,
                // navigationOptions:  CustomeNavigationBar('wetft'), // 测试自定义的导航栏
            }
        },{
                mode: 'modal',
        });

        this.props.navigation(page)
    }

}
