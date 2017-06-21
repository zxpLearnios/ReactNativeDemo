//
//  MyView.h
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>


@class MyView;

@protocol MyViewDelegate <NSObject>

@optional
-(void)click:(MyView *)view;
@end

@interface MyView : UIView
@property(nonatomic, weak)  id<MyViewDelegate> delegate;
@end
