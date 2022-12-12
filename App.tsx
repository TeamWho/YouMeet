import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './src/types/navigation';
import Home from './src/modules/home';
import Chat from './src/modules/chat';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabNavigatorParams = {
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#272d2f',
    borderTopWidth: 0,
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#272d2f',
            borderTopWidth: 0,
}})}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{
            shadowColor: focused ? '#fff' : '#272d2f',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1.0,
            shadowRadius: 10,
          }}>
            <FontAwesome name='home' size={24} color={focused ? '#fff' : '#585d60'}></FontAwesome>
          </View>
   ) }} />
        <Tab.Screen name="Chat" component={Chat} options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{
            shadowColor: focused ? '#fff' : '#272d2f',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1.0,
            shadowRadius: 10,
          }}>
            <FontAwesome name='commenting' size={24} color={focused ? '#fff' : '#585d60'}></FontAwesome>
          </View>
   )}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
