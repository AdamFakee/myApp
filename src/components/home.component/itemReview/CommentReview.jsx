import { View, Text, FlatList, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

// mảng chứa số sao đánh giágiá
const starCount = [
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="staro" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="staro" size={15} color="#FFBA49" />,
    ],
    [
        <AntDesign key={0} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={1} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={2} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={3} name="star" size={15} color="#FFBA49" />,
        <AntDesign key={4} name="star" size={15} color="#FFBA49" />,
    ]
  ];
  

const Render = ({item}) => {
    const isContainImage = item.imgs.length > 0 || false;
    const starReviewElement = starCount[item.star - 1]
    return (
        <View className=' bg-[#fff] rounded-[8px] relative p-[24px] mx-[13px]'>
            {/* avatar */}
            <View className='absolute top-[-8%] left-[-5%] w-[32px] h-[32px] z-[10]'>
                <Image source={item.avatar}/>
            </View>
            {/* information about author and comment review */}
            <View className='flex-row w-full justify-between my-[10px] items-end'>
                <View>
                    <Text className='font-[500] text-[18px] text-[#222]'>{item.fullName}</Text>
                    <View className='flex-row'>
                        {/* start */}
                        {starReviewElement}
                    </View>
                </View>
                <Text className='text-[#9B9B9B] text-[14px] font-[400]'>{item.time}</Text>
            </View>

            {/* content review*/}
            <View>
                <Text className='text-[#222] text-[14px] font-[400] leading-[21px] pb-[16px]'>{item.content}</Text>
            </View>

            {/* img */}
            {
                isContainImage && (
                    <ScrollView 
                        horizontal={true} 
                        className='space-x-[16px]'
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            item.imgs.map((imgUrl, index) => 
                                <Image
                                    source={imgUrl}
                                    key={index}
                                    className='h-[104px] w-[104px] rounded-[8px]'
                                />
                            )
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

const CommentReview = ({dataCommentReview}) => {
    return (
        <FlatList
            data = {dataCommentReview}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <Render item = {item}/>
            }}
            ItemSeparatorComponent={() => <View className='my-[15px]'></View>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop : 16,
                paddingBottom : 80,
            }}
        />

    )
}


export default CommentReview