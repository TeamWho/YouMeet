import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";


const info = [
    {
        nick: 'Fembulvetr',
        ava: 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest?cb=20210225204731&path-prefix=ru',
    }
]

const rating = [
    {
        followers: 1654, rat: 6
    }
]



const Profile = () => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileBlock1}>
                {info.map(info => (
                    <View style={styles.userinfo}>
                        <View style={styles.profileAva}>
                            <Image
                                style={styles.avaImg}
                                source={{ uri: info.ava }}
                            />
                        </View>
                        <View>
                            <Text style={styles.nickname}> {info.nick} </Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.profileBlock2}>
                {rating.map(rating => (
                    <View style={styles.rating}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.infoText}>
                                Followers :
                            </Text>
                            <Text style={styles.infoText2}>
                                {rating.followers}
                            </Text>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.infoText}>
                                Raiting :
                            </Text>
                            <Text style={styles.infoText2}>
                                {rating.rat}/10
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.profileBlock3}>
                <TouchableOpacity style={styles.profileBtn}>
                    <Text style={styles.btnText}>Follow</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: '#26252a',
        paddingTop: '10%'
    },
    profileBlock1: {
        alignItems: 'center',
    },
    userinfo: {
        alignItems: 'center',
    },
    profileBlock2: {
        marginTop: 15,
        width: '100%',
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    infoText2: {
        marginTop: 5,
        fontSize: 32,
        fontWeight: '800',
        color: '#fff',
    },
    profileBlock3: {
        marginTop: 20,
        width: 390,
        alignItems: 'center'
    },
    profileAva: {
        marginBottom: 15,
    },
    avaImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    nickname: {
        fontSize: 24,
        color: '#5ad3b9',
        fontWeight: '700',
        marginBottom: 5,
    },
    profileInfo: {
        flexDirection: 'column'
    },
    profileBtn: {
        borderWidth: 2,
        borderColor: '#5ad3b9',
        paddingHorizontal: '35%',
        paddingVertical: 10,
        borderRadius: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },
})

export default Profile;