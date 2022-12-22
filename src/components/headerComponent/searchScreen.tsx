import React from "react";
import { View, StyleSheet, Text } from "react-native";


const SearchScreen = () => {
    return (
                <View style={styles.searchScreenContainer}>
                    <Text>Hello</Text>
                </View>
            )
}

export default SearchScreen;


const styles = StyleSheet.create({
    searchScreenContainer: {
        flex: 1,
        backgroundColor: '#191a23',
        justifyContent: 'center',
        alignItems: 'center',
    },
    })