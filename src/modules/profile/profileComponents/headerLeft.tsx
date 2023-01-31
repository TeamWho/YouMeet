import { Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



const HeaderLeft = () => {

    const navigation = useNavigation<any>();

    return (
        <View>
            <Pressable onPress={() => navigation.goBack(null)}>
                <Ionicons name="chevron-back" size={32} color="#fff" />
            </Pressable>
        </View>
    )
}

export default HeaderLeft;