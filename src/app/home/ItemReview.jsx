import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import StarReview from '../../components/home.component/itemReview/StarReview'
import img from '../../constant/img'
import CommentReview from '../../components/home.component/itemReview/CommentReview'
import { SafeAreaView } from 'react-native-safe-area-context'
import WriteReviewButton from '../../components/home.component/itemReview/WriteReviewButton'
import WriteReviewBottomSheet from '../../components/home.component/itemReview/WriteReviewBottomSheet'
import Feather from '@expo/vector-icons/Feather';

const ItemReview = () => {

  // data fake
  const dataCommentReview = [
    {
      id : 1,
      fullName : 'Helene Moore',
      star : 2,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : []
    },
    {
      id : 2,
      fullName : 'Helene Moore',
      star : 4,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : []
    },
    {
      id : 3,
      fullName : 'Helene Moore',
      star : 5,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : []
    }
  ]
  const dataCommentReview_with_photo = [
    {
      id : 1,
      fullName : 'Helene Moore',
      star : 1,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : [
        img.reviewPhoto, img.reviewPhoto, img.reviewPhoto
      ]
    },
    {
      id : 2,
      fullName : 'Helene Moore',
      star : 3,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : [
        img.reviewPhoto, img.reviewPhoto, img.reviewPhoto
      ]
    },
    {
      id : 3,
      fullName : 'Helene Moore',
      star : 4,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : [
        img.reviewPhoto, img.reviewPhoto, img.reviewPhoto
      ]
    },
    {
      id : 4,
      fullName : 'Helene Moore',
      star : 4,
      avatar : img.avatar,
      content : `The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.`,
      time : 'June 5, 2019',
      imgs : [
        img.reviewPhoto, img.reviewPhoto, img.reviewPhoto
      ]
    }
  ]
  const dataRating = {
    averageRating : 4.3,
    numRating : 22,
    specificRating : [1, 4, 5, 11, 8]
  }
  // End data fake



  const {params} = useRoute()
  const idItem = params.idItem;

  const [isWriteReview, setIsWriteReview] = useState(false);
  const [isWatchWithPhoto, setIsWatchWithPhoto] = useState(false);
  // ref select size to cart
    const bottomSheetRef = useRef(null);
  // call api
  useEffect(() => {
    console.log('call api take review with idItem : ', idItem)
  }, [idItem])

  return (
    <SafeAreaView className = "flex-1 px-[16px]">
      <View >
        {/* title */}
        <Text className='text-[#222222] text-[38px] mb-[30px] font-[700]'>Rating&Reviews</Text>
        {/* star */}
        <StarReview dataRating={dataRating}/> 
      </View>

      {/* comment review */}
      <View className='mt-[33px]' style={{flex : 4}}>
        <View className='flex-row w-full justify-between mb-[30px]'>
          {
            isWatchWithPhoto 
              ? <Text className='text-[#222] text-[22px] font-[600]'>{dataCommentReview_with_photo.length} reivews</Text>
              : <Text className='text-[#222] text-[22px] font-[600]'>{dataCommentReview.length} reivews</Text>
          }
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

        {/* infomation about review */}
        {
          isWatchWithPhoto 
            ? <CommentReview dataCommentReview={dataCommentReview_with_photo}/>
            : <CommentReview dataCommentReview={dataCommentReview}/>  
        }
      </View>
      {/* write review button */}
      <WriteReviewButton isWriteReview={isWriteReview} setIsWriteReview={setIsWriteReview}/>
      {
        isWriteReview ? <WriteReviewBottomSheet isWriteReview={isWriteReview} setIsWriteReview={setIsWriteReview} bottomSheetRef={bottomSheetRef}/> : null
      }
      {/* write a review bottom sheet */}
    </SafeAreaView>
  )
}


export default ItemReview