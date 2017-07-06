//
//  MyView.h
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.


#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>




//@class MyView;
//
//@protocol MyViewDelegate <NSObject, RCTComponent>
//
//@optional
//-(void)click:(MyView *)view;
//@end

@interface MyView : UIView
//@property(nonatomic, weak)  id<MyViewDelegate> delegate;


+(instancetype)view;


/**供js使用, 即可以将点击事件暴露给rn，故无须代理给Manager再让Manager给rn了*/
@property (nonatomic, copy) RCTBubblingEventBlock onClickButtonBlock;
/**供js外部设置label的text*/
@property (nonatomic, copy) NSString *labText;
@property (nonatomic, strong, readonly) NSString *getlabelText;
@end
