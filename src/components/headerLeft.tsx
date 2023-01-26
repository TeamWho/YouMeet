import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Routes } from '../types/navigation';


const LeftView = () => {
    const navigation = useNavigation<any>();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.SearchScreen)}>
                <FontAwesome name="search" size={24} color='#fff' />
            </TouchableOpacity>
        </View>
    )
}

export default LeftView;