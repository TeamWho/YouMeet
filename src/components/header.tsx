import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import TitleView from './headerComponent/headerTitle';
import RightView from './headerComponent/headerFilter';
import { Routes } from '../types/navigation';


const Header = () => {

    const navigation = useNavigation<any>();

    const LeftView = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.Search)}>
                    <FontAwesome name="search" size={24} color='#fff' />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <LeftView />
            <TitleView />
            <RightView />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: 360,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});


export default Header;