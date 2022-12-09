import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { Routes } from '../../types/navigation';

const Home = () => {
    const navigation = useNavigation<any>();
    return (
        <View>
            <Button title=" go to chat" onPress={() => 
                navigation.navigate(Routes.Chat)}/>
            <Text> my Home</Text>
        </View>
    );
};

export default Home;