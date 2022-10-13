import React, { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	ImageBackground,
	ScrollView,
	Button
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import CalendarPicker from "react-native-calendar-picker";
import Modal from "react-native-modal"
import style from "react-native-custom-calendars/src/calendar/header/style";
import Calendar from "../../Components/Calendar";



const HomeScreen = ({ navigation }) => {
	const [checked, setChecked] = React.useState("first");
	const [user, setUser] = useState("");
	const [isModalVisible, setModalVisible] = useState(false);


	
	  

	const auth = getAuth();
	onAuthStateChanged(auth, user => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			console.log(user.user);
			// ...
		} else {
			// User is signed out
			console.log("user is not signed in");
			// ...
		}
	});

	

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	  };
	return (
		<View style={styles.container}>	
		<View style={styles.background}>
		<Image source={require('../../assets/home.jpg')} 
		  style={{ width:"100%", height: "100%" }}

		/>

<View style={styles.oneway}>
	<Text style={styles.destineColor}>Where To ?</Text>
					<View style={styles.user1}>
						<View style={styles.wayIcon}>
							<Text>One Way</Text>
							<Feather name="chevron-down"size={30} color={"#fff"} />
						</View>

						<View style={styles.user}>
							<Feather name="user" size={30} color={"#fff"}/>
							<Text>1</Text>
						</View>
					</View>
					<View>
						<TextInput
							style={styles.input}
							placeholderTextColor="#aaaaaa"
							placeholder="City,Station ?"
							underlineColorAndroid="transparent"
							autoCapitalize="none"
						/>

						<View style={styles.arrows}>
							<Feather name="arrow-down" size={24} color={"#fff"}/>
							<Feather name="arrow-up" size={24} color={"#fff"}/>
						</View>

						<TextInput
							style={styles.input}
							placeholderTextColor="#aaaaaa"
							placeholder="City,Station ?"
							underlineColorAndroid="transparent"
							autoCapitalize="none"
						/>
					</View>




						<View style={styles.callenderHolder}>
							<View style={styles.dates} onPress={toggleModal}>
								<Feather name="calendar" size={24}  />
								<TextInput 
									style={styles.calender}
									placeholderTextColor="#aaaaaa"
									placeholder="Departure date"
									underlineColorAndroid="transparent"
									autoCapitalize="none"
									mode="contained"
								/>
							</View>

							<View style={styles.dates}>
								<Feather name="plus" size={24} />
								<TextInput
									style={styles.calender}
									placeholderTextColor="#aaaaaa"
									placeholder="Return Date"
									underlineColorAndroid="transparent"
									autoCapitalize="none"
								/>
							</View>
						</View>


						
						<View>
							<View>
								<Text style={styles.search}>Need a place to stay?</Text>
							</View>
							<TouchableOpacity style={styles.searchBus}>
								<Text style={styles.search}>Search Bus</Text>
							</TouchableOpacity>
						</View>


						<View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
		<View>
<Calendar/>
<Button title="Hide modal" onPress={toggleModal} />

	</View>		
      </Modal>
    </View>




					</View>

		</View>

				


				</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	input: {
		height: 48,
		borderRadius: 5,
		overflow: "hidden",
		backgroundColor: "#e9ecef",
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
		marginTop: 10,
		marginBottom: 10,
	},
	destineColor: {
		color: "#fff",
		fontSize:30
	},

	oneway: {
		width: "100%",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: 10,
		backgroundColor: "#2346FF",
		display: "flex",
		flexDirection: "column",
		position:"absolute",
		top:"70%"
	},
	container: {
		backgroundColor: "#2346FF",
		height: "100%",
	},
	wayIcon: {
		display: "flex",
		flexDirection: "row",
	},
	user: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	user1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	arrows: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#0E8769",
		width: 50,
		alignSelf: "center",
		borderRadius: 10,

	},
	calender: {
		height: 20,
		borderRadius: 5,
		overflow: "hidden",
		marginTop: 10,
		marginBottom: 10,
	},
	callenderHolder: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	searchBus: {
		width: "50%",
		backgroundColor: "#e9ecef",
		height: 48,
		borderRadius: 5,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
		marginTop: 10,
		marginBottom: 10,
		alignSelf: "center",
	},
	search: {
		textAlign: "center",
		paddingTop: 10,
	},
	dates: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		width: "40%",
		borderWidth: 1,
		borderRadius: 10,
		borderColor:"#fff"

	},
	calender1: {
		backgroundColor: "#fff",
	},
	background:{
		height:"50%",
		position:"relative"
	}

});
