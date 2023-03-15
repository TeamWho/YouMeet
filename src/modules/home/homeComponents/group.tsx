import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Routes } from '../../../types/navigation';


const groups = [
  {
    text: 'NAVI',
    id: 0,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812'
  },
  {
    text: 'G2',
    id: 1,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812'
  },
  {
    text: 'Fury',
    id: 2,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812'
  },
  {
    text: 'FaZe Clan',
    id: 3,
    img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.1920x1080.jpg?t=1668125812'
  },
];



const Groups = () => {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {groups.map(group => (
        <View key={group?.id}>
          <Pressable style={styles.group} onPress={() => navigation.navigate(Routes.GroupScreen)}>
            <View style={styles.groupContainer}>
              <View>
                <Image
                  style={styles.groupImg}
                  source={{ uri: group.img }}
                />
              </View>
              <View style={styles.groupName}>
                <Text style={styles.groupText}>
                  {group.text}
                </Text>
              </View>
            </View>
            <View style={styles.groupBtn}>
              <FontAwesome name="angle-right" size={32} color='#fff' />
            </View>
          </Pressable>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  group: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    borderBottomColor: '#2F373D',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  groupName: {
    width: 200,
    height: 30,
    marginLeft: '10%',
    top: 3,
  },
  groupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  groupImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderLeftWidth: 3,
    borderLeftColor: '#fff'
  },
  groupBtn: {
    top: -4,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});


export default Groups;