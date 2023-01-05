import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/base';
import { useEffect, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import Toast from 'react-native-toast-message';
import SearchHeader from './src/components/headerComponent/searchHeader';
import SearchScreen from './src/components/headerComponent/searchScreen';
import Login from './src/modules/auth/login';
import Home from './src/modules/home';
import Tabs from './src/modules/navigation/tabs';
import { useInitStore, useStore } from './src/modules/store';
import { Routes } from './src/types/navigation';

const Stack = createNativeStackNavigator();

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
                <Stack.Navigator initialRouteName={initialScreen}>
                    <Stack.Screen name={Routes.Tabs} component={Tabs} options={{ headerShown: false }} />
                    <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={Routes.Search} component={SearchScreen} options={{
                        headerTitle: () => <SearchHeader />,
                        headerTintColor: '#8287B5',
                        headerStyle: {
                            backgroundColor: '#191a23'
                        },
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </>
    );
}
