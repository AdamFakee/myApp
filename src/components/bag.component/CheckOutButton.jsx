import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CheckOutButton = ({isCheckout,setIsCheckout}) => {
    return (
        <View className={`h-[112px] w-full flex justify-center items-center`}>
            <TouchableOpacity 
                activeOpacity={0.7}
                className='w-[343px] bg-[#DB3022] h-[48px] rounded-[25px] inline-flex justify-center items-center'
                onPress={() => setIsCheckout(true)}
            >
                <Text className='text-center text-[#FFFFFF] text-[20px] font-[500] uppercase'>Check out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckOutButton