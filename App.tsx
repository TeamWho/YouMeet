import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import SearchHeader from './src/components/headerComponent/searchHeader';
import SearchScreen from './src/components/headerComponent/searchScreen';
import Login from './src/modules/auth/login';
import Tabs from './src/modules/navigation/tabs';
import { useInitStore, useStore } from './src/modules/store';
import { Routes } from './src/types/navigation';
import Home from './src/modules//home/index';
import Chat from './src/modules//chat/index';
import { Ionicons } from '@expo/vector-icons';
import Header from './src/components/header';
import GroupScreen from './src/modules/groups/groupScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupHeader from './src/modules/groups/groupHeader';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerTintColorew: '#fff',
        headerStyle: styles.headerStyle,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name={Routes.Home} component={Home} options={{
        headerTitle: () => <Header />,
        tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='home' size={24} color={focused ? '#abacdc' : '#666C8C'}></Ionicons>
          </View>
        )
      }} />
      <Tab.Screen name={Routes.Chat} component={Chat} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='chatbubble-ellipses' size={24} color={focused ? '#abacdc' : '#666C8C'} />
          </View>
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const { init, isStoreInitiated } = useInitStore();
  const { getStoreField } = useStore();

  useEffect(() => {
    init();
  }, []);

  const initialScreen = useMemo(() => {
    return Routes.Home;
    if (!isStoreInitiated) return null;
    return getStoreField('JWT_TOKEN') ? Routes.Home : Routes.Login;
  }, [isStoreInitiated]);

  if (!initialScreen) return null;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialScreen}
          screenOptions={() => ({
            headerStyle: styles.headerStyle,
          })}>
          <Stack.Screen name={Routes.Tabs} component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name={Routes.Home} component={HomeTabs} options={{
            headerShown: false,
          }} />
          <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={Routes.SearchScreen} component={SearchScreen} options={{
            headerTitle: () => <SearchHeader />,
            headerTintColor: '#8287B5',
            headerStyle: {
              backgroundColor: '#191a23'
            },
          }} />
          <Stack.Screen name={Routes.GroupScreen} component={GroupScreen} options={{
            headerTitle: () => <GroupHeader />,
            headerTintColor: '#fff',
            headerBackVisible: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#191a23',
    shadowOpacity: 0,
  },
  tabBarStyle: {
    backgroundColor: '#191a23',
    borderTopWidth: 0,
  },
})
