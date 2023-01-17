import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Groups from "./homeComponents/group";
import Recommendation from "./homeComponents/recommendation";
import TopSwiper from "./homeComponents/topSwiper";


const Home = () => {
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View style={styles.swiper}><TopSwiper /></View>
                <View style={styles.recomendation}><Recommendation /></View>
                <View>
                    <Groups />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191a23',
        alignItems: 'center'
    },
    swiper: {
        marginTop: 20,
    },
    recomendation: {
        borderBottomWidth: 2,
        paddingBottom: 15,
        borderColor: '#2F373D'
    },
    scroll: {
        backgroundColor: '#191a23'
    },
})

export default Home;