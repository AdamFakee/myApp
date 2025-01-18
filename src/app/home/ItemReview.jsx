import { View, Text } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import StarReview from '../../components/home.component/itemReview/StarReview'
import img from '../../constant/img'
import CommentReview from '../../components/home.component/itemReview/CommentReview'
import { SafeAreaView } from 'react-native-safe-area-context'
import WriteReviewButton from '../../components/home.component/itemReview/WriteReviewButton'
import WriteReviewBottomSheet from '../../components/home.component/itemReview/WriteReviewBottomSheet'
import TotalInfomationRating from '../../components/home.component/itemReview/TotalInfomationRating'
import { ratingLibNettwork } from '../../nettwork/lib/rating.lib'
import filterRatingReducer from '../../reducer/filterRating.reducer'
import { Loading } from '../../components/loading.component/loading'

const ItemReview = () => {
  const navigation = useNavigation();
  const {params} = useRoute()
  const idItem = params.idItem;
  const [dataCommentReview_not_contain_photo, dispatchDataCommentReview_not_contain_photo] = useReducer(filterRatingReducer, []);
  const [dataChart, dispatchDataChart] = useReducer(filterRatingReducer, []);
  const [dataCommentReview_contain_photo, dispatchDataCommentReview_contain_photo] = useReducer(filterRatingReducer, []);
  const [isLoading, setIsLoading]  = useState(false);
  const [isWriteReview, setIsWriteReview] = useState(false);
  const [isWatchWithPhoto, setIsWatchWithPhoto] = useState(false);
  // ref select size to cart
    const bottomSheetRef = useRef(null);
  // call api detail 
  useEffect(() => {
    if(isWatchWithPhoto == false) {
      const fetch = async () => {
        try {
          const response = await ratingLibNettwork.detail(idItem);
          const {code, data} = response.data;
          if(code == 200) {
            dispatchDataCommentReview_not_contain_photo({
              type : 'copy',
              value : {
                data : data.rating_not_contain_img
              }
            });
            dispatchDataCommentReview_contain_photo({
              type : 'copy',
              value : {
                data : data.rating_contain_img
              }
            });
            console.log(data.ratingChart['info'].avg)
            dispatchDataChart({
              type : 'copy',
              value : {
                data : data.ratingChart
              }
            });
          }
        } catch (error) {
          console.log(error.message)
        } finally {
          setIsLoading(true);
        }
      }
      fetch();
    }
  }, [idItem]);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsLoading(false)
    })
  }, [navigation])
  if(isLoading == false) {
    console.log('load')
    return (
      <SafeAreaView className='flex-1 pb-[50px] space-y-[24px] px-[16px] bg-[#f9f9f9]'>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className = "flex-1 px-[16px]">
      <View >
        {/* title */}
        <Text className='text-[#222222] text-[38px] mb-[30px] font-[700]'>Rating&Reviews</Text>
        {/* star */}
        <StarReview dataRating={dataChart}/> 
      </View>

      {/* comment review */}
      <View className='mt-[33px]' style={{flex : 4}}>
        {
          isWatchWithPhoto 
            ? <TotalInfomationRating data={dataCommentReview_contain_photo} isWatchWithPhoto={isWatchWithPhoto} setIsWatchWithPhoto={setIsWatchWithPhoto}/>
            : <TotalInfomationRating data={dataCommentReview_not_contain_photo} isWatchWithPhoto={isWatchWithPhoto} setIsWatchWithPhoto={setIsWatchWithPhoto}/>
        }

        {/* infomation about review */}
        {
          isWatchWithPhoto 
            ? <CommentReview dataCommentReview={dataCommentReview_contain_photo} isContainImage={true}/>
            : <CommentReview dataCommentReview={dataCommentReview_not_contain_photo} isContainImage={false}/>  
        }
      </View>
      {/* write review button */}
      <WriteReviewButton isWriteReview={isWriteReview} setIsWriteReview={setIsWriteReview}/>
      {
        isWriteReview ? <WriteReviewBottomSheet productId = {idItem} isWriteReview={isWriteReview} setIsWriteReview={setIsWriteReview} bottomSheetRef={bottomSheetRef} dispatchDataCommentReview_contain_photo={dispatchDataCommentReview_contain_photo} dispatchDataCommentReview_not_contain_photo={dispatchDataCommentReview_not_contain_photo}/> : null
      }
      {/* write a review bottom sheet */}
    </SafeAreaView>
  )
}


export default ItemReview