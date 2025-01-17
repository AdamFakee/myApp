import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const screenWidth = Dimensions.get('window').width; // Lấy chiều rộng màn hình
const widthItem = (screenWidth - 16 * 2 -22*2) / 3;

const CategoryFilter = ({title, dbCategory, listCategoryChoice, dispatchListCategoryChoice}) => {
  return (
    <View>
        <Text className='text-[#222222] h-[42px] py-[12px] text-[16px] capitalize px-[16px]'>{title}</Text>
        <View className='py-[24px] px-[16px] bg-[#fff] flex flex-row'>
            <FlatList
                data={dbCategory}
                scrollEnabled={false}
                keyExtractor={item => item}
                numColumns={3}
                columnWrapperStyle = {{
                    justifyContent: 'flex-start',
                    gap : '22' 
                }}
                key={'category'}
                ItemSeparatorComponent={() => <TouchableOpacity className='my-[6px]'></TouchableOpacity>}
                renderItem={({item}) => {
                    return (
                    <TouchableOpacity onPress={() => {
                        listCategoryChoice.includes(item) ? dispatchListCategoryChoice({
                            type : 'delete',
                            value : item,
                        }) : dispatchListCategoryChoice({
                                type : 'add',
                                value : item,
                            })
                    }}>
                        <View 
                            className={`h-[40px] rounded-[8px] justify-center flex items-center flex-row ${listCategoryChoice.includes(item) ? 'bg-[#DB3022]' : 'bg-transparent border-[0.4px] border-[#9B9B9B]'}`}
                            style={{width:widthItem}}
                        >
                            <Text className={`capitalize font-[500] text-[16px] ${listCategoryChoice.includes(item) ? 'text-[#FFFFFF]' : 'text-[#222222]'} `}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    </View>
  )
}

export default CategoryFilter