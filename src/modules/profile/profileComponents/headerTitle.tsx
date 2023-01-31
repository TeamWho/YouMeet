import { View, Text, StyleSheet } from "react-native"



const HeaderTitle = () => {
    return (
        <View>
            <Text style={styles.titleText}>UserName</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default HeaderTitle;