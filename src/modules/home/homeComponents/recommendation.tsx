import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";

interface RecommendationModalProps {
    show: boolean;
    text: string;
    onClose: () => void;
    onOK: () => void;
}

const groups = [
    {
        text: '#LoL',
        id: 'LoL',
        img: 'https://images.prismic.io/play-vs/6c423286e877921fb6659122b16e1845df833e1f_league-of-legends-hero-splash.jpg?auto=compress,format'
    },
    {
        text: '#Dota 2',
        id: 'Dota',
        img: 'https://cdn.oneesports.gg/cdn-data/2022/10/Dota2_Muerta_NewDotaHero_TI11.jpg'
    },
    {
        text: 'CS Go',
        id: 'CS',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812'
    },
    {
        text: 'AO',
        id: 'AO',
        img: 'https://i.imgur.com/VbSDxXk.jpg'
    },
];

const RecomendationModal = ({ show, onClose, text }: RecommendationModalProps) => (
    <Modal
        isVisible={show}
        onBackdropPress={onClose}
    >
        <View style={styles.recModal}>
            <View style={styles.recModalItem}>
                <Text style={{ color: 'red' }}>{text}</Text>
            </View>
        </View>
    </Modal>
);


const Recommendation = () => {
    const [showRecommendationModal, setShowRecommendationModal] = useState(false);
    const [modalText, setModalText] = useState('');

    const openRecommendationModal = (text: string) => {
        setModalText(text);
        setShowRecommendationModal(true);
    };


    return (
        <View style={styles.recRow}>
            <RecomendationModal
                text={modalText}
                show={showRecommendationModal}
                onClose={() => setShowRecommendationModal(false)}
                onOK={() => setShowRecommendationModal(false)}
            />
            <View style={styles.groupsContainer}>
                {groups.map(group => (
                    <View style={styles.recItem}>
                        <Pressable style={styles.recBtn} onPress={() => openRecommendationModal(group.text)}>
                        <Image
                                style={{ width: 170, height: 80, borderRadius: 30, }}
                                source={{ uri: group.img }}
                            />
                            <View style={styles.recName}><Text style={styles.recNameText}>{group.text}</Text></View>
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Recommendation;

const styles = StyleSheet.create({
    recBtn: {
        width: 170,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    recModalItem: {
        width: 300,
        height: 300,
        backgroundColor: '#191a23',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    recRow: {
        flexDirection: 'row',
        marginTop: 20
    },
    recItem: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10
    },
    groupsContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    recName: {
        position: 'absolute',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        top: 7,
        right: 15,
        backgroundColor: '#191a23',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    recNameText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
})