import {
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';
import React from "react";


const SearchHeader = () => {

    const navigation = useNavigation<any>();

    return (
        <View style={styles.searchHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
    search: {
        width: 360,
        height: 30,
    },
    searchBar: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#8287B5',
    },
    searchHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})