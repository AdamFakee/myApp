import { View, Text ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FavoriteButton from './FavoriteButton'


const MarkDiscount = ({discount}) => {
  return (
    <View className='bg-[#DB3022] h-[24px] rounded-[29px] w-1/3 absolute z-[1] top-[15px] left-[7px]'>
      <Text className='text-[#fff] font-[400] text-[16px] text-center'>{discount}%</Text>
    </View>
  )
}
const MarkNewItem = () => {
  return (
    <View className='bg-[#222] h-[24px] rounded-[29px] w-1/3 absolute z-[1] top-[15px] left-[7px]'>
      <Text className='text-[#fff] font-[400] text-[16px] text-center'>New</Text>
    </View>
  )
}
const MarkContainOldPrice = ({oldPrice, newPrice}) => {
  return (
    <View className='flex flex-row gap-[7px] w-full'>
      <Text className='text-[#9B9B9B] font-[600] text-[16px] line-through'>{oldPrice}</Text>
      <Text className='text-[#DB3022] font-[600] text-[16px]'>{newPrice}</Text>
    </View> 
  )
}
const MarkNotContainOldPrice = ({oldPrice}) => {
  return (
    <View className='flex flex-row gap-[7px] w-full'>
      <Text className='text-[#DB3022] font-[600] text-[16px]'>{oldPrice}</Text>
    </View> 
  )
}
const ItemHome = ({item, handleClickDetailItem}) => {
  return (
    <View className='w-[150px] space-y-[5px] relative'>
        {/* mark title */}
        {
          item.flag==="newItem" ? <MarkNewItem/> : item.discount > 0 ? <MarkDiscount discount={item.discount}/> : null
        }

        {/* infor item */}
        <TouchableOpacity activeOpacity={1} onPress={() => handleClickDetailItem(item.id, item.title)}>
          <View className='w-full'>
              <Image
                  source={item.image}
                  className='object-cover w-full'
              />
              {/* category */}
              <Text className='text-[#9B9B9B] font-[400] text-[16px]'>{item.category}</Text>
              {/* product name */}
              <Text className='text-[#222222] font-[600] text-[20px]'>{item.title}</Text>
              {/* price */}
              {
                item.discount > 0 ? <MarkContainOldPrice oldPrice={item.oldPrice} newPrice={item.newPrice}/> : <MarkNotContainOldPrice oldPrice={item.oldPrice}/>
              }                
          </View>
        </TouchableOpacity>

        {/* favoriteButton */}
        <FavoriteButton/>
    </View>
  )
}

export default ItemHome