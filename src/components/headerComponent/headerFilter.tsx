import {
    Modal,
    TextInput,
    View,
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import React from "react";


const RightView = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState('');
    const [ageMin, onAgeMin] = useState('');
    const [ageMax, onAgeMax] = useState('');
    const [rank, onChangeRank] = useState('');


    return (
        <View style={styles.rightView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalFilter}>
                    <View style={styles.modalFilterStyle}>
                        <>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                value={text}
                                placeholder='Game'
                                placeholderTextColor={'#8890bb'}
                            />
                            <Text style={styles.inputText}>Game</Text>
                        </>
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={styles.inputNum}
                                    onChangeText={onAgeMin}
                                    value={ageMin}
                                    placeholder='min'
                                    placeholderTextColor={'#8890bb'}
                                />
                                <Text style={{ color: '#8890bb', fontSize: 46, marginTop: 10 }}>-</Text>
                                <TextInput
                                    style={styles.inputNum}
                                    onChangeText={onAgeMax}
                                    value={ageMax}
                                    placeholder='max'
                                    placeholderTextColor={'#8890bb'}
                                />
                            </View>
                            <Text style={styles.inputText}>Age</Text>
                        </>
                        <>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeRank}
                                value={rank}
                                placeholder='Rank'
                                placeholderTextColor={'#8890bb'}
                            />
                            <Text style={styles.inputText}>Rank</Text>
                        </>
                        <View style={styles.filterFooter}>
                            <Pressable style={styles.filterBtn}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ color: '#fff' }}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <FontAwesome name="sliders" size={24} color='#fff' />
            </Pressable>
        </View>

    )
}

export default RightView;


const styles = StyleSheet.create({
    rightView: {
    },
    modalFilter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalFilterStyle: {
        width: 300,
        height: 400,
        borderWidth: 3,
        borderColor: '#8890bb',
        backgroundColor: '#191a23',
        borderRadius: 20,
    },
    input: {
        height: 40,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
        color: '#fff',
        borderColor: '#8890bb',
        borderRadius: 10,
    },
    inputText: {
        color: '#fff',
        marginLeft: 20,
        marginTop: 5,
    },
    inputNum: {
        height: 40,
        width: 100,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
        color: '#fff',
        borderColor: '#adabd2',
        borderRadius: 10,
    },
    filterBtn: {
        borderWidth: 1,
        padding: 10,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterFooter: {
        marginRight: 20,
        bottom: 20,
        position: 'absolute',
        right: 0,
    },
})