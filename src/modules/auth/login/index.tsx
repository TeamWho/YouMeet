import { useRef, useState } from 'react';
import { Button, Input } from '@rneui/base';
import Toast from 'react-native-toast-message';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackActions, useNavigation } from '@react-navigation/native';
import request from '../../request';
import { useStore } from '../../store';
import { Routes } from '../../../types/navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
      <View>
        <Text style={styles.welcomeText}> Welcome!</Text>
      </View>
      <Input
        style={styles.text}
        ref={emailInputRef}
        autoCapitalize="none"
        placeholder='Email'
        placeholderTextColor={'#5ad3b9'}
        value={email}
        onChangeText={(value) => setEmail(value)}
        leftIcon={{ type: 'font-awesome', name: 'envelope', size: 18, color: '#5ad3b9' }}
      />
      <Input                
        style={styles.text}
        ref={passwordInputRef}
        autoCapitalize='none'
        secureTextEntry={shouldHidePassword}
        placeholder='Password'
        placeholderTextColor={'#5ad3b9'}
        value={password}
        onChangeText={(value) => setPassword(value)}
        leftIcon={{ type: 'font-awesome', name: 'lock', size: 24, color: '#5ad3b9' }}
        rightIcon={{ type: 'font-awesome', name: 'eye', size: 20, color: '#5ad3b9', onPress: () => setShouldHidePassword(!shouldHidePassword) }}
      />

      <Button
        containerStyle={styles.button}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ['#5ad3b9', '#488A79'],
          start: { x: 0, y: 0.1 },
          end: { x: 1, y: 0.7 },
        }}
        size="lg"
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
    backgroundColor: '#26252a',
  },
  button: {
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    marginLeft: 10,
  },
  welcomeText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 36,
    position: 'absolute',
    left: '-26%',
    bottom: 120,
  },
});



export default Login;