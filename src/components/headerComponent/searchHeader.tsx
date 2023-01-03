import {
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Routes } from '../../types/navigation';


const SearchHeader = () => {

    return (
        <SearchBar style={styles.searchBar} placeholder="Search here" />
    );
};

export default SearchHeader;


const styles = StyleSheet.create({
    searchBar: {
        height: 30,
        borderRadius: 20,
        backgroundColor: '#8287B5',
        marginLeft: -20
    }
});