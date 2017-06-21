//
//  MyView.m
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.
//  组件的颜色和尺寸都必须由RN来设置，因为自己设置的RN不识别，即无效

#import "MyView.h"



@implementation MyView

-(instancetype)init{
  if (!self) {
    self = [super init];
    
    [self addViews];
  }
  return self;
}



-(void)awakeFromNib{
  [super awakeFromNib];
  
}

-(void)addViews{
  UIButton *btn = [[UIButton alloc] init];
                   
  [btn setTitle:@"点击" forState:0];
  [btn setTitleColor:[UIColor greenColor] forState:UIControlStateNormal];
  
  btn.bounds = CGRectMake(20, 20, 50, 40);
  btn.center = CGPointMake(self.bounds.size.width/2, self.bounds.size.height/2);
  
  [btn addTarget:self action:@selector(btnAction:) forControlEvents:UIControlEventTouchUpInside];
}

- (IBAction)btnAction:(UIButton *)sender {
  if (self.delegate != nil && [self.delegate respondsToSelector:@selector(click:)]) {
    [self.delegate click:self];
  }
}


@end
