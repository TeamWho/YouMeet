import { View, StyleSheet } from "react-native";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import HeaderTitle from "./headerTitle";



const ProfileHeader = () => {
    return(
        <View style={styles.container}>
            <View><HeaderLeft/></View>
            <View style={styles.headerTitle}><HeaderTitle/></View>
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
})

export default ProfileHeader;