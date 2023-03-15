import { View, StyleSheet } from 'react-native';
import TitleView from './headerComponent/headerTitle';
import RightView from './headerComponent/headerFilter';
import LeftView from './headerLeft';


const Header = () => {
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
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },
});


export default Header;