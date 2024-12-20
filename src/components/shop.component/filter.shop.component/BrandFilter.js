import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import img from '../../../constant/img'

const BrandFilter = ({handleBrand, brandChoosen}) => {
  return (
    <TouchableOpacity 
        onPress={() => handleBrand()}
        className='px-[16px]'
    >
        <View className='flex flex-row justify-between items-center'>
            <View>
                <Text className='text-[16px] font-[500] text-[#222222] capitalize'>Brand</Text>
                <Text className='text-[#9B9B9B] text-[11px] font-[400]'>{brandChoosen}</Text>
            </View>
            <Image 
                className='w-[7px] h-[11px] text-[#222222]'
                source={img.chevolLeft}
            />
        </View>
    </TouchableOpacity>
  )
}

export default BrandFilter