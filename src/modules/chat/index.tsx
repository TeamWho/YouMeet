import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, FlatList } from 'react-native';
import RecentContacts from './components/recentContacts';
import Header from './components/header';
import Message from './components/message';
import { useState } from 'react';

const messagesMock = [
    {
        id: 1,
        name: 'Michael Morgan',
        iconName: 'ra',
        message: 'Yeap, it is perfect!',
        newMessagesAmount: 2,
    },
    {
        id: 2,
        name: 'Anastesya Kohesi',
        iconName: 'twitter',
        message: 'Do you remember me?',
    },
    {
        id: 3,
        name: 'Arnold Prihutama',
        iconName: 'black-tie',
        message: 'Cool, lets continue!',
        newMessagesAmount: 1,
    },
    {
        id: 4,
        name: 'Sarah Maroon',
        iconName: 'btc',
        message: 'Thank you mate!'
    }
];


const Chat = () => {  
    const insets = useSafeAreaInsets();
    const [messages, setMessages] = useState(messagesMock);

    const removeMessage = (id: string | number) => {
        const updatedMessages = messages?.filter(message => message.id !== id);
        setMessages(updatedMessages);
    };
    
    return (
        <View style={{ ...styles.wrapper, paddingTop: insets.top }}>

            <View style={styles.container}>
                <View style={styles.block}>
                    <Header name="John" />
                </View>
                <View style={styles.block}>
                    <RecentContacts />
                </View>
            </View>

            <View style={styles.separator} />

            <View style={styles.container}>
                <FlatList
                    keyExtractor={({ name }) => name}
                    data={messages}
                    renderItem={({ item }) => (
                        <Message 
                            chatId={item.id}
                            name={item.name}
                            iconName={item.iconName}
                            message={item.message}
                            newMessagesAmount={item.newMessagesAmount} 
                            onRemove={removeMessage}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        marginHorizontal: 20,
    },
    block: {
        paddingBottom: 15,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'lightgray'
    }
});



export default Chat;