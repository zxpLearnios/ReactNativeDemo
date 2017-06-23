/**
 * Created by jingnanzhang on 2017/6/22.
 */
// 测试对 ListView的使用  二维数组

import React, {Component,} from 'react'
import {
    ListView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,

}from 'react-native';


// 如果不想在滑动过快导致白屏出现，就只能使用 ListView 。而不能使用SectionList 和 FlatList
export  default  class  TestListView extends  Component{

    staticDatas={
        rowDatas: ['这是ListView的Cell', '这是ListView的Cell', '这是ListView的Cell'],
        sectionDatas: this.getDatas(), // [['第一组第0行', '第一组第1行', '第一组第2行'], ['第二组第0行', '第二组第1行', '第二组第2行']],
    }

    // 返回一个二维数组，数据源
     getDatas(){
         let title = '';
         let bigAry = [];
         let smallAry = [];

         for (var i=0; i<2; i++){
             for (let j=0; j<5; j++){
                 title = '第'+i+"组"+'第'+j+"行";
                 smallAry.push(title)
             }
             bigAry.push(smallAry);
             smallAry = []
         }
         return bigAry;
    }

    /**
     * { sectionID_1: { rowID_1: rowData1, ... }, ... }
     { sectionID_1: [ rowData1, rowData2, ... ], ... }
     [ [ rowData1, rowData2, ... ], ... ]
     * */
    constructor(props) {
        super(props);
        // row的更新策略
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(this.staticDatas.sectionDatas), //ds.cloneWithRows(this.datas.rowDatas),
        };

    }



    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData,sectionId,rowId)=> this._renderItems(rowData,sectionId,rowId)}
                renderSeparator={this._renderSep}
                renderSectionHeader={(sectionData,sectionId) => this._renderSectionHeader(sectionData,sectionId)}

                // renderRow(rowData, sectionID, rowID, highlightRow) 渲染列表项的时候， rowData 就是数组中每一个对象。*/}
                //initialListSize={5} // 指定在组件刚挂载的时候渲染多少行数据。用这个属性来确保首屏显示合适数量的数据，而不是花费太多帧逐步显示出来。
                // renderHeader={this._renderSep} // 每个cell的头部

            />
        );
    };


    _renderSep = () => {
        return <View style={styles.separator}></View>;
    }

    _renderSectionHeader(sectionData,sectionId){
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionText}>{'第'+sectionId+'组'}</Text>
            </View>
        );
    }

    _renderItems(rowData,sectionId,rowId) {

        return (

                <TouchableOpacity activeOpacity={0.7} onPress = {()=>this.clickItem(rowData,sectionId,rowId)} >
                    <View style={styles.container}>
                        <Text style={styles.text}>{rowData}</Text>
                    </View>
                </TouchableOpacity>
        );


    }




    clickItem = (rowData,sectionId,rowId) => {
        alert('点击了：'+ sectionId +'组,'+ rowId+'行，' +  '内容：'+rowData);
    }

















}



/**
 * flexWrap流式布局样式：

 flexWrap属性用来设置流式布局（当所有项不能显示在一行中时，换行显示）的样式，有如下几种选项：

 nowrap（默认值）：不换行；
 wrap：换行，新行在旧行下方；
 wrap-reverse：换行，新行在旧行上方。
 注意：flexWrap属性在iOS上可以正常设置，但在Android上如果不加额外的设置，则只会显示第一行，解决方法是添加style：alignItems: ’flex-start’
 *
 * */
const  styles = StyleSheet.create({

    separator:{
        backgroundColor:'#d5d5d5',
        height: 1,
    },

    // section头部，不好用设置sectionHeader的高度，否则sectionText不会居中
    sectionHeader:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffb6c1',
    },

    sectionText:{
        color: '#333333',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },

    // cell的内容
    container:{
        // flex: 1,
        // flexWrap: 'wrap',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    text:{
        color: '#333333',
        fontSize: 16,
    },


});







