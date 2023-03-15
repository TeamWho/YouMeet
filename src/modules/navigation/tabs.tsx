import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/header';
import { Routes } from '../../types/navigation';
import Chat from '../chat';
import Home from '../home';

const Tab = createBottomTabNavigator();

const tabNavigatorParams = {
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: '#272d2f',
    borderTopWidth: 0,
  },
};

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={tabNavigatorParams}>
      <Tab.Screen
        name={Routes.Home}
        component={Home}
        options={{ 
          headerShown: true,
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#191a23',
            shadowOpacity: 0,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <FontAwesome 
                name='home'
                size={24}
                color={focused ? '#fff' : '#585d60'}
              />
            </View>
          ) 
        }} 
      />
      <Tab.Screen 
        name={Routes.Chat}
        component={Chat}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={styles.iconWrapper}>
            <FontAwesome 
              name='commenting'
              size={24}
              color={focused ? '#fff' : '#585d60'}
            />
          </View>
        )}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1.0,
    shadowRadius: 10,
  }
});
