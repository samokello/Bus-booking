import React, { useState } from "react";

import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Mpesa = () => {
	const [mpesaData, setMpesaData] = useState({
		phone: "",
		amount: "",
	});

	const mpesaHandle = () => {
		const url = "https://bus-lite-mpesa.onrender.com/api/stk/push";

		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(mpesaData),
		};

		fetch(url, options)
			.then(res => res.json())
			.then(data => setMpesaData(data));
	};

	return (
		<View style={[StyleSheet.absoluteFillObject, styles.container]}>
			<TextInput
				style={styles.input}
				placeholderTextColor="#AAAAAA"
				placeholder="Enter Number"
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				onChangeText={text => setMpesaData(prev => ({ ...prev, phone: text }))}
			/>

			<TextInput
				style={styles.input}
				placeholderTextColor="#AAAAAA"
				placeholder="Enter Amount"
				underlineColorAndroid="transparent"
				autoCapitalize="none"
				onChangeText={text => setMpesaData(prev => ({ ...prev, amount: text }))}
			/>

			<TouchableOpacity style={styles.button} onPress={mpesaHandle}>
				<Text style={styles.buttonTitle}>Pay</Text>
			</TouchableOpacity>

			<Feather name=""  size={30}/>
		</View>
	);
};

export default Mpesa;

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignSelf:"center",
		marginTop:"50%"
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
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
});
