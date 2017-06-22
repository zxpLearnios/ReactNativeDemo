/**
 * Created by jingnanzhang on 2017/6/20.
 */

// import  React, {Component, PropTypes} from  'react'
// import {
//     requireNativeComponent,
//     NativeModules,
// }from 'react-native';
//
// //  ''里的是ios原生的组件导出给js时的名字。 第二个参数是当前类名
// var RCTMyView = requireNativeComponent('MyView', MyReactView);
//
// export default class MyReactView extends Component {
//     static propTypes = {
//
//         onClick: PropTypes.func,
//
//     };
//
//     render() {
//         return <RCTMyView {...this.props}
//                           // onClick={this.onClick}
//
//         />;
//     }
//
//     componentDidMount(){
//         // console.log(this.props.backgroundColor);
//
//     }
//
//     onClick = () => {
//
//         alert('背景色是'+this.style.backgroundColor);
//
//     }
//
//
// }


let { requireNativeComponent } = require('react-native');


module.exports = requireNativeComponent('MyView', null);