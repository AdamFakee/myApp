import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import FavoriteButton from '../../home.component/index.home.component/FavoriteButton'

const ShowItemOneColumn = ({handleClickDetailItem, product}) => {
  return (
    <FlatList
        data={product}
        contentContainerStyle={{
            paddingBottom: 26, // Add padding to the whole list
        }}
        key={'list'} // Key cố định khi là 1 cột
        keyExtractor={item => item.productId}
        ItemSeparatorComponent={() => <View className='my-[13px]'></View>}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            return (
                <View className='h-[104px] w-full flex flex-row justify-between items-center bg-[#FFFFFF] rounded-[8px] relative' >
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={() => handleClickDetailItem(item.productId, item.productName)}
                        className='flex flex-row justify-center items-center'
                    >
                        <Image
                            source={{uri : item.imageMain}}
                            style={{
                                height : '100%',
                                aspectRatio : 1/1,
                                marginRight : 16,
                                objectFit : 'cover',
                                overflow : 'hidden'
                            }}
                        />
                        <View>
                            <Text className='text-[#222] font-[600] text-[18px] capitalize'>{item.productName}</Text>
                            <Text className='text-[#9B9B9B] font-[400] text-[13px] capitalize'>{item.shopName}</Text>
                            <View className='flex flex-row gap-x-[4px]'>
                                <Text className='text-[#222] font-[500] text-[15px] capitalize line-through'>22</Text>
                                <Text className='text-[#DB3022] font-[500] text-[15px] capitalize'>23</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <FavoriteButton otherStyle="bottom-[-50%]"/>
                </View>
            )
        }}
    />
  )
}

export default ShowItemOneColumn