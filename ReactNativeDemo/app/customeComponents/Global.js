/**
 * Created by jingnanzhang on 2017/7/12.
 */
// 全局的东西

import React, {Component,}from 'react';
import {}from 'react-native';
import storage from './MyStorage';

// var storage = require('./MyStorage');

// export default {
//
//     storage: storage,
//
//
// };

export default class Global extends Component{

    static  isInit(){
        // if(storage == undefined){
        //     throw "请先调用_getStorage()进行初始化";
        // }
    }

    /**
     * 1.保存信息
     * */
    static saveInfo = (key,data) => {
        storage.save({
            key: key,   // Note: Do not use underscore("_") in key!
            data: data,
            // if not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: null, // 1000 * 3600
        });
    }

    /**
     * 2.获取信息
     * */
    static getInfo = (key) => {

        return storage.load({
            key: key,

            // autoSync(default true) means if data not found or expired, 则调用相应的同步方法
            autoSync: true,

            // syncInBackground(default true) means 如果过期数据,
            // 返回过时的数据首先调用同步方法。
            // 可以设置为false总是返回过期时提供的数据同步方法。(当然这是慢的)
            syncInBackground: true,

            // you can pass extra params to sync method
            // see sync example below for example
            syncParams: {
                extraFetchOptions: {
                    // blahblah
                },
                someFlag: true,
            },
        })
    }

    static getIdsForKey = (key) => {
        // getIdsForKey
        storage.getIdsForKey(key).then(ids => {
            return ids;
        });
    }


    static getAllDataForKey = (key) => {
        storage.getAllDataForKey(key).then(info => {
            return info;
        })
    }


    /**
     * 3.删除所有信息
     * */
    static deleAllInfoForKey = (key) => {
        storage.clearMapForKey(key);
    }

    static deleInfoForKey = (key) => {
        storage.remove({
            key: key,
        });
    }

    static deleInfoForKeyAndId = (key,id) => {
        storage.remove({
            key: key,
            id: id,
        });
    }

}




