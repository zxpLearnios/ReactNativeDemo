//
//  MyViewManager.m
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
/**
 0. ios js 类型对照表
 IOS	React-native
 NSString	string
 NSInteger, float, double, CGFloat, NSNumber	number
 BOOL, NSNumber	boolean
 NSArray	array
 NSDictionary	object
 RCTResponseSenderBlock	function
 
 1. 在封装的UIView中声明RCTBubblingEventBlock或RCTBubblingEventBlock类型的block属性，才可以被当做事件导出。（新的事件导出方式，后面会用到哦）
 注意：声明block属性名称要以on开头（不确定为什么，在不做其它配置的情况下，只有on开头能成功）
 
 2. label 必须设置text才可以显示出来
 
 3. 最后是在webStorm里编辑js，在xcode里运行项目
 
 4. 因为可以将点击事件通过相应view的block用Manager暴露给js，故无须代理了
 
 
 */

#import "MyViewManager.h"


@implementation MyViewManager{
  MyView *nativeView;
}


//  默认名称为当前类名去掉Manager
RCT_EXPORT_MODULE();


-(dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}

// 这个方法在执行的过程中会被调用两次，所以，可能在使用的时候会遇到坑。
-(UIView *)view{
  if (!nativeView) {
    nativeView = [MyView view]; // [[MyView alloc] initWithFrame:CGRectZero];
  }
  return nativeView;
  
}

//-------------------- 1 导出属性 ---------------//

RCT_EXPORT_VIEW_PROPERTY(bgForLabel, UIColor);
// 将.h里 声明的 block 作为属性 暴露给rn
RCT_EXPORT_VIEW_PROPERTY(onClickButtonBlock, RCTBubblingEventBlock);


//-------- 2 导出方法，桥接到js的方法返回值类型必须是void --------//
// 使用RCT_EXPORT_METHOD导出的方法必须将callback定义在最后，


/**
 * 1
 */
RCT_EXPORT_METHOD(sendInfoToNative:(NSString *)info){
  if (!nativeView) {
    return;
  }
  // kvo设置后，不管怎么做都是无效的
//  [nativeView setValue:info forKeyPath:@"lab"];
  nativeView.labText = info;
}


/** 2 RN传参数调用原生OC, 并且通过CallBack返回数据给RN，给js的函数为sendInfoToNative：callback
 * block回调给js
 * Callback：回调block
 */
//RCT_REMAP_METHOD(sendInfoToNative, info:(NSDictionary
//                                         *)dictionary callback:(RCTResponseSenderBlock)callback){
//  
//  
//  nativeView.labText = dictionary.allValues.firstObject;
//  
//  NSArray  *events = [[NSArray alloc] initWithObjects:@"这是ios接收到js的信息后，返回给js的。使用rename重命名方法",
//                      nil];
//  
//  callback(@[[NSNull null], events]);
//  
//}

/** 3
 * block回调给js
 * Callback：回调block
 */
RCT_EXPORT_METHOD(sendInfoToNative:(NSDictionary
                                      *)dictionary callback:(RCTResponseSenderBlock)callback){
  
  
  nativeView.labText = dictionary.allValues.firstObject;
  
  NSArray  *events = [[NSArray alloc] initWithObjects:@"这是ios接收到js的信息后，返回给js的。此时label的text=", nativeView.getlabelText, nil];
  
  callback(@[[NSNull null], events]);
  
}


/**
 * 4 Promise回调给js
 * resolve: 将相应数据回调给js
 * reject：将相应的错误回调给js
 */
RCT_REMAP_METHOD(testPromisesEvent, name:(NSString *)testStr
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *promisesData = @"Promises数据"; // 准备回调回去的数据
  if (promisesData) {
    resolve(testStr);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}

/** 5
 *
 */
RCT_EXPORT_METHOD(sentInfoToIOSByDic:(NSDictionary *)details)
{
  NSString *name = [RCTConvert NSString:details[@"name"]];
  NSDate *time = [RCTConvert NSDate:details[@"date"]];
  
  NSLog(@"由js传给ios的日期为：%@", time);
  
}

/**
 *  当事件导出用到 sendInputEventWithName 的方式时，会用到
 */
- (NSArray *) customDirectEventTypes {
   return @[@"onClickBanner"];
}

/**
 *  导出枚举常量，给js定义样式用
 */
//- (NSDictionary *)constantsToExport{
//  return @{
//           @"SDCycleScrollViewPageContolAliment": @{
//               @"right": @(SDCycleScrollViewPageContolAlimentRight),
//               @"center": @(SDCycleScrollViewPageContolAlimentCenter)
//               }
//           };
//}


@end
