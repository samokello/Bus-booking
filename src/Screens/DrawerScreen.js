import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Profile from './ProfileScreen';
import WalletScreen from './Wallet';
import Notifications from './Notification';
import Registerscreen from './Registerscreen';
import LoginScreen from './LoginScreen';
import MytripScreen from './Trips';
import CalendarScreen from './Calendar';


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
      <Drawer.Screen name="Calendar" component={CalendarScreen} />








    </Drawer.Navigator>
  );
}

export default function DrawerScreen() {
  return (
	
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}