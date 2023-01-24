import { useRef, useState } from 'react';
import { Button, Input } from '@rneui/base';
import Toast from 'react-native-toast-message';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackActions, useNavigation } from '@react-navigation/native';
import request from '../../request';
import { useStore } from '../../store';
import { Routes } from '../../../types/navigation';


const Login = () => {    
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [shouldHidePassword, setShouldHidePassword] = useState(true);
    const { setStoreField } = useStore();

    const signIn = async () => {
        const toastParams = {
            type: 'error',
            text1: 'Could not authenticate a user',
            text2: 'Could not find any user with this email/password'
        };

        try {
            const loginResponse = await request.post('auth/login', { username: email, password });
            const accessToken = loginResponse?.data?.access_token;
            if (!accessToken) throw new Error(toastParams.text2);

            setStoreField('JWT_TOKEN', accessToken);
            navigation.dispatch(StackActions.replace(Routes.Tabs));
        } catch(err) {
            console.log(err);
            Toast.show(toastParams);
        }
    };
    
    return (
        <View style={styles.container}>
            <Input
                ref={emailInputRef}
                autoCapitalize="none"
                placeholder='Email'
                value={email}
                onChangeText={(value) => setEmail(value)}
                leftIcon={{ type: 'font-awesome', name: 'envelope', size: 18 }}
            />
            <Input
                ref={passwordInputRef}
                autoCapitalize='none'
                secureTextEntry={shouldHidePassword}
                placeholder='Password'
                value={password}
                onChangeText={(value) => setPassword(value)}
                leftIcon={{ type: 'font-awesome', name: 'lock', size: 24 }}
                rightIcon={{ type: 'font-awesome', name: 'eye', size: 20, onPress: () => setShouldHidePassword(!shouldHidePassword) }}
            />

            <Button
                containerStyle={styles.button}
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 0, y: 0.1 },
                    end: { x: 1, y: 0.7 },
                }}
                size="md"
                onPress={signIn}
            >
                Sign in
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        paddingHorizontal: 20,
    },
    button: {
        borderRadius: 10
    }
});



export default Login;