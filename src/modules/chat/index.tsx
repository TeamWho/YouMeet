import { Text, View, StyleSheet } from "react-native";


const Chat = () => {    
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30665D',
        paddingTop: 50,
    }
})



export default Chat;