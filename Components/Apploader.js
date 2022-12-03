import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Apploader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require("../assets/loader1.json")}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Apploader;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fff",
    zIndex: 1,
  },

  loader: {
    width: 100,
    height: 100,
  },
});
