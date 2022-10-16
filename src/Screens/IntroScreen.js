import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ScrollView,

} from "react-native";
import ImageSlider from "../../Components/Imageslider";
// import { useNavigation } from '@react-navigation/native';
import HomeScreen from "./HomeScreen";




const images = [
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  "https://imgs.search.brave.com/bGyVvJd-0XPNnUnUtnRYT0yyRHVb6kDS8RGrRJ8yVxg/rs:fit:668:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/WHpqWHZuNnFua2hE/ZTBwd1lBVWR3SGFG/USZwaWQ9QXBp",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

function IntroScreen({navigation}) {
  // const navigation = useNavigation(); 
  const [imgActive, setimgActive] = useState(0);
  onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent + nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
        
      }
    }
  };


  return (
    <SafeAreaView style={styles.container}>

<View style={styles.header}>
  <Text style={styles.headerText}>Thank You For Choosing To Travel With Us.Travel At Your Comfort</Text>
				</View>


      {/* <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}
            >
            ●
            </Text>
          ))}
        </View>
      </View> */}

<View>
<ImageSlider/>
</View>


      <View>
        <Text style={styles.introText}>Welcome Aboard</Text>
        <Text style={styles.text}>
          Search and compare real time prices from multiple bus operators around
          kenya
        </Text>
      </View>

      <View style={styles.touchableview}>
        <TouchableOpacity style={styles.register} onPress={()=>navigation.navigate("Register")} title="register">
          <Text style={styles.registerT}>Register</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.sign} onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("Drawer")}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E8769",
    height: "100%",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },

  dot: {
    margin: 3,
    color: "#888",
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  skip: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
  },
  stretch: {
    width: 200,
    height: 200,
    margin: 50,
  },

  register: {
    backgroundColor: "#fff",
    color: "black",
    fontSize: 50,
    padding: 20,
    width: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
  },

  sign: {
    backgroundColor: "black",
    fontSize: 50,
    color: "#fff",
    padding: 20,
    width: 150,
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
    textAlign: "center",
  },

  touchableview: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: 200,
    backgroundColor: "#000",
    marginLeft: 85,
    marginTop: 40,
  },

  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  introText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  registerT: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  slide: {
    paddingLeft: 30,
    borderBottomEndRadius: 10,
  },
  header:{
		height:"10%",
		backgroundColor:"#fff",
		
	},
  headerText:{
    textAlign:"center",
    marginTop:30,
    fontSize:20,
    backgroundColor:"#0E8769",
    
  }
});

export default IntroScreen;
