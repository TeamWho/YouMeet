import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/modules//home/index';
import Chat from './src/modules//chat/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/header';
import SearchScreen from './src/components/headerComponent/searchScreen';
import SearchHeader from './src/components/headerComponent/searchHeader';
import GroupScreen from './src/modules/groups/groupScreen';
import HeaderRight from './src/modules/groups/headerRight';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
  return (
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
        headerTitle: () => <Header />,
        tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='home' size={24} color={focused ? '#abacdc' : '#666C8C'}></Ionicons>
          </View>
        )
      }} />
      <Tab.Screen name="Chat" component={Chat} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='chatbubble-ellipses' size={24} color={focused ? '#abacdc' : '#666C8C'}></Ionicons>
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: '#191a23',
            shadowOpacity: 0,
          },
        })}>
        <Stack.Screen name='Home' component={HomeTabs} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
          headerTitle: () => <SearchHeader />,
          headerLeft: () => null,
        }} />
        <Stack.Screen name='GroupScreen' component={GroupScreen} options={{
          headerTitle: 'GroupName',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerRight: () => <HeaderRight />,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          headerLeftContainerStyle: {
            paddingLeft: 8,
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})

