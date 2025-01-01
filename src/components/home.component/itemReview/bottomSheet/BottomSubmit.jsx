import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomSubmit = ({setIsSubmit}) => {
    return (
        <TouchableOpacity 
            className='w-full bg-[#DB3022] h-[48px] rounded-[25px] flex justify-center items-center mt-[35px] mb-[20px]'
            activeOpacity={1}
            onPress={() => setIsSubmit(true)}
        >
            <Text className='text-[20px] text-[#fff] font-[500] text-center'>SEND REVIEW</Text>
        </TouchableOpacity>
    )
}

export default BottomSubmit