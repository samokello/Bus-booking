import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Feather } from "@expo/vector-icons";

const BusesAvailabe = ({ navigation }) => {
	const [fetchData, setFetchData] = useState([]);
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
	return (
		<ScrollView style={styles.container}>
			<View>
				{fetchData.map(item => {
					return (
						<View style={styles.container2}>
							<View>
								<View style={styles.root}>
									<Text key={item.route} style={styles.destinText1}>
										 {item.route}
									</Text>

									<Feather
										name="arrow-right"
										size={30}
										color="#fff"
										
									/>

									<Text key={item.toroute} style={styles.destinText1}>
										{item.toroute}
									</Text>
								</View>

								<View style={styles.container3}>
									<View style={styles.buses}>
										<Image style={styles.image} source={{ uri: item.image }} />
									</View>
									<View>
										<Text key={item.busBrand} style={styles.bookText1}>
											Bus: {item.busBrand}
										</Text>
										<Text key={item.seats} style={styles.bookText1}>
											Total seats:{item.seats}
										</Text>
						
										<Text key={item.time} style={styles.bookText1}>
											 Time:{item.time}
										</Text>
										<Text key={item.price} style={styles.bookText1}>
											Ksh:{item.price}
										</Text>

										{/* <TouchableOpacity
									style={styles.booking}
									onPress={() => navigation.navigate("Availbleseats")}
								>
									<Text style={styles.bookText}>Available for booking</Text>
								</TouchableOpacity> */}
									</View>
								</View>
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default BusesAvailabe;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#fff",
	},
	busContainer: {
		backgroundColor: "#0E8769",
		width: "90%",
		alignSelf: "center",
		borderRadius: 10,
		padding: 20,
		marginTop: 10,
	},
	availablebtn: {
		backgroundColor: "#fff",
		width: "50%",
		padding: 8,
		borderRadius: 5,
		alignSelf: "center",
		marginTop: 10,
	},

	booking: {
		height: 50,
		width: "80%",
		backgroundColor: "#fff",
		borderRadius: 10,
		alignSelf: "center",
		margin: 10,
	},
	bookText: {
		textAlign: "center",
		paddingTop: 15,
		fontSize: 15,
	},
	root: {
		display: "flex",
		flexDirection: "row",
		padding:2,
		justifyContent: "space-around",
		margin:10,
		alignItems: "center",

		
	},
	bookText1: {
		paddingTop: 15,
		fontSize: 18,
	},

	container2: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#0E8769",
		margin: 5,
		padding: 5,
		borderRadius: 5,
	},
	image: {
		width: "100%",
		height:125,
		borderRadius: 10,

	},
	container3:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	destinText1: {
		fontSize: 30,
		color:"#fff"
	},
	buses:{
width:"55%",
backgroundColor: "#fff",
borderRadius: 10,
	}
});
