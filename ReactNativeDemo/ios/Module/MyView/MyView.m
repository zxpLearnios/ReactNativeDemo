//
//  MyView.m
//  TestNavigation
//
//  Created by Jingnan Zhang on 2017/6/20.
//  Copyright © 2017年 Facebook. All rights reserved.


#import "MyView.h"



@implementation MyView{
    
    __weak IBOutlet UILabel *lab;
}

/**
 *  挺多封装原生的第三方组件都会这么写，这里还没研究透彻，就没按着去实现
 */
// - (instancetype)initWithBridge:(RCTBridge *)bridge {
//   if ((self = [super initWithFrame:CGRectZero])) {
////     _eventDispatcher = bridge.eventDispatcher;
////     _bridge = bridge;
////     ......
//     self.backgroundColor = [UIColor redColor];
//   }
//   return self;
// }

// 在init方法里设置颜色无效,且设置颜色最好用RGB,因为redColor偶现不识别.如果是View，背景色必须在layoutSubviews设置才有效，在其余地方设置都无用
//-(instancetype)initWithFrame:(CGRect)frame{
//  if (self = [super initWithFrame:frame]) {
//    
////    UIView *container = [[UIView alloc] init];
////    [container addSubview:self];
//    
//    self.backgroundColor = [UIColor colorWithRed:0 green:1 blue:0 alpha:1];
//    
//  }
//  return self;
//}


/* 加载xib时，必须另外用一个view来充当self的背景view，以便设置背色. 
 * 都是，尺寸必须由外部设置，否则在别处设置无效，仍为zero
 */

+(instancetype)view{
  MyView *v = [[[NSBundle mainBundle] loadNibNamed:@"MyView" owner:nil options:nil] lastObject];
  return v;
}

-(void)awakeFromNib{
  [super awakeFromNib];
  
  
}

//----------------- public ------------//



-(void)sendTextToNative:(NSString *)str{
  lab.text = str;
}


/**
 * 对外暴露的属性，此处需要实现set方法
 */
-(void)setBgForLabel:(UIColor *)bgForLabel{
  lab.backgroundColor = bgForLabel;
}


// -----------  private -------------//
-(void)layoutSubviews{
  [super layoutSubviews];
  
//    if (self.subviews.count == 0) {
//      [self addViews];
//    }
//  self.backgroundColor = [UIColor redColor];//colorWithRed:1 green:0 blue:0 alpha:1];
}


-(void)drawRect:(CGRect)rect{
  [super drawRect:rect];
  
//  self.text = @"dfgdfg";
  //  self.textColor = [UIColor redColor];

  
}

-(void)addViews{
  UIButton *btn = [[UIButton alloc] init];
                   
  [btn setTitle:@"点击" forState:0];
  [btn setTitleColor:[UIColor greenColor] forState:UIControlStateNormal];
  
  btn.bounds = CGRectMake(20, 20, 50, 40);
  btn.center = CGPointMake(self.bounds.size.width/2, self.bounds.size.height/2);
  
//  [btn addTarget:self action:@selector(btnAction:) forControlEvents:UIControlEventTouchUpInside];
  [self addSubview:btn];
}

//- (void)btnAction:(UIButton *)sender {
//  if (self.delegate != nil && [self.delegate respondsToSelector:@selector(click:)]) {
//    [self.delegate click:self];
//  }
//}



- (IBAction)btnAction:(UIButton *)sender {
    
  int a = arc4random() % 100;
  lab.text = [NSString stringWithFormat:@"%d", a];
  
  if (!self.onClickButtonBlock) {
    return;
  }
  
  //  导出事件给rn, 外部通过events.nativeEvent.labText\target 来获取相应的值哦
  self.onClickButtonBlock(@{@"labText": self.getlabelText, @"target": self});
  
//  if (self.delegate && [self.delegate respondsToSelector:@selector(click:)]) {
//    [self.delegate click:self];
//  }
  
  
  
}

// ----------------------- set&get -------------- //
-(void)setLabText:(NSString *)labText{
  _labText = labText;
  lab.text = labText;
}



-(NSString *)getlabelText{
  return lab.text;
}

@end
