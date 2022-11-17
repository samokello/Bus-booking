import React, { useEffect, useState, useContext } from "react";
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
import {Context} from "../../context/BusContext";

const Availableveseats = ({ navigation }) => {
	const [fetchData, setFetchData] = useState([]);
	const [isPress, setIsPress] = React.useState(false);

	const {busState} = useContext(Context);
	const [singleBus, setSingleBus] = busState;
	

	useEffect(() => {
		const fetchQuotes = async () => {
			const querySnapshot = await getDocs(collection(db, "Buses"));
			querySnapshot.forEach(doc => {
				console.log(doc.id)
				setFetchData(prev => [...prev, doc.data()]);
			});
		};
		fetchQuotes();
	}, []);
	useEffect(() => {}, [fetchData]);

	const HundleSeats = (item) => {
		if (item.seats === 0 || item.seats === 1) { 
			alert("aww, I do not see any seats left");
		 } else { 
			alert("You got yourself a seat"); 
		 }	};

	return (
		<ScrollView style={styles.container}>
{console.log(singleBus)}
			<View>
				<View>
					<Image
						source={require("../../assets/steering.png")}
						style={{ width: 50, height: 50, margin: 10, alignSelf: "flex-end" }}
					/>
				</View>
				{fetchData.map((item, index) => {
					if(singleBus === fetchData.indexOf(item)){
					let seats = [];
					for (let i = 1; i <= item.seats; i++) {
						seats.push(i);
					}
					return (
						<View style={styles.list}>
							{seats.map((nums, index) => {

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
}
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
