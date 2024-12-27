import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react'

const CartButton = ({set, isSet, informationAddItemToCart, handleClosePress}) => {
  const validateInfomation = () => {
    if(informationAddItemToCart) {
      if(informationAddItemToCart == "" || informationAddItemToCart.size == "") {
        Alert.alert('chưa chọn size')
      } else {
        // call api add item to cart
        set('true')
        handleClosePress()
      }
    } else {
      set('true')
    }
  }
  return (
    <View className={`h-[112px] w-full flex justify-center items-center`} style={styles._bgColor}>
      <TouchableOpacity 
        className='w-[343px] bg-[#DB3022] h-[48px] rounded-[25px] inline-flex justify-center items-center'
        onPress={() => validateInfomation()}
      >
        <Text className='text-center text-[#FFFFFF] text-[20px] font-[500] uppercase'>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  _bgColor : {
    // backgroundColor : customBgColor ? customBgColor : "#fff",
  }
})

export default CartButton