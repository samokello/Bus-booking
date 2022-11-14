import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	ScrollView,
	Button,
	Image,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadString, uploadBytes } from "firebase/storage";

const BusesResgistration = () => {
	const [image, setImage] = useState(null);
	const [message, setMessage] = useState("");
	const [color, setColor] = useState("");
	const [formData, setFormData] = useState({
		busBrand: "",
		seats: "",
		time: "",
		route: "",
		numberPlate: "",
		toroute: "",
		image: "",
		price: "",
	});
	async function Register() {
		try {
			await addDoc(collection(db, "Buses"), formData);
			setMessage("Bus registered succesfully");
			setColor("#0000");

			console.log(formData);
		} catch (e) {}
	}

	let openImagePickerAsync = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		const fileName = pickerResult.uri.split("/");
		console.log(fileName[fileName.length - 1]);


		setFormData(prev=>({...prev, image:"https://firebasestorage.googleapis.com/v0/b/bus-booking-a86d8.appspot.com/o/images%2Ffile%3A%2C%2C%2Cdata%2Cuser%2C0%2Chost.exp.exponent%2Ccache%2CImagePicker%2C" + fileName[fileName.length - 1] + "?alt=media" }))

		const storageRef = ref(storage, "images/" + fileName);
		const file = await fetch(pickerResult.uri);
		const blob = await file.blob();
		console.log(blob);
		await uploadBytes(storageRef, blob);

	};

	return (
		<ScrollView>
			<View>
				<View style={styles.block}>
					<Text
						style={{
							textAlign: "center",
							margin: 0,
							fontSize: 30,
							paddingBottom: 12,
							color: "white",
						}}
					>
						Register Bus
					</Text>
				</View>
				<View style={styles.curve}>
					<Text
						style={{
							textAlign: "center",
							marginTop: 10,
							marginLeft: 10,
							marginRight: 10,
							marginTop: 20,
							paddingTop: 15,
							paddingBottom: 15,
							color: color,
							fontSize: 20,
						}}
					>
						{message}
					</Text>
				</View>
				<View>
					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Company"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, busBrand: text }))
						}
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Number of seats"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, seats: text }))
						}
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Route of Travell"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, route: text }))
						}
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="To Route"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, toroute: text }))
						}
					/>

					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Number plate"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, numberPlate: text }))
						}
					/>
					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Time of Depature"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, time: text }))
						}
					/>

					<TextInput
						style={styles.input}
						placeholderTextColor="#AAAAAA"
						placeholder="Price"
						underlineColorAndroid="transparent"
						autoCapitalize="none"
						onChangeText={text =>
							setFormData(prev => ({ ...prev, price: text }))
						}
					/>

					<View style={styles.container}>
						<TouchableOpacity
							onPress={openImagePickerAsync}
							style={styles.button}
							onChangeText={text =>
								setFormData(prev => ({ ...prev, image: text }))
							}
						>
							<Text style={styles.buttonTitle}>Pick a photo</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity style={styles.button} onPress={Register}>
						<Text style={styles.buttonTitle}>Register Buses</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
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
		backgroundColor: "#0E8769",
		marginLeft: 30,
		marginRight: 30,
		marginTop: 20,
		height: 48,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonTitle: {
		color: "#fff",
	},
	block: {
		backgroundColor: "#0E8769",
		paddingTop: 30,
		paddingBottom: 30,
	},
	curve: {
		backgroundColor: "#0E8769",
		height: "10%",
		borderRadius: 100,
		marginTop: -25,
	},
});
export default BusesResgistration;
