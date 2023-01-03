import { useNavigation, StackActions } from '@react-navigation/native';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Routes } from '../../types/navigation';
import { useStore } from '../store';


const Chat = () => {    
    const navigation = useNavigation();
    const { clearStore } = useStore();

    const logout = () => {
        clearStore();
        navigation.dispatch(StackActions.replace(Routes.Login));
    };
    
    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={logout} />
            <Text>Chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30665D',
    }
});



export default Chat;