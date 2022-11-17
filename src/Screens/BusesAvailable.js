import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Feather } from "@expo/vector-icons";
import { Context } from "../../context/BusContext";

const BusesAvailabe = ({ navigation }) => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);


	const {busState} = useContext(Context);
	const [singleBus, setSingleBus] = busState;

  useEffect(() => {
    const fetchQuotes = async () => {
      const querySnapshot = await getDocs(collection(db, "Buses"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        setFetchData((prev) => [...prev, doc.data()]);
      });
    };
    fetchQuotes();
  }, []);

  useEffect(() => {}, [fetchData]);

  
  return (
    <ScrollView style={styles.container}>
      <Text>Click the buses for booking</Text>
      
        {fetchData.map((item, index) => {
			console.log(fetchData.indexOf(item));
			
          return (
			<TouchableOpacity onPress={() => {
				navigation.navigate("Book Seats")
				setSingleBus(index)
				}}>
            <View style={styles.container2} key={index}>
              <View>
                <View style={styles.root}>
                  <Text key={item.route} style={styles.destinText1}>
                    {item.route}
                  </Text>

                  <Feather name="arrow-right" size={30} color="#fff" />

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
                  </View>
                </View>
              </View>
            </View>
			</TouchableOpacity>

          );
        })}
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
    padding: 2,
    justifyContent: "space-around",
    margin: 10,
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
    height: 125,
    borderRadius: 10,
  },
  container3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  destinText1: {
    fontSize: 30,
    color: "#fff",
  },
  buses: {
    width: "55%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
