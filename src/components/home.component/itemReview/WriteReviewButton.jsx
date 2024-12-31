import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const WriteReviewButton = ({isWriteReview, setIsWriteReview}) => {
  return (
    <LinearGradient colors={['#FFFFFF38', '#FFFFFF']} style={styles.gradient}>
        <View className='mx-[16px] items-end'>
          <TouchableWithoutFeedback onPress={() => setIsWriteReview(!isWriteReview)}>
            <View className='h-auto w-auto bg-[#DB3022] rounded-[25px] flex-row justify-center items-center px-[10px] py-[8px]' >
              <FontAwesome6 name="pen-to-square" size={24} color="#fff" />
              <Text className='text-[#fff] font-[400] text-[13px] ml-[6px]'>Write a review</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </LinearGradient>
  )
}
const styles = StyleSheet.create({
    gradient : {
      marginTop : -60,
      marginLeft : -16,
      marginRight : -16,
      flex : 1,
    }
  })
export default WriteReviewButton