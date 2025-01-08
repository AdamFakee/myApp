import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const EmptyBag = () => {
    return (
        <View className='flex-1 justify-center items-center'>
            <AntDesign 
                name="shoppingcart" 
                size={90} 
                color="#9b9b9b"
                style={{
                    opacity : 0.8
                }}
            />
            <Text className='text-[#9b9b9b] text-[20px] font-[700]'>Have no item in your cart</Text>
        </View>
    )
}

export default EmptyBag