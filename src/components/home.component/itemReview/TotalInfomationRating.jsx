import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const TotalInfomationRating = ({isWatchWithPhoto, setIsWatchWithPhoto, data}) => {
    return (
        <View className='flex-row w-full justify-between mb-[30px]'>
            <Text className='text-[#222] text-[22px] font-[600]'>{data.length} reivews</Text>
            <View className='flex-row space-x-[8px]'>
                {
                    isWatchWithPhoto 
                        ? <TouchableWithoutFeedback onPress={() => setIsWatchWithPhoto(!isWatchWithPhoto)}>
                            <View className='border-[#222222] bg-[#222222] border-[2px] h-[20px] w-[20px] rounded-[4px]'>
                                <Feather name="check" size={17} color="#FFFFFF" />
                            </View>
                        </TouchableWithoutFeedback>
                        : <TouchableWithoutFeedback onPress={() => setIsWatchWithPhoto(!isWatchWithPhoto)}>
                            <View className='border-[#9B9B9B] border-[2px] h-[20px] w-[20px] rounded-[4px]'></View>
                        </TouchableWithoutFeedback>
                }
                <Text>With photo</Text>
            </View>
        </View>
    )
}

export default TotalInfomationRating