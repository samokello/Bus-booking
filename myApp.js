import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Registerscreen from "./src/Screens/Registerscreen";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import IntroScreen from "./src/Screens/IntroScreen";
import Booking from "./src/Screens/CampanyRegistry"
import DrawerScreen from "./src/Screens/DrawerScreen";

const navigator = createStackNavigator(
  {
    Drawer:DrawerScreen,
    
    Introduction:IntroScreen,
   
  },
  {
    initialRouteName: "Introduction",
    defaultNavigationOptions: {
      title: "Intro Screen",
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
