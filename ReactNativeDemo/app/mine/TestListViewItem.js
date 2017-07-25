// 可以自适应高度

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import * as conster from '../const/Const'

export default class CommonItem extends Component {



  render() {

    return (

        <TouchableOpacity
          style={styles.rootViewStyle}
          onPress = {this.props.onPress}
        >
          <Image
            source={this.props.icon}
            style={styles.iconStyle}
            resizeMode = 'contain'
          />
          <View style={styles.rightViewStyle}>
            <Text style={styles.titleStyle}
            >{this.props.title||''}</Text>

            <Text style={styles.subtitleStyle}
            >{this.props.subTitle||''}</Text>

            <Text style={styles.priceStyle}>{this.props.price||''}</Text>
          </View>
        </TouchableOpacity>
    );
  }

    componentDidMount(){
    }


}


const styles = StyleSheet.create({
  rootViewStyle: {
      flexDirection: 'row',
      backgroundColor: 'white',
      // borderBottomWidth: 0.5,
      // borderBottomColor: 'red',
      padding: 20, //
      // margin: 20,
      width: conster.width,
  },

  iconStyle: {
    width: conster.width / 4,
    height: conster.width / 4,
    borderRadius: 5,
  },

  // 主轴为行，则次轴即为列，反义异然
  rightViewStyle: {
    backgroundColor: 'lightgray',
    paddingLeft: 20,
    // height: conster.width / 4,
    flex: 1,

  },

  titleStyle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 10,
    backgroundColor: 'red',
  },

  subtitleStyle: {
    backgroundColor: 'white',
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },

  priceStyle: {
    color: 'green',
    fontWeight: 'bold',

      // position: 'absolute',
      // bottom: 3,
      // left: 20,
      marginTop: 30,
      marginBottom: 10,
  },


});