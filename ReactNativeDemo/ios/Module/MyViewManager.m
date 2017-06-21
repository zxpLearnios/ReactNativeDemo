//
//  MyViewManager.m
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyViewManager.h"


@implementation MyViewManager


//  默认名称为MyView
RCT_EXPORT_MODULE();
// 导出属性，指定属性的类型
//RCT_EXPORT_VIEW_PROPERTY(autoScrollTimeInterval, CGFloat);

//RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock);


// 导出方法，桥接到js的方法返回值类型必须是void
RCT_EXPORT_METHOD(doSomething:(NSString *)testStr){
  NSLog(@"%@ ===> doSomething",testStr);
}

/* 回调参数必须为两个，第一个为状态，第二个为参数 */
RCT_EXPORT_METHOD(doSomething:(NSString *)testStr resolver:(RCTResponseSenderBlock)callback){
  NSLog(@"%@ ===> doSomething",testStr);
  NSString *callbackData = @"Callback数据"; // 准备回调回去的数据
  callback(@[[NSNull null], callbackData]);
}

 //  指定执行模块里的方法所在的队列
- (dispatch_queue_t)methodQueue{
    return dispatch_get_main_queue();
 }
 


-(UIView *)view{
  
//  UIView *v = [[UIView alloc] init];
//  v.backgroundColor = [UIColor redColor];
    MyView *v = [[MyView alloc] init];
  return v;
}


#pragma mark - MyViewDelegate
-(void)click:(MyView *)view{
  
}



@end
