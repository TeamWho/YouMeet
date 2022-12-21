import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/modules//home/index';
import Chat from './src/modules//chat/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/nav/header/header';
import SearchScreen from './src/components/nav/header/headerComponent/searchScreen';
import SearchHeader from './src/components/nav/header/headerComponent/searchHeader';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




const HomeTabs = () => {
  return(
  <Tab.Navigator
        screenOptions={() => ({
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#191a23',
            shadowOpacity: 0,
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#191a23',
            borderTopWidth: 0,
          }
        })}>
        <Tab.Screen name='Home' component={Home} options={{
          headerTitle: () => <Header/>,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name='home' size={24} color={focused ? '#abacdc' : '#666C8C'}></FontAwesome>
            </View>
          )
        }} />
        <Tab.Screen name="Chat" component={Chat} options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome name='commenting' size={24} color={focused ? '#abacdc' : '#666C8C'}></FontAwesome>
            </View>
          )
        }} />
      </Tab.Navigator>
)}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // @ts-ignore because stack navigator doesn't understand "headerLeft" property even tho it works
      screenOptions={() => ({
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#191a23',
          shadowOpacity: 0,
        },
      })}>
        <Stack.Screen name='Home' component={HomeTabs} options={{
          headerShown: false,
          }}/>
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
          headerTitle: () => <SearchHeader/>,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})

