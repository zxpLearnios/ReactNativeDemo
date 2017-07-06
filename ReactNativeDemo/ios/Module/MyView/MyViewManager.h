//
//  MyViewManager.h
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
/**
 1. 即使没有被JavaScript调用，原生模块也可以给JavaScript发送事件通知。最好的方法是继承RCTEventEmitter，实现suppportEvents方法并调用self sendEventWithName:。
 2. 
 
 3.
 */


#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTConvert.h>

//#import <React/RCTBridge.h> // 进行通信的头文件
//#import <React/RCTEventDispatcher.h>  //事件派发，不导入会引起Xcode警告
//#import <React/RCTComponent.h>

#import "MyView.h" // 第三方框架
//#import "RCTMyView.h"



@interface MyViewManager : RCTViewManager <RCTBridgeModule>

@end
