import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import img from '../../../constant/img'

const DescDrop = ({isChoose, setIsChoose, title, descInfomation}) => {
  return (
    <View className='border-[#9B9B9B] border-y-[0.4px] min-h-[47px] flex justify-center'>
        <TouchableOpacity
            onPress={() => setIsChoose(!isChoose)}
            className='flex flex-row justify-between items-center px-[16px] border-[#9B9B9B] border-y-[0.4px] min-h-[47px]'
        >
            <Text className='text-[#222222] font-[400] text-[16px] flex-1'>{title}</Text>
            <Image source={img.chevolLeft} className='text-[8px]'/>
        </TouchableOpacity>
        {isChoose && (
            <View className='mb-[20px] px-[16px]'>
                <Text className='text-[#222222] text-[14px] font-[400]'>{descInfomation}</Text>
            </View>
        )}
    </View>
  )
}

export default DescDrop