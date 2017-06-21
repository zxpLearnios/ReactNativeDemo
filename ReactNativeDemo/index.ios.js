/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
 “./” 代表当前目录
 “../” 代表上一级目录
 “/”   当前根目录，是相对目录；<img src="/img/icon.jpg" />
 “~/”  Web 应用程序根目录。ASP.NET 启用了 Web 应用程序根目录运算符 (~)，在服务器控件中指定路径时，可以使用该运算符。ASP.NET 会将 ~ 运算符解析为当前应用程序的根目录。可以结合使用 ~ 运算符和文件夹来指定基于当前根目录的路径。<asp:image runat="server" id="Image1" ImageUrl="~/Images/SampleImage.jpg" />在该示例中，图像文件将从 Web 应用程序根目录下的 Images 文件夹中直接读取，无论该页面位于网站的什么位置。

 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';




import Main from './app/main/Main'

export default class MyRNProject extends Component {
  render() {
      return <Main/>;
  }
}


AppRegistry.registerComponent('ReactNativeDemo', () => MyRNProject);
