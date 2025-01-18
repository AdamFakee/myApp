import {StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import StarRating from './bottomSheet/StarRating';
import BottomSubmit from './bottomSheet/BottomSubmit';
import ModalCamera from './bottomSheet/ModalCamera';
import WriteContent from './bottomSheet/WriteContent';
import { ratingLibNettwork } from '../../../nettwork/lib/rating.lib';
import { useGlobalContext } from '../../../context/GlobalProvider';
// import formData from 'form-data';

const WriteReviewBottomSheet = ({productId, bottomSheetRef, isWriteReview, setIsWriteReview, dispatchDataCommentReview_not_contain_photo, dispatchDataCommentReview_contain_photo}) => {
    const {token, setIsLogged, isLogged} = useGlobalContext();
    const [isAddPhoto, setIsAddPhoto] = useState(false)
    // form submit
    const [formRatingReview, setFormRatingReview] = useState({
        star : 5,
        content : '',
        imgs : [],
    })

    const [isSubmit, setIsSubmit] = useState(false);
    
    // call api
    useEffect(() => {
        if(isSubmit) {
            const accessToken = token.accessToken;
            if(!accessToken || !isLogged) {
                setIsLogged(false);
                Alert.alert('you are logout')
                return;
            }
            const headers = { 'Authorization': `Bearer ${accessToken}` };
            const body = new FormData();
            body.append('star', formRatingReview.star);
            body.append('content', formRatingReview.content);
            body.append('productId', productId)
            formRatingReview.imgs.forEach(item => {
                body.append('imgs', {
                    uri: item.uri, 
                    type: item.mimeType, 
                    name: item.fileName || `photo_${Date.now()}.jpg`, 
                });
            })
            const fetch = async (dataSending, headers) => {
                try {
                    const response = await ratingLibNettwork.create(dataSending, headers);
                    const {code, data} = response.data;
                    if(code == 200) {
                        const {imgArray} = data;
                        if(imgArray.length > 0) {
                            dispatchDataCommentReview_contain_photo({
                                type : 'add',
                                value : {
                                  imgArray : imgArray,
                                  detail : formRatingReview.content,
                                  star : formRatingReview.star
                                }
                            });
                        } else {
                            dispatchDataCommentReview_not_contain_photo({
                                type : 'add',
                                value : {
                                  detail : formRatingReview.content,
                                  star : formRatingReview.star
                                }
                            });
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            fetch(body, headers);
            setIsSubmit(false)
            setIsWriteReview(false)
        }
    }, [isSubmit])

    // func for bottom sheet
    const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[]
	);
    const handleClosePress = () => {
        bottomSheetRef.current?.close();
        setIsWriteReview(false)
    }

    const handleSheetChanges = useCallback((index) => {
        if(index == -1) {
            setIsWriteReview(false)
        }
      }, []);
    // End func for bottom sheet
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['77%']}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{  // màu của thanh ngangngang
                backgroundColor : '#9B9B9B'
            }}
            // handleStyle = {}
        >
            <BottomSheetView style={[styles._bottomView]}>
                {/* star ratingrating */}
                <StarRating formRatingReview={formRatingReview} starDefault={formRatingReview.star} setFormRatingReview={setFormRatingReview}/>
                
                {/* write content */}
                <WriteContent 
                    setFormRatingReview={setFormRatingReview} 
                    formRatingReview={formRatingReview} 
                    isAddPhoto={isAddPhoto} 
                    setIsAddPhoto={setIsAddPhoto} 
                />

                {/* button */}
                <BottomSubmit setIsSubmit={setIsSubmit}/>
                            
                {/* modal show cam + galary */}
                <ModalCamera setFormRatingReview={setFormRatingReview} formRatingReview={formRatingReview} isAddPhoto={isAddPhoto} setIsAddPhoto={setIsAddPhoto}/>
            </BottomSheetView>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    _bottomView : {
        paddingHorizontal: 24,
        backgroundColor: '#f9f9f9',
        paddingBottom: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 30,
        flex : 1,
    }, 
    _imgUpload : {
        marginRight : 16,
        backgroundColor : 'yellow'
    },
    _button : {
        shadowColor : '#D3262640',
        shadowOffset : {
            height : 4,
            width : 0
        },
        shadowOpacity : 8,
    }
})

export default WriteReviewBottomSheet