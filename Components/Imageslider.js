console.warn = () => {}
import React, {Component} from "react";
import Slideshow from "react-native-image-slider-show";
import { View,Text,StyleSheet } from "react-native";
export default class ImageSlider extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
           
            url: 'https://images.unsplash.com/photo-1606188521935-278fd50f7a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          }, {
            url: 'https://images.unsplash.com/photo-1615256930425-368f5f111024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }, {
            url: 'https://images.unsplash.com/photo-1627628107139-9f93198b7dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },{
            url: 'https://images.unsplash.com/photo-1602483878692-a8cc075f973f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },{
            url: 'https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 3500)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} height={300} overlay={true}/>

      );
    }
  }
 const styles=StyleSheet.create({
slider:{
    height:"70%"
}
 })