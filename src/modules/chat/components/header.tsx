import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

interface Props {
    name: string;
}

const Header = ({ name }: Props) => (
    <View style={styles.wrapper}>
        <Text style={styles.name}>Hello {name}</Text>
        <FontAwesome
            name='pencil-square-o'
            size={30}
            color='black'
        />
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        minHeight: 40,
        justifyContent: 'space-between',
    },
    name: {
        color: 'gray',
        fontSize: 20,
    }
});

export default Header;