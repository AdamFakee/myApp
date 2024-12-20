import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import img from '../../../constant/img'

const SearchBrand = ({searchBrandValue, setSearchBrandValue}) => {
  return (
    <View className='h-[40px] flex flex-row items-center px-[15px] bg-[#ffff] rounded-[23px]'>
      <Image 
        source={img.searchButton}
        className='mr-[8px]'
      />
      <TextInput
        placeholder='Search'
        value={searchBrandValue}
        onChangeText={value => setSearchBrandValue(value)}
        className='text-[16px] text-[#9B9B9B] font-[400] flex-1'
      />
    </View>
  )
}

export default SearchBrand