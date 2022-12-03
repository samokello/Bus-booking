import React, { useRef, useState, useEffect, useContext } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BusContext";

const Mpesa = () => {
  const {  busState, loader, busData, total } = useContext(Context);

  const [totalPrice, setTotalPrice] = total;
  const [singleBus, setSingleBus] = busState;

  const [mpesaData, setMpesaData] = useState({
    phone: "",
    amount: totalPrice,
  });

  const mpesaHandle = () => {
    const url = "https://bus-lite-mpesa.onrender.com/api/stk/push";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mpesaData),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMpesaData(data);
      });
  };

  return (
    <View style={styles.container}>


      <View style={styles.pesaText}>
        <Text style={styles.payText}>Do you want to pay <Text style={styles.ksh}>Ksh {totalPrice}</Text></Text>
      </View>

      <TextInput
        style={styles.input}
        placeholderTextColor="#AAAAAA"
        placeholder="Enter mobile number"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        onChangeText={(text) =>
          setMpesaData((prev) => ({ ...prev, phone: text }))
        }
      />

      <TouchableOpacity style={styles.button} onPress={mpesaHandle}>
        <Text style={styles.buttonTitle}>Pay</Text>
      </TouchableOpacity>

      <Feather name="" size={30} />
    </View>
  );
};

export default Mpesa;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "green",
    alignSelf: "center",
    height: "80%",
    padding: 10,
    borderRadius: "5px",
  },
  input: {
    height: 48,
    borderRadius: 50,
    overflow: "hidden",
    margin: 30,
    paddingLeft: 16,
    backgroundColor: "lightgrey",
  },
  button: {
    backgroundColor: "#0E8769",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#FFFF",
    fontWeight: "bold",
  },
  pesaText: {
    backgroundColor: "#fff",
    padding: 10,
  },
  payText: {
    fontWeight: "bold",
    fontSize: 20,
	textAlign: "center"
  },
  ksh:{
	color:"green"
  }
});
