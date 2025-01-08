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
      <Text className='text-[#9B9B9B] font-[600] text-[16px] line-through'>{oldPrice}$</Text>
      <Text className='text-[#DB3022] font-[600] text-[16px]'>{newPrice}$</Text>
    </View> 
  )
}
const MarkNotContainOldPrice = ({oldPrice}) => {
  return (
    <View className='flex flex-row gap-[7px] w-full'>
      <Text className='text-[#DB3022] font-[600] text-[16px]'>{oldPrice}$</Text>
    </View> 
  )
}
const ItemHome = ({item, handleClickDetailItem}) => {
  return (
    <View className='w-[150px] space-y-[5px] relative'>
        {/* mark title */}
        {
          item.discount < 10 ? <MarkNewItem/> : item.discount > 0 ? <MarkDiscount discount={item.discount}/> : null
        }

        {/* infor item */}
        <TouchableOpacity activeOpacity={1} onPress={() => handleClickDetailItem(item.productId, item.productName)}>
          <View className='w-full'>
              <Image
                  source={{ uri: item.imageMain }}
                  className='object-cover w-full'
                  style={{aspectRatio : 148/184}}
              />
              {/* category */}
              <Text className='text-[#9B9B9B] font-[400] text-[16px]'>{item.categoryName}</Text>
              {/* product name */}
              <Text className='text-[#222222] font-[600] text-[20px]'>{item.productName}</Text>
              {/* price */}
              {
                item.discount > 0 ? <MarkContainOldPrice oldPrice={item.price} newPrice={item.newPrice}/> : <MarkNotContainOldPrice oldPrice={item.price}/>
              }              
          </View>
        </TouchableOpacity>

        {/* favoriteButton */}
        <FavoriteButton/>
    </View>
  )
}

export default ItemHome