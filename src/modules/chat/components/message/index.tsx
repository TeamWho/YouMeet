import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import ActionButton from './components/actionButton';

interface Props {
    iconName: string;
    name: string;
    message: string;
    chatId: string | number;
    newMessagesAmount?: number;
    onRemove: (id: string | number) => void;
}

const renderRightBlock = (newMessagesAmount?: number) => {
    if (!newMessagesAmount || newMessagesAmount <= 0) return <Text>00:21</Text>;
    return (
        <View style={styles.badge}>
            <Text style={styles.badgeText}>{newMessagesAmount}</Text>
        </View>
    );
};

const Message = ({ iconName, name, message, newMessagesAmount, onRemove, chatId }: Props) => {

    return (
        <Swipeable renderRightActions={(_, dragX) => <ActionButton id={chatId} dragX={dragX} onPress={onRemove} />}>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <FontAwesome name={iconName} size={30} />
                    <View style={styles.infoBlock}>
                        <Text style={styles.name}>{name}</Text>
                        <Text>{message}</Text>
                    </View>
                </View>
                <View style={styles.rightBlock}>
                    {renderRightBlock(newMessagesAmount)}
                </View>
            </View>
        </Swipeable>
    );
};

export default Message;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 75,
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 16,
        color: 'gray'
    },
    badge: {
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 20,
        backgroundColor: 'blue'
    },
    badgeText: {
        color: 'white'
    },
    rightBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    }
});