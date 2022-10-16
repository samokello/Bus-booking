import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IntroScreen from "./src/Screens/IntroScreen";
import DrawerScreen from "./src/Screens/DrawerScreen";
import Notifications from "./src/Screens/Notification";
import Registerscreen from "./src/Screens/Registerscreen";
import LoginScreen from "./src/Screens/LoginScreen";
import CalendarScreen from "./src/Screens/Calendar";
import AboutScreen from "./src/Screens/AboutScreen";


const navigator = createStackNavigator(
  {
    Drawer:DrawerScreen,
    Notification:Notifications,
    Introduction:IntroScreen,
    Register:Registerscreen,
    Login:LoginScreen,
    Calendar:CalendarScreen,
    About:AboutScreen
  
   
  },

  {
    initialRouteName: "Introduction",
    defaultNavigationOptions: {
      title: "Intro Screen",
      headerShown:false,
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
