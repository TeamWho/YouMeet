import { View, StyleSheet, Text } from "react-native";
import HeaderLeft from "./headerLeft";

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <View><HeaderLeft /></View>
            <View style={styles.headerTitle}>
                <Text style={styles.titleText}>UserName</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    headerTitle: {
        marginLeft: '26%'
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
    }
})

export default ProfileHeader;