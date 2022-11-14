import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image,
	TouchableHighlight,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Feather } from "@expo/vector-icons";
import BusesAvailabe from "./BusesAvailable";

const Availableveseats = ({ navigation }) => {
	const [fetchData, setFetchData] = useState([]);
	const [isPress, setIsPress] = React.useState(false);
	

	useEffect(() => {
		const fetchQuotes = async () => {
			const querySnapshot = await getDocs(collection(db, "Buses"));
			querySnapshot.forEach(doc => {
				setFetchData(prev => [...prev, doc.data()]);
			});
		};
		fetchQuotes();
	}, []);
	useEffect(() => {}, [fetchData]);

	const HundleSeats = () => {
alert("seat clicked")	};
	return (
		<ScrollView style={styles.container}>

			<View>
				<View>
					<Image
						source={require("../../assets/steering.png")}
						style={{ width: 50, height: 50, margin: 10, alignSelf: "flex-end" }}
					/>
				</View>
				{fetchData.map(item => {
					let seats = [];
					for (let i = 1; i <= item.seats; i++) {
						seats.push(i);
					}
					return (
						<View style={styles.list}>
							{seats.map(nums => {
								return (
									<View style={styles.item}>
										<TouchableOpacity onPress={HundleSeats}>
											<Image
												source={require("../../assets/chair.png")}
												style={{
													width: 30,
													height: 30,
													margin: 10,
												}}
											/>

											<Text key={item}>{nums}</Text>
										</TouchableOpacity>
									</View>
								);
							})}
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default Availableveseats;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0E8769",
		width: "80%",
		alignSelf: "center",
		marginTop: 20,
		borderRadius: 5,
	},
	list: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	item: {
		backgroundColor: "#fff",
		backgroundColor: "#fff",
		padding: 2,
		margin: 5,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "30%",
		flexWrap: "wrap",
		justifyContent: "space-around",
		borderRadius: 5,
	},
	btnPress: {
		borderColor: "blue",
		borderWidth: 1,
		height: 30,
		width: 100,
	},
});
