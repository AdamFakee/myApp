import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ColorFilter = ({title, dbColor, listColorChoice, dispatchListColorChoice}) => {
  return (
    <View>
        <Text className='text-[#222222] h-[42px] py-[12px] text-[16px] capitalize px-[16px]'>{title}</Text>
        <View className='h-[88px] px-[16px] bg-[#fff] flex flex-row items-center'>
          <FlatList
            data={dbColor}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            horizontal
            ItemSeparatorComponent={() => <TouchableOpacity className='mx-[9px]'></TouchableOpacity>}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => {
                  listColorChoice.includes(item.id) ? dispatchListColorChoice({
                    type : 'delete',
                    value : item.id,
                  }) : dispatchListColorChoice({
                    type : 'add',
                    value : item.id,
                  })
                }}>
                  <View className={`h-[44px] w-[44px] rounded-[50%] border-[1px] ${listColorChoice.includes(item.id) ? 'border-[#DB3022]' : 'border-0'} flex justify-center items-center`}>
                    <View className={`h-[36px] w-[36px] rounded-[50%] bg-[${item.color}]`}></View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
    </View>
  )
}

export default ColorFilter