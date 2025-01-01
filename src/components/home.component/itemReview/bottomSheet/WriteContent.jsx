import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ImageUploadInWriteReview from '../ImageUploadInWriteReview';

const WriteContent = ({formRatingReview, setFormRatingReview, setIsAddPhoto, isAddPhoto}) => {
    return (
        <View className='items-center mt-[33px]'>
            {/* title */}
            <Text 
                className='text-center text-[18px] text-[#222] font-[500] w-[227px] mb-[18px]'
            >
                Please share your opinion about the product
            </Text>

            {/* content */}
            <View className='w-full '>
                {/* text */}
                <TextInput 
                    placeholder='Your review' 
                    multiline={true}  
                    style={[styles._textInput]} 
                    value={formRatingReview.content}
                    onChangeText={(value) => setFormRatingReview({...formRatingReview, content : value})}
                    className='text-[#9B9B9B] bg-[#FFFFFF] font-[400] text-[16px] w-full h-[154px] px-[12px] py-[16px] text-start rounded-[4px] mb-[39px]'
                />
                {/* img */}
                <View className='flex-row space-x-[16px]'>
                    {/* add photo */}
                    <TouchableOpacity 
                        activeOpacity={1}
                        style={styles._addPhoto}
                        onPress={() => {
                            setIsAddPhoto(!isAddPhoto)
                        }}
                    >
                        <View className='h-[52px] w-[52px] rounded-full bg-[#DB3022] items-center  flex-row justify-center'>
                            <FontAwesome name="camera" size={26} color="#fff" />
                        </View>
                        <Text className='text-[#222] text-[12px] font-[500]'>Add your photos</Text>
                    </TouchableOpacity>
                    {/* img uploaded */}
                    <View style={{flex : 2}}>
                        <ImageUploadInWriteReview formRatingReview={formRatingReview} setFormRatingReview={setFormRatingReview}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    _textInput : {
        textAlignVertical : 'top',
        shadowColor : '#0000000D',
        shadowOpacity : 0.08,
        shadowOffset : {
            height : 1,
            width : 0,
        },
        shadowRadius : 30 ,
    },
    _addPhoto : {
        shadowColor : '#00000029',
        shadowOpacity : 0.08,
        shadowOffset : {
            height : 1,
            width : 0,
        },
        shadowRadius : 16 ,
        backgroundColor : '#fff',
        height : 104,
        width : 104,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 6,
        // opacity : 0.2,
        borderRadius : 4
    },
})

export default WriteContent