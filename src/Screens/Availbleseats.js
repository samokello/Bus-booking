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
import { Context } from "../../context/BusContext";
import Apploader from "../../Components/Apploader";
import Seat32 from "../../Components/Seat32";
import Seat44 from "../../Components/Seat44";

const Availableveseats = ({ navigation }) => {
  const [fetchData, setFetchData] = useState([]);
  const [isPress, setIsPress] = React.useState(false);

  const { busState, loader } = useContext(Context);
  const [singleBus, setSingleBus] = busState;
  const [loading, setLoading] = loader;

  useEffect(() => {
    const fetchQuotes = async () => {
      const querySnapshot = await getDocs(collection(db, "Buses"));

      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        setFetchData((prev) => [...prev, doc.data()]);
      });

      if (querySnapshot._firestore) {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);
  useEffect(() => {}, [fetchData]);

  return (
    <>
      <ScrollView>
        <View>
          {fetchData.map((item, index) => {
            if (singleBus === fetchData.indexOf(item)) {
              // console.log(item.seats);
              if (item.seats == 32) {
                return <Seat32 />;
              } else {
                return <Seat44 />;
              }
            }
          })}
        </View>
      </ScrollView>
      {loading && <Apploader />}
    </>
  );
};

export default Availableveseats;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E8769",
    width: "90%",
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
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderRadius: 5,
  },
  seats: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  seat1: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
  },
  seat2: {
    backgroundColor: "#0E8769",
    padding: 5,
    borderRadius: 5,
  },
  seat3: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
  },
  proceed: {
    backgroundColor: "#0E8769",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
  seatSelected: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
