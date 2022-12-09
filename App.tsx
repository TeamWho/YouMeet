import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './src/modules/chat';
import { Routes } from './src/types/navigation';
import Home from './src/modules/home';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.Home} component={Home} />
                <Stack.Screen name={Routes.Chat} component={Chat} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}