import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Profile from './src/Screens/ProfileScreen';
import Notifications from './src/Screens/Notification';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import AboutScreen from './src/Screens/About';
import MytripScreen from './src/Screens/Trips';
import WalletScreen from './src/Screens/Wallet';
import Registerscreen from './src/Screens/Registerscreen';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="My Wallet" component={WalletScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Register" component={Registerscreen} />

      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="My Trips" component={MytripScreen} />







    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}