//
//  MyViewManager.m
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MyViewManager.h"


@implementation MyViewManager


//  默认名称为当前类名去掉Manager
RCT_EXPORT_MODULE();


-(dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}

// 这个方法在执行的过程中会被调用两次，所以，可能在使用的时候会遇到坑。
-(UIView *)view{
  
  MyView *v = [MyView view]; // [[MyView alloc] initWithFrame:CGRectZero];
  return v;
}

//-------------------- 1 导出属性 ---------------//

RCT_EXPORT_VIEW_PROPERTY(bgForLabel, UIColor);


//-------- 2 导出方法，桥接到js的方法返回值类型必须是void --------//

RCT_EXPORT_METHOD(sendTextToNative:(NSString *)str){
  NSLog(@"%@", str);
}


#pragma mark - MyViewDelegate


@end
