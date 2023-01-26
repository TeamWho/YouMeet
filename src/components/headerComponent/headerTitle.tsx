import React from "react";
import { View, Text, StyleSheet } from "react-native";


const TitleView = (props: any) => {
    return (
        <View>
            <Text style={styles.title}>
                UserName
                {props.name}
            </Text>
        </View>
    )
}

export default TitleView;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#fff',
    },
})