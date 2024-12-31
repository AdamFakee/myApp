import { View, Text, Image } from 'react-native'
import React, { useCallback } from 'react'
import { BottomSheetFlashList } from '@gorhom/bottom-sheet'
import { FlatList } from 'react-native-gesture-handler'

 const Render = ({item}) => {
    return (
        <View className='w-[104px] h-[104px]'>
            <Image source={{ uri: item }} className='w-full h-full rounded-[8px]'/>
        </View>
    )
}


const ImageUploadInWriteReview = ({formRatingReview, setFormRatingReview}) => {
    const listImgs = formRatingReview.imgs;
    return (
        <FlatList
            data={listImgs}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => <View className='mx-[8px]'></View>}
            renderItem={({item}) => {
                return <Render item = {item}/>
            }}
            horizontal={true}
        />
    )
}

export default ImageUploadInWriteReview