import {StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import StarRating from './bottomSheet/StarRating';
import BottomSubmit from './bottomSheet/BottomSubmit';
import ModalCamera from './bottomSheet/ModalCamera';
import WriteContent from './bottomSheet/WriteContent';
import { ratingLibNettwork } from '../../../nettwork/lib/rating.lib';
// import formData from 'form-data';

const WriteReviewBottomSheet = ({bottomSheetRef, isWriteReview, setIsWriteReview}) => {

    const [isAddPhoto, setIsAddPhoto] = useState(false)
    // form submit
    const [formRatingReview, setFormRatingReview] = useState({
        star : 5,
        content : '',
        imgs : []
    })

    const [isSubmit, setIsSubmit] = useState(false);
    
    // call api
    useEffect(() => {
        if(isSubmit) {
            const body = new FormData();
            body.append('star', 5);
            body.append('content', 'This is my review');
            body.append('imgs', {
                name: new Date() + '_profile',
                uri: formRatingReview.imgs[0],
                type: 'image/jpg',
            });
            for (let pair of body.entries()) {
                console.log(`${pair[0]}:`, pair[1]);
            }
            const fetch = async () => {
                try {
                    const response = await ratingLibNettwork.create(body);
                    const data = response.data;
                    console.log(data);
                } catch (error) {
                    console.log(error)
                }
            }
            fetch();
            setIsWriteReview(false)
            setIsSubmit(false)
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