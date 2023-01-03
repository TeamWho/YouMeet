import React from "react";
import { View, StyleSheet } from "react-native";
import Recommendation from "./homeComponents/recommendation";
import TopSwiper from "./homeComponents/topSwiper";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.swiper}><TopSwiper/></View>
            <View style={styles.recomendation}><Recommendation/></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3A3A47',
        alignItems: 'center'
    },
    swiper: {
        width: 350,
        height: 90,
        marginTop: 20,
    },
    recomendation: {
    },
})

export default Home;