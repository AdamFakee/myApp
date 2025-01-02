import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import icon from '../../constant/icon';
// mảng chứa số sao đánh giágiá
const starCount = [
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="star" size={15} color="#FFBA49" />,
    ]
  ];

const Render = ({item, handleClickDetailItem}) => {
    const starReviewElement = starCount[Math.floor(item.averageStar - 1)]
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className='flex-row justify-between h-[104px] bg-[#fff] relative'
            style={{
                marginBottom : item.soldOut ? 18 : 0
            }}
            onPress={() => handleClickDetailItem(item.id, item.productName)}
        >
            <View className='flex-row'>
                {/* img */}
                <Image 
                    source={item.image}
                    className='h-[104px] w-[104px]'
                />
                {/* desc */}
                <View style={styles._desc}>
                    {/* shop name */}
                    <Text className='text-[#9B9B9B] text-[14px] font-[400]'>{item.shopName}</Text>  
                    {/* product name  */}
                    <Text className='text-[#222] text-[20px] font-[500]'>{item.productName}</Text>    
                    {/* color size */}
                    <View style={styles._colorSize}>
                        <Text className='text-[#9B9B9B] text-[14px] font-[400]'>
                            Color: <Text className='text-[#222] text-[14px] font-[500] ml-[5px]'>{item.colorName}</Text>
                        </Text>
                        <Text className='text-[#9B9B9B] text-[14px] font-[400]'>
                            Size: <Text className='text-[#222] text-[14px] font-[500] ml-[5px]'>{item.size}</Text>
                        </Text>
                    </View> 
                    {/* price star */}
                    <View className='flex-row space-x-[58px]'>
                        <Text className='text-[#222] text-[16px] font-[500]'>{item.newPrice}$</Text>
                        <View className='flex-row space-x-[4px] justify-center items-center'>
                            <View className='flex-row justify-center items-center'>
                                {starReviewElement} 
                            </View>
                            <Text>({item.totalStar})</Text>
                        </View>
                    </View>       
                </View>
            </View>

            {/* remove and add to cart */}
            <View className='justify-between relative'>
                <TouchableOpacity
                    className='w-[40px] h-[40px] justify-center p-[9px]'
                >
                    <Feather name="x" size={24} color="#9b9b9b" style={{textAlign : 'right'}} />
                </TouchableOpacity>
                {
                    item.soldOut 
                        ? null
                        :
                            <TouchableOpacity
                                style={styles._buttonAddToCart}
                            >
                                <Image source={icon.buttonAddToCart} style={{tintColor : '#fff', width : 14, height : 14}}/>
                            </TouchableOpacity>
                }
            </View>
                
            {/* text sold out */}
            {
                item.soldOut 
                    ? 
                        <View className='bg-[#fff] opacity-[0.7] absolute bottom-[-25%] w-full px-[12px] py-[4px]'>
                            <Text className='text-[#222] text-[13px] font-[400]'>Sorry, this item is currently sold out</Text>
                        </View>
                    : null
            }
            {/* sold out */}
            {
                item.soldOut 
                    ? 
                        <TouchableOpacity
                            className='absolute bottom-0 h-full w-full bg-[#fff] opacity-[0.6]'
                            onPress={() => handleClickDetailItem(item.id, item.productName)}
                        >

                        </TouchableOpacity>
                    : null
            }
        </TouchableOpacity>
    )
}

const ShowOneColumn = ({dataListItem, handleClickDetailItem}) => {
    return (
        <FlatList
            data={dataListItem}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Render item={item} handleClickDetailItem={handleClickDetailItem}/>}
            contentContainerStyle={{
                display : 'flex',
                gap : 22,
                paddingBottom : 20
            }}
            showsVerticalScrollIndicator = {false}
        />
    )
}

const styles = StyleSheet.create({
    _colorSize : {
        display : 'flex',
        flexDirection : 'row',
        gap : 18
    }, 
    _desc : {
        paddingLeft : 12,
        justifyContent : 'center',
    },
    _buttonAddToCart : {
        width : 36,
        height : 36,
        backgroundColor : '#DB3022',
        shadowColor : '#DB302229',
        shadowOffset : {
            height : 4, 
            width : 0
        },
        shadowRadius : 4,
        elevation : 5,
        borderRadius : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        position: 'absolute',
        bottom : '-15%'
    }
})

export default ShowOneColumn