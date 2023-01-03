import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text> my Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#53575a',
        paddingTop: 50,
    }
});

export default Home;