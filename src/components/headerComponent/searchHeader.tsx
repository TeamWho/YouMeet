import {
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { Routes } from "../../types/navigation";


const SearchHeader = () => {
    return (
        <View style={styles.searchHeader}>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}>
                <FontAwesome name="angle-left" size={32} color='#8287B5' />
            </TouchableOpacity>
            <View style={styles.search}>
                <SearchBar style={styles.searchBar}
                    placeholder="Search here"
                />
            </View>
        </View>
    )
}

export default SearchHeader;


const styles = StyleSheet.create({
    searchBar: {
        height: 30,
        borderRadius: 20,
        backgroundColor: '#8287B5',
        marginLeft: -20
    },
});