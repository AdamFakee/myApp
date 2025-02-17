import { View, Text, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import FavoriteButton from '../../home.component/index.home.component/FavoriteButton'

const screenWidth = Dimensions.get('window').width; // Lấy chiều rộng màn hình
const widthTwoColumn = (screenWidth - 16 -26*2) /2;
const heightTwoColumn = widthTwoColumn * 184 / 162;
const ShowItemTwoColumn = ({handleClickDetailItem, product}) => {
  return (
    <FlatList
        data={product}
        keyExtractor={item => item.productId}
        columnWrapperStyle={{
            justifyContent: 'space-between', // Khoảng cách ngang giữa các cột
        }}
        contentContainerStyle={{
        }}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View className='my-[5px]'></View>}
        numColumns={2}
        key={'grid'} // Key cố định khi là 2 cột
        renderItem={({item}) => {
        return (
            <View className=' relative'>
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={() => handleClickDetailItem(item.productId, item.productName)}
                >
                    <View 
                        className={`bg-[#FFFFFF] rounded-[8px] overflow-hidden`}
                        style={{width: widthTwoColumn,}}
                    >
                        <Image
                            source={{uri : item.imageMain}}
                            className={`w-full`}
                            style={{height:heightTwoColumn}}
                            resizeMode="cover"
                        />
                        <View>
                            <Text className='text-[#9B9B9B] font-[400] text-[13px] capitalize'>{item.shopName}</Text>
                            <Text className='text-[#222] font-[600] text-[18px] capitalize'>{item.productName}</Text>
                            <View className='flex flex-row gap-x-[4px]'>
                                <Text className='text-[#9B9B9B] font-[500] text-[15px] line-through capitalize'>22</Text>
                                <Text className='text-[#DB3022] font-[500] text-[15px] capitalize'>22</Text>
                            </View>
                        </View>
                        
                    </View>
                </TouchableOpacity>
                <FavoriteButton otherStyle="bottom-[29%] right-[-78%] z-[10]"/>
            </View>
        )
        }}
    />
  )
}

export default ShowItemTwoColumn