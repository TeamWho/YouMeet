import { View, StyleSheet, Text } from "react-native";


const SearchScreen = () => {
    return (
                <View style={styles.searchScreenContainer}>
                    <Text>Hello</Text>
                </View>
            )
}

export default SearchScreen;


const styles = StyleSheet.create({
    searchScreenContainer: {
        flex: 1,
        backgroundColor: '#191a23',
        justifyContent: 'center',
        alignItems: 'center',
    },
    })























//const LeftView = () => {

    //     const [showSearchBar, setShowSearchBar] = useState(false);
    
    
    //     return (
    //         <View style={styles.leftView}>
    //             <TouchableOpacity onPress={() => (setShowSearchBar(!showSearchBar))}>
    //                 <FontAwesome name="search" size={24} color='#fff' />
    //             </TouchableOpacity>
    //             {showSearchBar && SearchUser()}
    //         </View>
    //     )
    // }
    
    // export default LeftView;
    
    
    // const SearchUser = () => {
    //     return (
    //         <View>
    //             <SearchBar style={styles.search}
    //                 placeholder="Search here"
    //             />
    //         </View>
    //     )
    // }
    
    // const styles = StyleSheet.create({
    //     search: {
    //         position: 'absolute',
    //         width: 270,
    //         height: 35,
    //         left: 50,
    //         top: -30,
    //         backgroundColor: '#eceffc',
    //     },
    //     leftView: {
    //         zIndex: 1000,
    //     },
    // })
    