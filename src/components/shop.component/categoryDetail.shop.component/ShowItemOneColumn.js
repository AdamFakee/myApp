import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import productItem from '../../../dbFake/productItem'
import FavoriteButton from '../../home.component/index.home.component/FavoriteButton'

const ShowItemOneColumn = ({handleClickDetailItem}) => {
  return (
    <FlatList
        data={productItem}
        contentContainerStyle={{
            paddingBottom: 26, // Add padding to the whole list
        }}
        key={'list'} // Key cố định khi là 1 cột
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View className='my-[13px]'></View>}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return (
                <View className='h-[104px] w-full flex flex-row justify-start items-center bg-[#FFFFFF] rounded-[8px] relative' >
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={() => handleClickDetailItem(item.id, item.title)}
                        className='flex flex-row justify-center items-center'
                    >
                        <Image
                            source={item.image}
                            className='h-[full] aspect-[1/1] object-cover overflow-hidden mr-[16px]'
                        />
                        <View>
                            <Text className='text-[#222] font-[600] text-[18px] capitalize'>{item.title}</Text>
                            <Text className='text-[#9B9B9B] font-[400] text-[13px] capitalize'>{item.brand}</Text>
                            <View className='flex flex-row gap-x-[4px]'>
                                <Text className='text-[#222] font-[500] text-[15px] capitalize line-through'>{item.oldPrice}</Text>
                                <Text className='text-[#DB3022] font-[500] text-[15px] capitalize'>{item.newPrice}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <FavoriteButton otherStyle="bottom-[-50%] right-[-25%]"/>
                </View>
            )
        }}
    />
  )
}

export default ShowItemOneColumn