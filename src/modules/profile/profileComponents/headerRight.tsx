import { Pressable, View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";
import React, { useState } from "react";

const HeaderRight = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
            isVisible={modalVisible}
            onBackdropPress={() => {
                setModalVisible(!modalVisible);
            }}
            >
            <View style={styles.modal}>
                    <Pressable style={styles.modalBtn}>
                        <Text style={styles.modalText}>Edit</Text>
                    </Pressable>
                    <Pressable style={styles.modalBtn}>
                        <Text style={styles.modalText}>Settings</Text>
                    </Pressable>
                    <Pressable style={styles.modalBtn}>
                        <Text style={styles.modalText}>Logout</Text>
                    </Pressable>
             </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                    <MaterialIcons name="more-horiz" size={36} color="#fff" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        width: 90,
        backgroundColor: '#282829',
        top: 90,
        right: -10,
        paddingTop: 10,
        borderRadius: 10,
    },
    modalText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 20
    },
    modalBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HeaderRight;













// interface ProfileModalProps {
    //     show: boolean;
    //     // text: string;
    //     onClose: () => void;
    //     onOK: () => void;
    // }
    
    // const ProfileModalSettings = ({ show, onClose, /*text*/ }: ProfileModalProps) => {
    //     return (
    //         <Modal
    //             isVisible={show}
    //             onBackdropPress={onClose}
    //         >
    //             <View style={styles.modal}>
    //                 <Pressable>Edit</Pressable>
    //                 <Pressable>Settings</Pressable>
    //                 <Pressable>Logout</Pressable>
    //             </View>
    //         </Modal>
    //     )
    // }
    
    // const HeaderRight = () => {
    
    //     const [showSettingsModal, setShowSettingsModal] = useState(false);
    //     // const [modalText, setModalText] = useState('');
    
    //     const openSettingsModal = (text: string) => {
    //         // setModalText(text);
    //         setShowSettingsModal(true);
    //     };
    
    //     return (
    //         <View>
    //             <ProfileModalSettings
    //                 // text={modalText}
    //                 show={showSettingsModal}
    //                 onClose={() => setShowSettingsModal(false)}
    //                 onOK={() => setShowSettingsModal(false)}
    //             />
    //             <Pressable onPress={() => openSettingsModal}>
    //                 <MaterialIcons name="more-horiz" size={36} color="#fff" />
    //             </Pressable>
    //         </View>
    //     )
    // }