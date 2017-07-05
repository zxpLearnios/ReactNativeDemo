//
//  MyView.h
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
/*
 1. 在封装的UIView中声明RCTBubblingEventBlock或RCTBubblingEventBlock类型的block属性，才可以被当做事件导出。（新的事件导出方式，后面会用到哦）
 注意：声明block属性名称要以on开头（不确定为什么，在不做其它配置的情况下，只有on开头能成功）
 
 2. label 必须设置text才可以显示出来
 
 3. 最后是在webStorm里编辑js，在xcode里运行项目
 */

#import <UIKit/UIKit.h>




@class MyView;

@protocol MyViewDelegate <NSObject>

@optional
-(void)click:(MyView *)view;
@end

@interface MyView : UIView
@property(nonatomic, weak)  id<MyViewDelegate> delegate;

//@property (nonatomic, copy) RCTBubblingEventBlock onClick;

+(instancetype)view;


@end
