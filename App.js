import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IntroScreen from "./src/Screens/IntroScreen";
import DrawerScreen from "./src/Screens/DrawerScreen";
import Notifications from "./src/Screens/Notification";
import Registerscreen from "./src/Screens/Registerscreen";
import LoginScreen from "./src/Screens/LoginScreen";
import AboutScreen from "./src/Screens/AboutScreen";
import Availableveseats from "./src/Screens/Availbleseats";
import BusesAvailabe from "./src/Screens/BusesAvailable";
import HomeScreen from "./src/Screens/HomeScreen";
import BusesResgistration from "./src/Screens/BusesAuth";
import Mmm from "./src/Screens/Mmm";
import BusContext from "./context/BusContext";
import BottomSheet from "./src/Screens/BottomSheet";

const navigator = createStackNavigator(
  {
    Drawer: DrawerScreen,
    Notification: Notifications,
    Introduction: IntroScreen,
    Register: Registerscreen,
    Login: LoginScreen,
    About: AboutScreen,
    Seats: Availableveseats,
    Buses: BusesAvailabe,
    Home: HomeScreen,
    BuseRegister: BusesResgistration,
    Mmm: Mmm,
    Bottom: BottomSheet,
  },

  {
    initialRouteName: "Introduction",
    defaultNavigationOptions: {
      headerShown: false,
      headerStyle: {},
      headerBackTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(navigator);
