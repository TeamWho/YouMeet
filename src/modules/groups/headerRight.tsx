import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Routes } from "../../types/navigation";


const HeaderRight = () => {
    const navigation = useNavigation<any>();

    return (
        <Pressable onPress={() => navigation.navigate(Routes.Home)}>
            <Ionicons name='exit-outline' size={29} color={'#fff'} />
        </Pressable>
    )
}

export default HeaderRight;