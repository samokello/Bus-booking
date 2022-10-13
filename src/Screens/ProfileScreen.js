// import React, { Component } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { Feather } from "@expo/vector-icons";

// class ProfileScreen extends Component {
// 	render() {
// 		return (
// 			<View>
// 				<TouchableOpacity onClick={()=>{this.props.navigation.openDrawer}}>
// 					<Feather name="menu" size={30} color="#fff" />
// 				</TouchableOpacity>
// 				<Text>Hello from ProfileScreen</Text>
// 			</View>
// 		);
// 	}
// }

// export default ProfileScreen;
import React from "react";
import { View,Text,Button } from "react-native";


function Profile({ navigation }) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Screen</Text>
          
        </View>
      );
    }

    export default Profile;