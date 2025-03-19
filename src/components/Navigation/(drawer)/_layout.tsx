import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../(tabs)/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import TabsLayout from '../(tabs)/_layout';

export default function DrawerLayout() {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <drawer.Screen
        name="Home"
        component={TabsLayout}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </drawer.Navigator>
  );
}
