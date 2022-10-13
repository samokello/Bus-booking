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
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../firebase/config";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { RadioButton } from "react-native-paper";

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
						url: "https://bus-lite.firebaseapp.com",
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
			<View style={styles.header}></View>

			<View>
				<Text>Would you like to travel with us? Register here</Text>
			</View>

			<KeyboardAwareScrollView
				style={{ flex: 1, width: "100%" }}
				keyboardShouldPersistTaps="always"
			>
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
				<Text style={{ textAlign: "center" }}>Register as :</Text>

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
						<Text>Traveller</Text>
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
						<Text>Campany</Text>
					</View>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={() => registerUser(email, password, fullName)}
				>
					<Text style={styles.buttonTitle}>Create account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?{" "}
						<Text
							style={styles.footerLink}
							onPress={() => navigation.navigate("Login")}
						>
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	title: {},
	logo: {
		flex: 1,
		height: 120,
		width: 90,
		alignSelf: "center",
		margin: 30,
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: "hidden",
		backgroundColor: "white",
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: "#788eec",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
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
		color: "#2e2e2d",
	},
	footerLink: {
		color: "#788eec",
		fontWeight: "bold",
		fontSize: 16,
	},
	img: {
		borderRadius: 5,
		marginTop: 5,
	},

	check: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	radioholder: {
		display: "flex",
		alignItems: "center",
		gap: 5,
		flexDirection: "row",
	},
	header: {
		height: "10%",
		backgroundColor: "#fff",
	},
});
