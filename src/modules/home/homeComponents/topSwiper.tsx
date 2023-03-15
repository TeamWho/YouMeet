import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';


const groups = [
  { id: '1', img: 'https://cdn.dribbble.com/users/2305617/screenshots/16195444/media/2d1fd42bdd74c88e9923b46f76449878.png?compress=1&resize=400x300' },
  { id: '2', img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/Perverted-SToic-Jiraiya.jpg' },
  { id: '3', img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/Minato-Namikaze-Naruto-Shippuden.jpg' },
  { id: '4', img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Tsunade-Naruto.jpg' },
];

const TopSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        loop
        horizontal
        autoplay={true}
        autoplayTimeout={5}
        style={styles.wrapper}
        activeDotColor='#191a23'
        paginationStyle={styles.paginationStyle}
      >
        {groups.map(group => (
          <View key={group.img} style={styles.slide}>
            <Image style={styles.img} source={{ uri: group.img }} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};


export default TopSwiper;


const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 190,
  },

  wrapper: {},

  slide: {
    flex: 1,
    backgroundColors: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
  },

  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
  },
  paginationStyle: {
    marginBottom: -20,
  },
});