import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ConfirmButton = () => {
  return (
    <View className='bg-[#f9f9f9] h-[104px] py-[24px] px-[16px] flex flex-row space-x-[23px]'>
      <TouchableOpacity className='w-[160px] h-[36px] border-[#222222] border-[1px] rounded-[24px]'>
        <View className='flex flex-row justify-center items-center'>
            <Text className='capitalize font-[500] text-[16px]'>Discard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className='w-[160px] h-[36px] bg-[#DB3022] border-0 rounded-[24px]'>
        <View className='flex flex-row justify-center items-center'>
            <Text className='capitalize font-[500] text-[16px]'>Apply</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ConfirmButton