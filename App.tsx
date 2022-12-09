import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgHome from './components/svg/svgHome';
import SvgChat from './components/svg/chatSvg';
import { Routes } from './src/types/navigation';
import Home from './src/modules/home';
import Chat from './src/modules/chat';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={Routes.Home} component={Home} options={{ headerShown: false, tabBarIcon: () => <SvgHome /> }} />
                <Tab.Screen name={Routes.Chat} component={Chat} options={{ headerShown: false, tabBarIcon: () => <SvgChat /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
