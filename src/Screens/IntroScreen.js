import react, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	SafeAreaView,
	Button,
	TouchableOpacity,
	Dimensions,
	StatusBar,
	ScrollView,
	TextInput,
} from "react-native";
import { Feather } from "react-native-feather";
import ImageSlider from "../../Components/Imageslider";

function IntroScreen({ navigation }) {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.introslide}>
				<ImageSlider />
			</View>

			<View style={styles.thankyou}>
				<Text style={styles.introText}>Thank you For Choosing Bus-lite</Text>
			</View>

			<View style={styles.welcome}>
				<View>
					<Text style={styles.thankyoutext}>Welcome Aboard</Text>
					<Text style={styles.text1}>
						Search and compare real time prices from multiple bus operators
						around kenya
					</Text>
				</View>

				<View style={styles.touchableview}>
					<TouchableOpacity
						style={styles.register}
						onPress={() => navigation.navigate("Seats")}
						title="register"
					>
						<Text style={styles.registerT}>Register</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.sign}
						onPress={() => navigation.navigate("Login")}
					>
						<Text style={styles.text}>Sign in</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
					<Text style={styles.skip}>To Sign Up Later? Skip</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0E8769",
		height: "100%",
	},
	skip: {
		textAlign: "center",
		color: "#0E8769",
		fontSize: 20,
		marginTop: 20,
	},

	register: {
		backgroundColor: "#0E8769",
		color: "black",
		fontSize: 50,
		padding: 20,
		width: 150,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		textAlign: "center",
	},

	sign: {
		backgroundColor: "black",
		fontSize: 50,
		color: "#fff",
		padding: 20,
		width: 150,
		borderBottomEndRadius: 10,
		borderTopRightRadius: 10,
		textAlign: "center",
	},

	touchableview: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		width: "50%",
		backgroundColor: "#000",
		marginLeft: 85,
		marginTop: 40,
	},

	text: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
		lineHeight: 30,
	},
	introText: {
		fontSize: 30,
		color: "#fff",
		textAlign: "center",
		fontWeight: "bold",
	},
	text1: {
		fontSize: 20,
		color: "#0E8769",
		textAlign: "center",
		fontWeight: "bold",
	},
	registerT: {
		color: "#fff",
		textAlign: "center",
		fontSize: 20,
	},

	welcome: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: 10,
		marginTop: 10,
		height: "100%",
	},
	introslide: {
		marginTop: 50,
	},
	thankyou: {
		margin: 40,
	},
	thankyoutext: {
		fontWeight: "bold",
		fontSize: 25,
		color: "#0E8769",
		alignSelf: "center",
	},
});

export default IntroScreen;
