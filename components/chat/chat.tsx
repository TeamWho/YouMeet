import { Text, View, Button, StyleSheet } from "react-native";


const Chat = ({ navigation }: any) => {    
    return (
        <View style={styles.container}>
            <Button title=" back to Home" onPress={() => 
                navigation.navigate('Home')}/>
            <Text>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30665D',
    }
})



export default Chat;