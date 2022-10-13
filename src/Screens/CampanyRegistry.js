import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {firebase} from "../firebase/config";

const Booking=({ navigation })=> {
  const [campanyName, setCampanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);


 const registerUser = async (email, password, campanyName) => {
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
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                campanyName,
                email,
              });
          })
          .catch(() => {
            alert(error.message);
          });
      })
      .catch((error => {
        alert(error.message);
      }));
  };



  return (
    <View style={styles.container}>
      <View>
        <Text>Register Your Campany Here!!</Text>
      </View>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        
        <TextInput
          style={styles.input}
          placeholder="Campany Name / Brand"
          placeholderTextColor="#aaaaaa"
          onChangeText={(campanyName) => setCampanyName(campanyName)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(email) => setEmail(email)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
            <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

<TouchableOpacity
          style={styles.button}
          onPress={() => registerUser(email, password, campanyName)}
        >
          <Text style={styles.buttonTitle}>Register Now</Text>
        </TouchableOpacity>

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text style={styles.footerLink} onPress={()=>navigation.navigate("Login")}>

              Log in
            </Text>
          </Text>
        </View>


      </KeyboardAwareScrollView>
    </View>
  );
}

export default Booking;

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
  img:{
    width:"100%",
    borderRadius: 5,
    height: "70%",
    marginTop:5
}
});
