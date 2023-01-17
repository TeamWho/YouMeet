import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";


const HeaderRight = () => {

    const navigation = useNavigation<any>();

    return (
        <Pressable onPress={() => navigation.navigate('Home')}>
            <Ionicons name='exit-outline' size={29} color={'#fff'} />
        </Pressable>
    )
}

export default HeaderRight;