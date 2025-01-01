import { View, Text } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings';

const StarRating = ({starDefault, setFormRatingReview, formRatingReview}) => {
    return (
        <View className='items-center space-y-[16px]'>
            <Text className='text-[#222] text-[18px] font-[500] text-center'>What is you rate?</Text>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={36}
                ratingColor='#FFBA49'
                tintColor='#f9f9f9'
                startingValue={starDefault}
                onFinishRating={(star) => {                    
                    // Cập nhật state với giá trị mới
                    setFormRatingReview((prev) => {
                        const updatedState = { ...prev, star: star };
                        return updatedState;
                    });
                }}
                // onFinishRating={(star) => setFormRatingReview({...formRatingReview, star : star})}
            />
        </View>
    )
}

export default StarRating