import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Chat from './src/modules/chat';
import Home from './src/modules/home';
import { Routes } from './src/types/navigation';

const Tab = createBottomTabNavigator();

const tabNavigatorParams = {
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: '#272d2f',
        borderTopWidth: 0,
    }
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={tabNavigatorParams}>
                <Tab.Screen
                    name={Routes.Home}
                    component={Home}
                    options={{ headerShown: false, tabBarIcon: ({ focused }) => (
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
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    iconWrapper: {
        // shadowColor: focused ? '#fff' : '#272d2f',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1.0,
        shadowRadius: 10,
    }
});
