/**
 * Created by jingnanzhang on 2017/6/20.
 */

import  React, {Component, PropTypes,} from  'react'
import {
    requireNativeComponent,
}from 'react-native';



//  ''里的是ios原生的组件导出给js时的名字。 第二个参数是当前类名
let RCTMyView = requireNativeComponent('MyView', MyView);

export default class MyView extends Component {


    static propTypes = {
        sendTextToNative: PropTypes.func,
        bgForLabel: PropTypes.color,
    };

    render() {
        return <RCTMyView {...this.props}

                          ref={rv => this.rv = rv}
                          sendTextToNative={this.sendTextToNative('Rn传给ios的数据')}
                          bgForLabel={'red'}
        />;
    }

    componentDidMount(){

        setTimeout(() => {
            // 这样不能调用原生对外方法的，会crash
            // this.rv.sendTextToNative('Rn传给ios的数据');

            // 这样也不能调用原生对外方法
            // RCTMyView.sendTextToNative('Rn传给ios的数据');


        }, 2000)

    }


    sendTextToNative(str){

    }

}




