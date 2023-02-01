import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import RightActions from "./rightAction";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../types/navigation";

let team = [
  { name: 'S1mple', id: 0, rank: 'gold nova', img: 'https://www.bestgamingsettings.com/wp-content/uploads/2019/12/S1mple.jpg' },
  { name: 'Electronic', id: 1, rank: 'Global', img: 'https://virtus-img.cdnvideo.ru/images/details-photo/plain/0a/0a80266e2502a836fbb68ba093ac28e2.png@jpg' },
  { name: 'Flamie', id: 2, rank: 'Silver', img: 'https://www.heavybullets.com/wp-content/uploads/2020/01/flemie.jpeg' },
  { name: 'Bit', id: 3, rank: 'Global', img: 'https://img-cdn.hltv.org/playerbodyshot/g-2t7HQ_d55I6VhRnP2URl.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=132%2C8%2C455%2C455&w=800&s=325499a75c3026c65768e55e61e950b2' },
  { name: 'Perfecto', id: 4, rank: 'Global', img: 'https://prosettings.net/wp-content/uploads/perfecto.png' },
];

const GroupScreen = () => {
  const [members, setMembers] = useState(team);
  let rowRefs = new Map();

  const handleDelete = (itemId: number) => {
    setMembers(members.filter(it => it.id !== itemId))
  };

  const renderLeaderFlag = () => {
    return (
      <View>
        <FontAwesome5 name="crown" size={16} color={'#E8B32E'} />
      </View>
    )
  }

  const navigation = useNavigation<any>();

  return (
    <View style={styles.groupScreenContainer}>
      <StatusBar style="light" />
      {members.map(member => (
        <Swipeable
          renderRightActions={( _, drag) =>
            <RightActions
              drag={drag}
              itemId={member.id}
              handleDelete={(id: number) => handleDelete(id)}
            />}
            // its's needed that when opening a new one action second was closing
          key={member.id}
          ref={ref => {
            if (ref && !rowRefs.get(member.id)) {
              rowRefs.set(member.id, ref);
            }
          }}
          onSwipeableWillOpen={() => {
            [...rowRefs.entries()].forEach(([key, ref]) => {
              if (key !== member.id && ref) ref.close();
            });
          }}
        >
          <Pressable style={styles.team} onPress={() => navigation.navigate(Routes.Profile)} >
            <View style={styles.teamContainerOne}>
              <Image
                style={styles.temmateAva}
                source={{ uri: member.img }}
              />
              <View style={styles.leaderflag}>
                {member.id === 0 ? renderLeaderFlag() : null}
              </View>
              <Text style={styles.temmateName}>{member.name}</Text>
            </View>
            <View style={styles.teamContainerTwo}>
              <View>
                <Text style={styles.temmateRank}>{member.rank}</Text>
              </View>
              <FontAwesome name="angle-right" size={32} color='#fff' />
            </View>
          </Pressable>
        </Swipeable>
      ))}
      <Pressable style={styles.chatBtn}>
        <FontAwesome name="comments" size={64} color='#abacdc' />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  groupScreenContainer: {
    flex: 1,
    backgroundColor: '#191a23',
  },
  temmateName: {
    color: '#fff',
    left: 50,
    fontSize: 18,
    fontWeight: '600'
  },
  temmateRank: {
    color: '#fff',
  },
  temmateAva: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  team: {
    width: 350,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#2F373D',
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: '5%',
  },
  teamContainerOne: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  teamContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',
    paddingLeft: '13%'
  },
  chatBtn: {
    position: 'absolute',
    bottom: 70,
    right: 30
  },
  leaderflag: {
    position: 'absolute',
    left: '40%',
  },
})

export default GroupScreen;