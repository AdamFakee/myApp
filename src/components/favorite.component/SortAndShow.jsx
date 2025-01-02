import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import img from '../../constant/img'

const SortAndShow = ({isShowOneColumn, setIsShowOneColumn, handlePresentModalPress, filterSortedTitle}) => {
    return (
        <View className='flex-row justify-between items-center' style={{flex: 2}}>
            {/* sort by */}
            <TouchableOpacity className='flex flex-row gap-[11px] justify-center items-center'
                onPress={() => handlePresentModalPress()}
            >
                <Image
                    source={img.twoArrow}
                />
                {/* <Text>{filterSortedTitle.title}</Text> */}
                <Text>{filterSortedTitle.title}</Text>
            </TouchableOpacity>

            {/* type show */}
            <TouchableOpacity 
                onPress={() => setIsShowOneColumn(!isShowOneColumn)}
                className='flex flex-row justify-end items-center w-[30px] h-[30px]'
            >
                <Image
                    source={img.showOneColumn}
                    className='#222'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SortAndShow