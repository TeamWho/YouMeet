import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Routes } from "../../types/navigation";
import { useNavigation, StackActions } from '@react-navigation/native';
import { useStore } from '../store';

const store = [
    {
        img: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru'
    }
]
const MyProfile = () => {
    const navigation = useNavigation<any>();
    const { clearStore } = useStore();

    const logout = () => {
        clearStore();
        navigation.dispatch(StackActions.replace(Routes.Login));
    };

    const btns = [
        {
            text: 'My account',
            icon: <AntDesign name="user" size={24} color="#5ad3b9" />,
            link: Routes.Profile
        },
        {
            text: 'Settings',
            icon: <AntDesign name="setting" size={24} color="#5ad3b9" />,
            link: Routes.Settings
        },
    ]

    return (
        <View style={styles.profileContainer}>
            <View style={styles.avatar}>
                {store.map(store => (
                    <View>
                        <Image
                            style={styles.avaImg}
                            source={{ uri: store.img }} />
                    </View>
                ))}
            </View>
            <View style={styles.btns}>
                {btns.map(btn => (
                    <View>
                        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate(btn.link)}>
                            <View>
                                {btn.icon}
                            </View>
                            <Text style={styles.profileText}>
                                {btn.text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                <AntDesign name="logout" size={24} color="#5ad3b9" />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: '#26252a',
        paddingTop: '20%',
    },
    avatar: {
        alignItems: 'center',
    },
    avaImg: {
        width: 200,
        height: 200,
        borderRadius: 70,
    },
    btns: {
        marginTop: 50,
        alignItems: 'center'
    },
    profileBtn: {
        marginTop: 15,
        width: 350,
        backgroundColor: '#353640',
        paddingLeft: '20%',
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#5ad3b9',
        borderRadius: 15,
    },
    profileText: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    logoutBtn: {
        width: 360,
        position: 'absolute',
        bottom: 20,
        left: '3.6%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#d2020e',
        backgroundColor: '#d2020e',
        paddingVertical: 15,
        borderRadius: 30,
    },
    logoutText: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24,
    },
})

export default MyProfile;