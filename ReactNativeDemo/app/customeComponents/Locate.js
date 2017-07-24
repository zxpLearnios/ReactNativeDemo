// 获取地理位置
// watchPosition() 与 getCurrentPosition() 接收的参数相同，但回调函数会被调用多次。
// 我们可以直接调用 watchPosition() 函数，不需要先调用 getCurrentPosition() 函数。
/*
* 定位API遵循web标准。

iOS
你需要在Info.plist中增加NSLocationWhenInUseUsageDescription字段来启用定位功能。如果你使用react-native init创建项目，定位会被默认启用。
Android
要请求访问地理位置的权限，你需要在AndroidManifest.xml文件中加入如下一行：
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

* */

import  React, {Component, } from 'react';
var Geolocation = require('Geolocation');



export default class Locate extends Component{

    static watchID = null;

    // 获取位置
    static getCurrentLocation(resolve, reject) {

        Geolocation.getCurrentPosition(
             location => { // 成功时的回调

                let result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
                // alert(result);

                let res={
                    longitude: location.coords.longitude, // 经度
                    latitude: location.coords.latitude, // 纬度
                }
                 resolve(res);
            },
            error => { // 失败时的回调
                // alert("获取位置失败："+ error)
                reject(error);
            }
        );
    }

    // 开始监听位置的改变
    static startObserve(){
        this.watchID = Geolocation.watchPosition(
            location => {
                var result = "速度：" + location.coords.speed +
                    "\n经度：" + location.coords.longitude +
                    "\n纬度：" + location.coords.latitude +
                    "\n准确度：" + location.coords.accuracy +
                    "\n行进方向：" + location.coords.heading +
                    "\n海拔：" + location.coords.altitude +
                    "\n海拔准确度：" + location.coords.altitudeAccuracy +
                    "\n时间戳：" + location.timestamp;
                // alert(result);
            },
            error => {
                alert("获取位置失败："+ error)
            }
        );
    }

    // 停止监听位置变化
    static stopObserve() {
        this.clearWatch(this.watchID);
    }

}






