import { View, StyleSheet } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';


const SearchHeader = () => {
  return (
    <View>
      <View style={styles.search}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Search here"
        />
      </View>
    </View>
  );
};

export default SearchHeader;


const styles = StyleSheet.create({
  searchBar: {
    height: 30,
    borderRadius: 20,
    backgroundColor: '#8287B5',
    marginLeft: -20
  },
  search: {
    marginLeft: '5%',
    width: 300
  },
});