import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
    dragX: any;
    id: string | number;
    onPress: (id: string | number) => void;
}

const ActionButton = ({ dragX, id, onPress }: Props) => {
    const trans = dragX.interpolate({
        inputRange: [0, 50, 75, 100],
        outputRange: [10, 20, 20, 150],
    });

    const onButtonPress = () => {
        onPress(id);
    };

    return (
        <RectButton style={styles.actionButton} onPress={onButtonPress}>
            <Animated.Text
                style={[
                    {
                        transform: [{ translateX: trans }],
                    },
                ]}>
                <FontAwesome name="trash-o" color='red' size={25} />
            </Animated.Text>
        </RectButton>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    actionButton: {
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});