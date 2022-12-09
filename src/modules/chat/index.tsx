import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Routes } from '../../types/navigation';


const Chat = () => {    
    const navigation = useNavigation<any>();
    
    return (
        <View style={styles.container}>
            <Button title=" back to Home" onPress={() => 
                navigation.navigate(Routes.Home)}/>
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