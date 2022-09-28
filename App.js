import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Registerscreen from "./src/Screens/Registerscreen";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import IntroScreen from "./src/Screens/IntroScreen";
import GeoLocation from "./src/Screens/GeoLocation";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Register: Registerscreen,
    Login:LoginScreen,
    Introduction:IntroScreen,
    Gps:GeoLocation
  },
  {
    initialRouteName: "Gps",
    defaultNavigationOptions: {
      title: "Home",
      headerStyle: {
        backgroundColor: "#0000FF",
      },
      headerTintColor: "#fff",
      headerBackTitleStyle: {
        fontWeight: "bold",
      
      },
    },
  }
);
export default createAppContainer(navigator);
