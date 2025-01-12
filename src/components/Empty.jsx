import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Empty = ({iconName, text}) => {
    return (
        <View className='flex-1 justify-center items-center'>
            <AntDesign 
                name={iconName} 
                size={90} 
                color="#9b9b9b"
                style={{
                    opacity : 0.8
                }}
            />
            <Text className='text-[#9b9b9b] text-[20px] font-[700]'>{text}</Text>
        </View>
    )
}

export default Empty