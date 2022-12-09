import { Button, Text, View } from "react-native";

const Home = ({navigation}: any) => {
    return (
        <View>
            <Button title=" go to chat" onPress={() => 
                navigation.navigate('Chat')}/>
            <Text> my Home</Text>
        </View>
    )
}

export default Home;