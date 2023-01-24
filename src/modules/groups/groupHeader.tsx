import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Routes } from "../../types/navigation";
import HeaderRight from "./headerRight";


const GroupHeader = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.headerContainer}>
            <View>
                <Pressable onPress={() => navigation.navigate(Routes.Home)}>
                    <Ionicons name='chevron-back' size={32} color={'#fff'} />
                </Pressable>
            </View>
            <Text style={styles.headerText}> GroupName </Text>
            <HeaderRight />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: 30
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
    },
})

export default GroupHeader;