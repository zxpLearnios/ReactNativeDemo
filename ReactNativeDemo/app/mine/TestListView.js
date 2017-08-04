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


    RefreshControl,
    ActivityIndicator,

}from 'react-native';
import ListViewItem from './TestListViewItem'
let img = require('../img/plus.png');

let isFirst = true; // 是否是首次
let runNumber = 1; // 循环几次


// row的更新策略
var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});


let nx = null;
// 如果不想在滑动过快导致白屏出现，就只能使用 ListView 。而不能使用SectionList 和 FlatList

import * as conster from '../const/Const'
export  default  class  TestListView extends  Component{

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.info}`,
        // 设置左边按钮都无效
        // backTitle: '返回',
        // backButtonTitle:"由TestListView Push",
        // left: 'left',
    });


    // 返回一个二维数组，数据源
    getDatas(){

         let title = '';
         let bigAry = [];
         let smallAry = [];

         for (var i=0; i<runNumber; i++){
             for (let j=0; j<5; j++){
                 title = title + '第'+i+"组"+'第'+j+"行"+'测试133333';
                 smallAry.push(title)
             }
             bigAry.push(smallAry);
             smallAry = []
         }
         return bigAry;
    }

    staticDatas={
        rowDatas: ['这是ListView的Cell----1', '这是ListView的Cell-------------------2', '这是ListView的Cell-----3'],
        sectionDatas: this.getDatas(), // [['第一组第0行', '第一组第1行', '第一组第2行'], ['第二组第0行', '第二组第1行', '第二组第2行']],
    }

    /**
     * { sectionID_1: { rowID_1: rowData1, ... }, ... }
     { sectionID_1: [ rowData1, rowData2, ... ], ... }
     [ [ rowData1, rowData2, ... ], ... ]
     * */
    constructor(props) {
        super(props);

        modeType = 'modal';
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(this.getDatas()), //ds.cloneWithRows(this.staticDatas.rowDatas),
            title: '下拉开始刷新',
            isRefreshing: true, // 开始即刷新下
            isLoadMoreData: false,
            isNoMoreData: false,
        };

        // 只执行一次，立即执行
        setImmediate(() => {
            this.setState({
                isRefreshing: false,
            })
        }, 1000)



        const {navigate} = this.props.navigation;

        nx = navigate;
    }



    render() {

        return (
            <ListView

                onScroll={(scroller) => this._onScroll(scroller)}
                dataSource={this.state.dataSource}
                renderRow={(rowData,sectionId,rowId)=> this._renderItems(rowData,sectionId,rowId)}
                renderSeparator={this._renderSep}
                renderSectionHeader={(sectionData,sectionId) => this._renderSectionHeader(sectionData,sectionId)}

                refreshControl={
                    <RefreshControl
                        title={this.state.title}
                        // style={styles.headRefreshControl}
                        refreshing={this.state.isRefreshing}
                        tintColor={'red'}
                        onRefresh={this.loadData.bind(this)}
                    />}

                onEndReached={() => this._onEndReached()}
                // renderRow(rowData, sectionID, rowID, highlightRow) 渲染列表项的时候， rowData 就是数组中每一个对象。*/}
                //initialListSize={5} // 指定在组件刚挂载的时候渲染多少行数据。用这个属性来确保首屏显示合适数量的数据，而不是花费太多帧逐步显示出来。
                // renderHeader={this._renderSep} // 每个cell的头部

            />
        );
    };

    // 接受參數
    componentDidMount() {
        // const {params} = this.props.navigation.state;
        // alert(params.info)
        conster.modeType = 'card';
    }

    componentWillUnmount() {
        // 复原数据
        isFirst = true;
        runNumber = 1;

    }

    _renderSep = () => {
        return <View style={styles.separator}></View>;
    }

    _renderSectionHeader(sectionData,sectionId){
        return (
                <TouchableOpacity onPress={() => this.clickHeader(sectionId)} >

                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{'第'+sectionId+'组'}</Text>
                    </View>

                </TouchableOpacity>

        );
    }

    _renderItems(rowData,sectionId,rowId) {

        return (
            <ListViewItem
                ref={cell => this.cell = cell}
                title={rowData}
                subTitle='zibiaoti'
                price="价格：100"
                icon={img}
                onPress={() => this.clickItem(rowData,sectionId,rowId)} style={styles.container} />
                // <TouchableOpacity activeOpacity={0.7} onPress = {()=>
                //      this.clickItem(rowData,sectionId,rowId) }
                // >
                //     <View style={styles.container}
                //         <Text style={styles.text}>{rowData}</Text>
                //     </View>
                // </TouchableOpacity>
        );


    }


    _onScroll(scroller){
        // 获取滚动 偏移量
        let offsetY =  scroller.nativeEvent.contentOffset.y;
        if (offsetY < 50){
            this.setState({
                title: '下拉开始刷新'
            })

        }else if(offsetY >= 50){
            this.setState({
                title: '松开立即刷新'
            })
        }


    }

    _onEndReached(){
        if (isFirst){
            isFirst = false;
            return;
        }

        // if (this.state.isNoMoreData) {
        //     alert('已加载完所有数据');
        // } else {
        //     alert('加载更多');
        // }
    }

    clickHeader = (sectionId) => {
        alert('点击了'+sectionId+'的头部')
    }

    // 测试必须有一个A push出B后，在B里设置导航栏左边、右边的字时才有效
    clickItem = (rowData,sectionId,rowId) => {
        // alert('点击了：'+ sectionId +'组,'+ rowId+'行，' +  '内容：'+rowData);
        // nx('MineDetail')
        alert(this.cell.pageX)
    }


    // 加载数据 注意这个方法前面有async关键字
    loadData (){
        this.requestData(true);
    }


    requestData(isForLoadMoreData){

        isForLoadMoreData = isForLoadMoreData || true;


        // if (this.state.isRefreshing) return;

        if (isForLoadMoreData){ // 上拉加载更多

            runNumber ++;
            this.setState({
                isRefreshing: true,
                isLoadMoreData: true,
            })

            // alert('runNumber == '+ runNumber)
            loadMoreDataTimer = setTimeout( () => {
                this.setState({
                    isRefreshing: false,
                    isLoadMoreData: false,
                    dataSource: ds.cloneWithRowsAndSections(this.getDatas()), //ds.cloneWithRows(this.staticDatas.rowDatas),

                })
                clearTimeout(loadMoreDataTimer);
            }, 2000)


        } else { // 下拉刷新

            runNumber = 1;
            this.setState({
                isRefreshing: true,
                isLoadMoreData: true,
            })

            // alert('runNumber == '+ runNumber)
            loadMoreDataTimer = setTimeout( () => {
                this.setState({
                    isRefreshing: false,
                    isLoadMoreData: false,
                    dataSource: ds.cloneWithRowsAndSections(this.getDatas()), //ds.cloneWithRows(this.staticDatas.rowDatas),

                })
                clearTimeout(loadMoreDataTimer);
            }, 2000)
        }





        // try {
        //     // 注意这里的await语句，其所在的函数必须有async关键字声明
        //     // let response = await fetch('http://www.baidu.com');
        //     // let responseJson = await response.json();
        //     // let datas = responseJson.data;
        //     //
        //     //
        //     this.setState({
        //         isRefreshing: false,
        //         isNoMoreData: true,
        //     })
        // } catch (error) {
        //     alert("requestData " + error);
        // }

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

    // 刷新控件
    headRefreshControl:{
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







