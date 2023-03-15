import { Routes } from '../types/navigation';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LeftView = () => {
  // TODO: fix navigation types
  const navigation = useNavigation<any>();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SearchScreen)}>
        <FontAwesome name="search" size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  );
};

export default LeftView;