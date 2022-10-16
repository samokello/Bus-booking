import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ImageSlider from "../../Components/Imageslider";


const HomeScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<View>
				<View style={styles.nav}>
					<Text>LOGO</Text>
					<Feather name="phone" size={25} />
				</View>

				<View style={styles.inputDisplay}>
					<Image
						source={require("../../assets/station.png")}
						style={{ width: "10%", height: "60%", paddingLeft: 20 }}
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#aaaaaa"
						placeholder="Select from city"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
				</View>

				<View style={styles.arrows}>
					<Feather name="arrow-down" size={24} color={"#fff"} />
					<Feather name="arrow-up" size={24} color={"#fff"} />
				</View>

				<View style={styles.inputDisplay}>
					<Feather name="map-pin" size={30} color={"red"} />

					<TextInput
						style={styles.input}
						placeholderTextColor="#aaaaaa"
						placeholder="Select to city"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
					/>
				</View>

				<View>
					<TouchableOpacity style={styles.searchBus}>
						<Text style={styles.search}>SEARCH BUS</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.quicksearch}>
					<View>
						<Text style={{ fontSize: 30, textAlign: "center" }}>
							Why Bus-lite ?
						</Text>
					</View>

					<View style={styles.whyUs}>
						<View style={styles.whyImages}>
						<Image
							source={require("../../assets/comfort.png")}
							style={{ width: 100, height: 100,padding:20}}
						/>
						</View>
						<Text style={styles.mybusText}>COMFORT</Text>
						<Text>
							Our fleet of coaches is best -in-class and regularly
							maintained.Super-comfortable seats and free WI-FI
						</Text>
					</View>

					<View style={styles.whyUs} >
						<View style={styles.whyImages}>
						<Image
							source={require("../../assets/clock.png")}
							style={{ width: 100, height: 100, }}
						/>
						</View>

						<Text style={styles.mybusText}>PANCTUALITY</Text>
						<Text>We value your time and hence ,ensure on time departure</Text>
					</View>

					<View style={styles.whyUs}>
						<View style={styles.whyImages}>
						<Image
							source={require("../../assets/price.png")}
							style={{ width: 100, height: 100, paddingLeft: 20 }}
						/>
						</View>

						<Text style={styles.mybusText}>PRICING</Text>
						<Text>
							Save money with unstapable pricing. We promise best value for your
							money
						</Text>
					</View>

					<View style={styles.whyUs}>
						<View style={styles.whyImages}>
						<Image
							source={require("../../assets/convinient.png")}
							style={{ width: 100, height: 100, paddingLeft: 20 ,borderRadius:5}}
						/>
						</View>
						<Text style={styles.mybusText}>CONVINIENT</Text>
						<Text>
							With up-to-date and current bus schedules, helpful staff and
							friendly on-site bus drivers,There isn't a thing that you need to
							worry about while travelling with us{" "}
						</Text>
					</View>

					<View >
				<ImageSlider/>
				</View>
				
				</View>

				
			</View>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	nav: {
		backgroundColor: "#fff",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
		margin:10,
		borderRadius: 5,

	},
	container: {
		backgroundColor: "#0E8769",
		height: "100%",
	},
	input: {
		height: 30,
		borderRadius: 5,
		overflow: "hidden",
		marginRight: 30,
		paddingLeft: 16,
		marginTop: 10,
		marginBottom: 10,
		width: "80%",
	},
	inputDisplay: {
		flexDirection: "row",
		display: "flex",
		alignItems: "center",
		marginLeft: 30,
		backgroundColor: "#fff",
		marginTop: 20,
		width: "80%",
		alignItems: "center",
		borderRadius: 5,
	},
	arrows: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "red",
		width: 50,
		alignSelf: "center",
		borderRadius: 10,
		position: "absolute",
		bottom: 50,
		height: 50,
		left: "100%",
	},
	searchBus: {
		width: "80%",
		backgroundColor: "#e9ecef",
		borderRadius: 5,
		marginLeft: 10,
		marginRight: 30,
		marginTop: 20,
		marginBottom: 10,
		alignSelf: "center",
	},
	search: {
		textAlign: "center",
		padding: 15,
	},
	quicksearch: {
		backgroundColor: "#fff",
		height: "100%",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: 10,
		marginTop:30
	},
	whyUs:{
		alignItems:"center",
		padding:20,
		borderBottomColor:"darkgray",
		borderBottomWidth: 1,
	},
	mybusText:{
		fontWeight:"bold",
		padding:20
	},
	whyImages:{
		borderWidth:5,
		padding:20,
		borderRadius:100,
		borderColor:"#0E8769"
	},
	gallery:{
		borderRadius:10
	}
});
