import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import icon from '../../constant/icon'

const AnotherAuth = ({
    title, handleNavigation
}) => {
    return (
        <View >
            <TouchableOpacity 
            className='flex flex-row items-center justify-end mb-[28px] mt-[16px]'
            onPress={handleNavigation}
            >
            <Text className='font-[14px] text-right mr-[8px]'>{title}</Text>
            <Image 
                source={icon.arrowRight}
                className='w-[16px] h-[7px]'
            />
            </TouchableOpacity>
        </View>
    )
}

export default AnotherAuth