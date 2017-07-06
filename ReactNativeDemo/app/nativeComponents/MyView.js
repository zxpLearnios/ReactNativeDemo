/**
 * Created by jingnanzhang on 2017/6/20.
 */

import  React, {Component, PropTypes,} from  'react'
import {
    requireNativeComponent,
    NativeModules,
}from 'react-native';



//  ''里的是ios原生的组件导出给js时的名字。 第二个参数是当前类名
let RCTMyView = requireNativeComponent('MyView', MyView);
// module.exports = requireNativeComponent('RNTMap', null);

// 此组件是单例，和RCTMyView全等
var NativeMyView = NativeModules.MyViewManager;

export default class MyView extends Component {


    static propTypes = {
        // sendTextToNative: PropTypes.func,
        bgForLabel: PropTypes.color,
        // onClickButtonBlock: PropTypes.func
    };

    render() {
        return <RCTMyView {...this.props}

                          ref={rv => this.rv = rv}
                          bgForLabel={'red'}
                          // 5. 测试ios里view暴露给js的block是否ok。labText为ios里字典的一个key
                          onClickButtonBlock={(events) => {
                              alert('test' + events.nativeEvent.labText)
                          }}
        />;
    }

    componentDidMount(){

        setTimeout(() => {
            // 这样不能调用原生对外方法的，会crash
            // this.rv.sendInfoToNative('Rn传给ios的数据');

            // 这样来调用原生对外方法
            let dic = {'info':'Rn传给ios的数据'};
            // 1.
            // NativeMyView.sendInfoToNative('Rn传给ios的数据');

            // 2. 带有block回调的ios原生方法在js里调用
            // NativeMyView.sendInfoToNative(dic, (error,events) => {
            //     if (error) {
            //         alert(error);
            //         // console.warn(error)
            //     } else {
            //         alert(events) // 返回的数据
            //     }
            // });

            // let date = Date();
            // 3.
            // NativeMyView.sentInfoToIOSByDic({'date': date, 'name':'js->ios'});

            // 4.
            // NativeMyView.testPromisesEvent('js调用ios的promise方式的回调方法').then((events)=>{
            //     alert(events)
            // }).catch((e)=>{
            //    alert('error')
            //     // console.error(e);
            // });

            // 5.


        }, 2000)

    }


    sendTextToNative(str){

    }

}




