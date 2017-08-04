import React,{Component,} from 'react';
import {} from 'react-native';

export default class Request extends Component{


    componentDidMount(){

    }

    /**
     * 获取当前系统时间 yyyy-MM-dd HH:mm:ss
     */
    static getCurrentDate(){
        let bigSpace = "-";
        let smSpace = ":";

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        if(month<10){
            month = "0"+month;
        }

        let day = date.getDate();
        if(day<10){
            day = "0"+day;
        }

        let hour = date.getHours();
        if(hour<10){
            hour = "0"+hour;
        }

        let min =date.getMinutes();
        if(min<10){
            min = "0"+min;
        }

        let sec = date.getSeconds();
        if(sec<10){
            sec = "0"+sec;
        }
        let time = year+bigSpace+month+bigSpace+day+" "+hour+smSpace+min+smSpace+sec;
        return time;
    };
}