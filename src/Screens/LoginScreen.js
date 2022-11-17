import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";
import Apploader from "../../Components/Apploader";
const image = {
  uri: "https://images.unsplash.com/photo-1595120483442-c5a90a2066ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPending, setLoginPending] = useState(false);

  const loginUser = async (email, password) => {
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setLoginPending(false);

      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {loginPending ? <Apploader /> : <Text>nnn</Text>}

      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <KeyboardAwareScrollView
            style={{ flex: 1, width: "100%", backgroundColor: "#000000c0" }}
            keyboardShouldPersistTaps="always"
          >
            <Image
              source={require("../../assets/ttt.png")}
              style={styles.imageHolder}
            />
            <View style={styles.arrow}>
              <Text style={styles.text1}>
                Login here <Feather name="arrow-down" size={24} />
              </Text>
            </View>

            <View style={styles.loginholder}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => loginUser(email, password)}
              >
                <Text style={styles.buttonTitle}>Log in</Text>
              </TouchableOpacity>

              <View style={styles.footerView}>
                <Text style={styles.text}>
                  Don't have an account?{" "}
                  <Text
                    onPress={() => navigation.navigate("Register")}
                    style={styles.footerLink}
                  >
                    Sign up
                  </Text>
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>

      {/* <Apploader /> */}
    </>
  );
  // }
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
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
    marginTop: 30,
    height: 48,
    borderRadius: 50,
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
    color: "#fff",
  },
  footerLink: {
    color: "#0E8769",
    fontWeight: "bold",
    fontSize: 16,
  },

  img: {
    width: "100%",
    borderRadius: 5,
    height: "100%",
  },
  header: {
    height: "10%",
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    lineHeight: 84,
    fontWeight: "bold",
  },
  loginholder: {
    alignSelf: "center",
    width: "100%",
  },
  imageHolder: {
    alignSelf: "center",
  },
  text1: {
    color: "white",
    fontSize: 40,
    lineHeight: 74,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    marginLeft: 30,
  },
  arrow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
