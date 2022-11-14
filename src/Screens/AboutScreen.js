import React from "react";
import { View, Text,StyleSheet ,ScrollView} from "react-native";

const About = () => {
	return (
<ScrollView style={styles.ticketInfor}>
		<View style={styles.container}>
			<Text style={styles.ticket}>Contact Us:</Text>
      <Text>Corporate Head Office</Text>
      <Text>Kenya</Text>
      <Text>P.O BOX 589-00623</Text>
      <Text>Email: -infor@bus-lite.co.ke</Text>
      <Text>Phone No:+254717911169 / +254706443648</Text>
      <Text>Helpline No :+254706443648</Text>
						</View>
     
        </ScrollView>
	);
};
export default About;

const styles=StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:"#fff",
        borderRadius:5,
        flex:1

    },

    ticket:{
        fontWeight:"bold",
        fontSize:20,
        textAlign:"center"
    },
    ticketInfor:{
        backgroundColor:"#0E8769",
        borderRadius:5,
        padding:10,
        color:"#fff"
    }
    
})