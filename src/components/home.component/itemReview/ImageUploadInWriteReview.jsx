import { View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

 const Render = ({item}) => {
    return (
        <View className='w-[104px] h-[104px]'>
            <Image source={{ uri: item.uri }} className='w-full h-full rounded-[8px]'/>
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
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default ImageUploadInWriteReview