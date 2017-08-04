// 手势密码

import  React, {Component} from 'react';

import {
    TouchableWithoutFeedback,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    StyleSheet,
    PanResponder,
    Dimensions,

}from 'react-native';

/*
* onPanResponderMove: (event, gestureState) => {}
其中event对象有：
nativeEvent:
changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
identifier - 触摸点的ID
locationX - 触摸点相对于父元素的横坐标
locationY - 触摸点相对于父元素的纵坐标
pageX - 触摸点相对于根元素的横坐标
pageY - 触摸点相对于根元素的纵坐标
target - 触摸点所在的元素ID
timestamp - 触摸事件的时间戳，可用于移动速度的计算
touches - 当前屏幕上的所有触摸点的集合

一个gestureState对象有如下的字段：
stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
moveX - 最近一次移动时的屏幕横坐标
moveY - 最近一次移动时的屏幕纵坐标
x0 - 当响应器产生时的屏幕坐标
y0 - 当响应器产生时的屏幕坐标
dx - 从触摸操作开始时的累计横向路程
dy - 从触摸操作开始时的累计纵向路程
vx - 当前的横向移动速度
vy - 当前的纵向移动速度
numberActiveTouches - 当前在屏幕上的有效触摸点的数量
* */

let marginHorizontal = 75/2; // 手势密码框距左右的间距
let marginTop = 100; //  手势密码框距顶部的间距
let kwidth = Dimensions.get('window').width;
let kheight = Dimensions.get('window').height;

let radius = 25;
let gap = (kwidth - 2*marginHorizontal - 3*(2*radius))/2; // 两图标的间距（竖直、水平）

let secRowIndexs =
    ['00', '01', '02',
        '10', '11', '12',
        '20', '21', '22'];

let centers = [];
// selectTags结构为 [0,1,2,3,4,5,6,7,8]
let selectTags = [];



// 获取两点的间距
function getDistance(pt1, pt2) {
    let a = Math.pow((pt1.x - pt2.x), 2); // 2次方
    let b = Math.pow((pt1.y - pt2.y), 2); // 2次方
    let d = Math.sqrt(a + b);
    return d;
}

// 圆形区域是否包含某点
function isPointInCircle(point, center) {
    let d = getDistance(point, center);

    // console.log('是否包含此点'+(d <= radius) + '此点为'+center.y+center.y);
    if (d <= radius) {
        // 当前center的index
        let centerIndex = centers.indexOf(center);
        // 看当前点击的索引是否有值
        let selectTagIndex = selectTags.indexOf(centerIndex);
        if (selectTagIndex == -1) { // 加入新的点击点的索引，如：02
            // 如01，30
            let newSelectIndex = secRowIndexs[centerIndex];
            selectTags[centerIndex] = newSelectIndex;
            // if (selectTags.indexOf(newSelectIndex) == -1){
            //     selectTags.push(newSelectIndex);
            // }
        }

        return true;
    }
    return false;
}


export default class GesturePwd extends Component {


    state = {
        select: false,
    }

    rowImg = {
        width: 50,
        height: 50,
        // backgroundColor: !this.state.select ? 'red' : 'green', // 无效
    }


    componentWillMount() {


        this._panResponder = PanResponder.create({
            // ------要求成为响应者-----
            // 用户开始触摸屏幕的时候，是否愿意成为响应者；默认返回false，无法响应，当返回true的时候则可以进行之后的事件传递
            onStartShouldSetPanResponder(evt, gestureState) {
                return true
            },
            onStartShouldSetPanResponderCapture(evt, gestureState) {
                return true
            },

            onMoveShouldSetPanResponder(evt, gestureState) {
                return true
            },
            onMoveShouldSetPanResponderCapture(evt, gestureState) {
                return true
            },

            // 另一个组件已经成为了新的响应者，所以当前手势将被取消
            onPanResponderTerminationRequest(evt, gestureState) {
                return true
            },
            onShouldBlockNativeResponder(evt, gestureState) {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },

            // ---- 具体的执行
            onPanResponderGrant(evt, gestureState) {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                // console.log('===begin')


                selectTags.map(num => {
                    console.log('---'+num);
                })
                // console.log(selectTags.length)
                // gestureState.{x,y}0 现在会被设置为0
            },

            onPanResponderMove: this._handlePanMove,

            // 用户放开了所有的触摸点，且此时视图已经成为了响应者
            onPanResponderRelease(evt, gestureState) {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate(evt, gestureState) {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },


        });

    }

    render() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            // 组样式时，必须写
            // sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        return (
            <View
                style={styles.main}
            >
                <ListView // 成为pan手势的响应者
                    {...this._panResponder.panHandlers}
                    scrollEnabled={false}
                    style ={styles.listView}
                    contentContainerStyle={styles.container}
                    dataSource={ds.cloneWithRows(['', '', ''])}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}

                />

            </View>
        );
    }

    componentDidMount(){
        // 获取数组，Move时用
        centers = this._getCenters();

        // centers.map(center => {
        //     console.log('圆心为'+center.x+ center.y);
        // })
    }

    componentWillUnmount(){
        // 清空数组
        selectTags = [];
    }

    // _renderSubViews(){
    //     for (let i=0;i<9;i++){
    //         return <View style ={styles.subView}/>;
    //     }
    //
    // }

    // 由于只有1行，此时sectionId=s1。 可以是3组每组1行，或3行
    _renderRow(rowData, sectionId, rowId) {
        let secStr = sectionId.toString();
        let rowStr = rowId.toString();
        console.log('======'+selectTags[rowId*3]);
        return (
            <View
                style={styles.rowContainer}>
                {/*<Image style={this.rowImg} backgroundColor={this.state.select ? 'green' : 'red'}/>*/}
                {/*selectTags数组的第0 3 6位置的元素，即（3组每组1行时的第sectionId*3处和3行时的第rowId*3， 是否存在*/}
                {/* selectTags[rowId*3] !== undefined*/}
                <Image style={this.rowImg} backgroundColor={selectTags[rowId*3] !== undefined? 'green' : 'red'}/>
                {/*selectTags数组的第1 4 7位置即第sectionId*3 + 1处 的元素是否存在*/}
                <Image style={this.rowImg} backgroundColor={selectTags[rowId*3+1] !== undefined? 'green' : 'red'}/>
                {/*selectTags数组的第2 5 8位置即第sectionId*3 + 2处 的元素是否存在*/}
                <Image style={this.rowImg} backgroundColor={selectTags[rowId*3+2] !== undefined? 'green' : 'red'}/>

            </View>
        );
    }

    _renderRowImg = (rowId) => {
        // let columes = [0, 1, 2];
        //
        // columes.map((column) => {
        //     return <Image style={this.rowImg} backgroundColor={selectTags[rowId+column] !== undefined? 'green' : 'red'}/>
        // })

        // for(let column=0;column<3;column++){
        //     return (
        //         <Image style={this.rowImg} backgroundColor={selectTags[rowId+column] !== undefined? 'green' : 'red'}/>
        //     )
        //
        // }
    }

    // 手势移动时
    _handlePanMove = (evt, gestureState) => {


        // 手指在九宫格container里的坐标
        let x = gestureState.moveX - marginHorizontal; // evt.nativeEvent.locationX
        let y = gestureState.moveY - 64 - marginTop - 2; // 2.1是rn的偏差

        // 超过2个手指时，不处理
        if (gestureState.numberActiveTouches >= 2 || y < 0 || y > 300) {
            return;
        }
        // console.log('x为'+x+'y='+y)

        centers.map(center => {

            // 传值point用{x，y}
            if (isPointInCircle({x,y}, center)){
                // console.log('圆心为'+center.x+ center.y);
                this.setState({
                    // select: true,
                });
            }
        })

    }


//    -------------- other --------------------//
    // 所有的圆心
    _getCenters() {
        let ary = [];
        for (var i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let center = {x: radius + j * (2*radius + gap), y: radius + i * (2*radius + gap)},
                    _ = ary.push(center) // 接受返回的新长度
            }
        }
        return ary;
    }



}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // listView 的contentView的布局，只能距上、下有段距离
    listView:{
        backgroundColor: 'gray',
    },

    container:{
        width: kwidth - 2*marginHorizontal,
        height: 300,
        marginTop: marginTop,
        justifyContent: 'space-between',
    },

    // 行view，里面有3个小view。不能flex：1，因父view的justifyContent: 'space-between',
    rowContainer:{
        width: kwidth - 2*marginHorizontal,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


});