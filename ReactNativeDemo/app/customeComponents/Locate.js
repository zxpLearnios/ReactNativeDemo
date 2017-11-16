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
let gdWebServeKey = ''; // 高德地图 web服务，逆地理编码key


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

                // 逆地理编码
                this.fetchAds('116.481488', '39.990464')
            },
            error => { // 用户拒绝授权\失败时的回调
                // alert("获取位置失败："+ error)
                // error.code, error.message
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

    //--------  private -----//
    static fetchAds = (longitude,latitude) => {
        fetch( 'http://restapi.amap.com/v3/geocode/regeo?key=0ab2b51e06c5b76ef226a52c42f9c51c&location='+longitude+','+latitude)
            .then( response => response.json()
            )
            .then( responseBody => { // regeocode.formatted_address 全地址
                console.log(responseBody);
                console.log(responseBody.regeocode.addressComponent.province);
                let city = responseBody.regeocode.addressComponent.province;
                let district = responseBody.regeocode.addressComponent.district;
                let township = responseBody.regeocode.addressComponent.township;

                if(responseBody.status ==1){
                    // this.setState({
                    //     city:city,
                    //     district:district,
                    //     township:township,
                    // })

                    alert('具体地址为'+city+district+township);
                }else {
                    let res = '定位失败';
                }
            }).catch((error)=>{
            alert('=='+error);
        })
    };
}






