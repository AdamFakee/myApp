import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const SizeFilter = ({title, dbSize, listSizeChoice, dispatchListSizeChoice}) => {
  return (
    <View>
        <Text className='text-[#222222] h-[42px] py-[12px] text-[16px] capitalize px-[16px]'>{title}</Text>
        <View className='py-[24px] px-[16px] bg-[#fff] flex flex-row'>
            <FlatList
            data={dbSize}
            keyExtractor={item => item}
            horizontal
            scrollEnabled={false}
            ItemSeparatorComponent={() => <TouchableOpacity className='mx-[9px]'></TouchableOpacity>}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => {
                    listSizeChoice.includes(item) ? dispatchListSizeChoice({
                        type : 'delete',
                        value : item,
                    }) : dispatchListSizeChoice({
                            type : 'add',
                            value : item,
                        })
                }}>
                    <View className={`h-[40px] rounded-[8px] justify-center w-[40px] flex items-center flex-row ${listSizeChoice.includes(item) ? 'bg-[#DB3022]' : 'bg-transparent border-[0.4px] border-[#9B9B9B]'}`}>
                        <Text className={`uppercase font-[500] text-[16px] ${listSizeChoice.includes(item) ? 'text-[#FFFFFF]' : 'text-[#222222]'} `}>{item}</Text>
                    </View>
                </TouchableOpacity>
                )
            }}
            />
        </View>
    </View>
  )
}

export default SizeFilter