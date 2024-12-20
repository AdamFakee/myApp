import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Loading } from '../loading.component/loading'

const ButtonAuth = ({
  title, handlePress, isLoading
}) => {
  return (
    <View className='w-full relative '>
        <TouchableOpacity 
          className='flex justify-center items-center bg-[#DB3022] rounded-[25px] h-[48px]'
          onPress={handlePress}
        >
          <Text className='font-[24px] uppercase text-[#f9f9f9]'>{title}</Text>
        </TouchableOpacity>
        {isLoading && (
          <Loading otherStyle="absolute top-[-30px] right-[170px]"/>
        )}
    </View>
  )
}

export default ButtonAuth