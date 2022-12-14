import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

interface Props {
    name: string;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const ContactBadge = ({ name, iconName, iconSize = 30, iconColor = 'black' }: Props) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesome name={iconName} size={iconSize} color={iconColor} />
            </TouchableOpacity>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default ContactBadge;

const styles = StyleSheet.create({
    wrapper: {
        marginRight: 20,
    },
    name: {
        marginTop: 5,
    },
    iconContainer: {
        padding: 15,
        borderRadius: 50,
        backgroundColor: '#e3e5ea'
    }
});