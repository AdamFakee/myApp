import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
const Render = ({item, dispatchOrder, handelCallApiDeleteItem, handleAddToFavorite}) => {
    const [isThreeDot, setIsThreeDot] = useState(false);
    const data = {
        productId : item.productId,
        sizeName : item.sizeName
    }

    return (
        <View className='flex-row h-[105px]' style={styles._container}>
            {/* img */}
            <Image 
                source={{uri : item.imageMain}}
                style={styles._image}
            />
            {/* desc */}
            <View className='space-y-[14px] p-[11px] flex-1 justify-center relative'>
                {/* productName, color, size, three dot */}
                <View className='flex-row justify-between items-start'>
                    {/* left */}
                    <View>
                        <Text className='text-[#222] text-[17px] font-[700]'>{item.productName}</Text>
                        <View className='flex-row gap-[14px]'>
                            <View className='flex-row space-x-[3px]'>
                                <Text className='text-[#9B9B9B] text-[13px] font-[400]'>Color:</Text>
                                <Text className='text-[#222] text-[13px] font-[500] ml-[5px]'>red</Text>
                            </View>
                            <View className='flex-row space-x-[3px]'>
                                <Text className='text-[#9B9B9B] text-[13px] font-[400]'>Size:</Text>
                                <Text className='text-[#222] text-[13px] font-[500] ml-[5px]'>{item.sizeName}</Text>
                            </View>
                        </View>
                    </View>
                    {/* right */}
                    <TouchableOpacity onPress={() => setIsThreeDot(!isThreeDot)}>
                        <Entypo name="dots-three-vertical" size={18} color="#9B9B9B" style={{opacity : 0.54}} />
                    </TouchableOpacity>
                </View>
                {/* number of item, price */}
                <View className='flex-row justify-between items-center'>
                    <View className='flex-row space-x-[16px] items-center'>
                        {/* minus */}
                        <TouchableOpacity 
                            className='h-[36px] w-[36px] rounded-full justify-center items-center'
                            style={styles._buttonChangeAmountItem}
                            onPress={() => dispatchOrder({
                                type : 'minus',
                                value : {
                                    productId : item.productId,
                                    amount : item.amount - 1,
                                    sizeName : item.sizeName
                                }
                            })}
                        >
                            <Entypo name="minus" size={24} color="#9B9B9B" />
                        </TouchableOpacity>
                        <Text className='text-[#222] text-[14px] font-[400]'>{item.amount}</Text>
                        {/* plus */}
                        <TouchableOpacity 
                            className='h-[36px] w-[36px] rounded-full justify-center items-center'
                            style={styles._buttonChangeAmountItem}
                            onPress={() => dispatchOrder({
                                type : 'plus',
                                value : {
                                    productId : item.productId,
                                    amount : item.amount + 1,
                                    sizeName : item.sizeName
                                }
                            })}
                        >
                            <Entypo name="plus" size={24} color="#9B9B9B" />
                        </TouchableOpacity>
                    </View>
                    <Text className='text-[#222] text-[px] font-[600]'>{item.newPrice}$</Text>
                </View>
                {/* pop up add to favorites, delete from the list */}
                {
                    isThreeDot 
                        ? 
                        <View style={styles._popUp}>
                            <TouchableOpacity 
                                activeOpacity={0.7}
                                onPress={() => handleAddToFavorite(data)}
                            >
                                <Text className='text-[#222222] text-[12px] font-[500] border-b-[1px] border-[#9b9b9b] px-[30px] py-[15px] text-center'>Add to favorites</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => handelCallApiDeleteItem(data)}
                            >
                                <Text className='text-[#222222] text-[12px] font-[500] px-[30px] py-[15px] text-center'>Delete from the list</Text>
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </View>
        </View>
    )
}

const ListItemInBag = ({data, dispatchOrder, handelCallApiDeleteItem, handleAddToFavorite}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item.productId}-${index}`}
            renderItem={({item}) => <Render item={item} dispatchOrder={dispatchOrder} handelCallApiDeleteItem={handelCallApiDeleteItem} handleAddToFavorite={handleAddToFavorite}/>}
            contentContainerStyle={{
                gap : 24,             
                position : 'relative', 
                zIndex : 1   
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    _container : {
        backgroundColor : '#fff',
        shadowOffset : {
            height : 1,
            width : 0
        },
        shadowColor : '#222',
        shadowRadius : 10,
        elevation : 5
    },
    _image : {
        height : '100%',
        aspectRatio : 1/1,
        objectFit : 'cover'
    },
    _buttonChangeAmountItem : {
        shadowOffset : {
            height : 1,
            width : 0
        },
        shadowColor : '#222',
        shadowRadius : 8,
        elevation : 5,
        backgroundColor : '#FCFCFC'
    },
    _popUp : {
        shadowOffset : {
            height : 1,
            width : 0
        },
        shadowColor : '#222',
        shadowRadius : 8,
        elevation : 5,
        backgroundColor : '#fff',
        borderRadius : 8,
        position : 'absolute',
        zIndex : 1,
        top : '-30%',
        right : '20%'
    }
})

export default ListItemInBag