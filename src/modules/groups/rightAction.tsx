import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Animated, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  drag: Animated.AnimatedInterpolation<number>;
  itemId: number;
  handleDelete: (itemId: number) => void;
}

const RightActions = ({ drag, itemId, handleDelete }: Props) => {
  const scale = drag.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  })
  return (
    <>
      <TouchableOpacity onPress={() => handleDelete(itemId)}>
        <Animated.View
          style={[
            styles.delBtn,
            {
              transform: [{ scale }]
            }
            ]}>
          <Animated.Text
            style={[
              styles.animatedText,
              {
                transform: [{ scale }]
              }
            ]}>
            <FontAwesome name="trash" size={24} color={'#fff'} />
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('edit temmate')}>
        <Animated.View
          style={[
            styles.editBtn,
            {
              transform: [{ scale }]
            }
            ]}>
          <Animated.Text
            style={[
              styles.animatedText,
              {
                transform: [{ scale }]
              }
            ]}>
            <FontAwesome name="edit" size={24} color={'#fff'} />
          </Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  animatedText: {
    color: 'white',
    paddingHorizontal: 22,
    fontWeight: '600',
  },
  delBtn: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  editBtn: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
})

export default RightActions;