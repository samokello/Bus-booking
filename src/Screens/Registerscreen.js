import React, { useState } from "react";
import {
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	StyleSheet,
	StatusBar,
	ScrollView,
	ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";
import { firebase } from "../firebase/config";
const image = {
	uri: "https://images.unsplash.com/photo-1590922103128-3b7bdffee07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80",
};

export default function Registerscreen({ navigation }) {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");
	const [loggedIn, setloggedIn] = useState(false);
	const [userInfo, setuserInfo] = useState([]);
	const [checked, setChecked] = React.useState("first");

	const registerUser = async (email, password, fullName) => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				firebase
					.auth()
					.currentUser.sendEmailVerification({
						handleCodeInApp: true,
						url: "https://bus-booking-a86d8.firebaseapp.com",
					})
					.then(() => {
						alert("verification sent to the email");
					})
					.catch(error => {
						alert(error.message);
					})
					.then(() => {
						firebase
							.firestore()
							.collection("users")
							.doc(firebase.auth().currentUser.uid)
							.set({
								fullName,
								email,
								user,
							});
					})
					.catch(() => {
						alert(error.message);
					});
			})
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.image}>
				<KeyboardAwareScrollView
					style={{ flex: 1, width: "100%", backgroundColor: "#000000c0" }}
					keyboardShouldPersistTaps="always"
				>
					<Image
						source={require("../../assets/ttt.png")}
						style={styles.imageHolder}
					/>

					<View style={styles.arrow}>
						<Text style={styles.text1}>
							Register here <Feather name="arrow-down" size={24} />
						</Text>
					</View>

					<View style={styles.loginholder}>
						<TextInput
							style={styles.input}
							placeholder="Full Name"
							placeholderTextColor="#aaaaaa"
							onChangeText={fullName => setFullName(fullName)}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.input}
							placeholder="E-mail"
							placeholderTextColor="#aaaaaa"
							onChangeText={email => setEmail(email)}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.input}
							placeholderTextColor="#aaaaaa"
							secureTextEntry
							placeholder="Password"
							onChangeText={password => setPassword(password)}
							underlineColorAndroid="transparent"
							autoCapitalize="none"
						/>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontWeight: "bold",
								fontSize: 22,
							}}
						>
							Register as :
						</Text>

						<View style={styles.check}>
							<View style={styles.radioholder}>
								<RadioButton
									value="first"
									status={checked === "first" ? "checked" : "unchecked"}
									onPress={() => {
										setChecked("first");
										setUser("traveller");
									}}
								/>
								<Text style={styles.text}>Traveller</Text>
							</View>

							<View style={styles.radioholder}>
								<RadioButton
									value="second"
									status={checked === "second" ? "checked" : "unchecked"}
									onPress={() => {
										setChecked("second");
										setUser("company");
									}}
									title={"Campany"}
								/>
								<Text style={styles.text}>Campany</Text>
							</View>
						</View>

						<TouchableOpacity
							style={styles.button}
							onPress={() => registerUser(email, password, fullName)}
						>
							<Text style={styles.buttonTitle}>Create account</Text>
						</TouchableOpacity>
						<View style={styles.footerView}>
							<Text style={styles.text}>
								Already got an account?{" "}
								<Text
									style={styles.footerLink}
									onPress={() => navigation.navigate("Login")}
								>
									Log in
								</Text>
							</Text>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},

	logo: {
		flex: 1,
		height: 120,
		width: 90,
		alignSelf: "center",
		margin: 30,
	},
	input: {
		height: 48,
		borderRadius: 50,
		overflow: "hidden",
		backgroundColor: "white",
		marginTop: 30,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: "#0E8769",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 30,
		height: 48,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	footerView: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: "#fff",
	},
	footerLink: {
		color: "#0E8769",
		fontWeight: "bold",
		fontSize: 16,
	},

	img: {
		width: "100%",
		borderRadius: 5,
		height: "100%",
	},
	header: {
		height: "10%",
		backgroundColor: "#fff",
	},

	image: {
		flex: 1,
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 15,
		fontWeight: "bold",
	},
	loginholder: {
		alignSelf: "center",
		width: "100%",
	},
	imageHolder: {
		alignSelf: "center",
	},
	text1: {
		color: "white",
		fontSize: 40,
		lineHeight: 74,
		fontWeight: "bold",
		textAlign: "center",
		marginLeft: 30,

	},
	arrow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	check: {
		display: "flex",
		justifyContent: "center",
		gap: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	radioholder: {
		display: "flex",
		justifyContent: "center",
		gap: 5,
		flexDirection: "row",
		alignItems: "center",
	},
});
