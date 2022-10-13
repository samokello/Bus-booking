import React, { Component } from "react";
import { View,Text,Button ,StyleSheet,TextInput} from "react-native";
import moment from "moment";
import CalendarPicker from "react-native-calendar-picker";

export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedStartDate:new Date(),
        };
        this.onDateChange=this.onDateChange.bind(this);   
    }
    onDateChange(date){
        console.log(date);
        this.setState({
            selectedStartDate:date,
        });
    }


    render(){
        const {selectedStartDate}=this.state;
        const startDate=selectedStartDate ? selectedStartDate.toString() : "";
        return(
            <View style={styles.container}>
                <CalendarPicker onDateChange={this.onDateChange}/>
                <View>
                    <Text>Selected Date:{moment(startDate).format("MM/DD/YYYY")}</Text>
                    
                </View>
            </View>
        );
    }}

const styles=StyleSheet.create({
container:{
backgroundColor:"teal",
width:"100%",
padding:20,
borderRadius:20
},
input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#2346FF",
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    marginTop: 10,
    marginBottom: 10,
},
})