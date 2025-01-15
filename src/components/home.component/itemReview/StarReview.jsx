import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const StarReview = ({dataRating}) => {
  return (
    <View className='space-x-[28px] w-full flex-row'>
        {/* sum review */}
        <View className='space-y-[16px] items-center'>
          <Text className='text-[#222222] text-[38px] font-[700]'>{dataRating['info'].avg}</Text>
          <Text className='text-[#9B9B9B] text-[20px] font-[400]'>{dataRating['info'].cnt} ratings</Text>
        </View>

        {/* star cnt */}
        <View className='space-y-[9px]'>
          <View className='flex-row items-center space-x-[20px]'>
            <View className='flex-row justify-end'>
              {/* start */}
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
            </View>
            {/* bar */}
            <View className='bg-[#DB3022] h-[8px] w-[114px] rounded-[4px]'></View>
            {/* number of star */}
            <Text>{dataRating[5].cnt}</Text>
          </View>
          <View className='flex-row items-center space-x-[20px]'>
            <View className='flex-row justify-end'>
              {/* start */}
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
            </View>
            {/* bar */}
            <View className=' h-[8px] w-[114px]'>
              <View className='bg-[#DB3022] h-[8px] w-[60px] rounded-[4px]'></View>
            </View>
            {/* number of star */}
            <Text>{dataRating[4].cnt}</Text>
          </View>
          <View className='flex-row items-center space-x-[20px]'>
            <View className='flex-row justify-end'>
              {/* start */}
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
            </View>
            {/* bar */}
            <View className=' h-[8px] w-[114px]'>
              <View className='bg-[#DB3022] h-[8px] w-[45px] rounded-[4px]'></View>
            </View>
            {/* number of star */}
            <Text>{dataRating[3].cnt}</Text>
          </View>
          <View className='flex-row items-center space-x-[20px]'>
            <View className='flex-row justify-end'>
              {/* start */}
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
            </View>
            {/* bar */}
            <View className=' h-[8px] w-[114px]'>
              <View className='bg-[#DB3022] h-[8px] w-[30px] rounded-[4px]'></View>
            </View>
            {/* number of star */}
            <Text>{dataRating[2].cnt}</Text>
          </View>
          <View className='flex-row items-center space-x-[20px]'>
            <View className='flex-row justify-end'>
              {/* start */}
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49" style={{opacity : 0}}/>
              <AntDesign name="star" size={15} color="#FFBA49"/>
            </View>
            {/* bar */}
            <View className=' h-[8px] w-[114px]'>
              <View className='bg-[#DB3022] h-[8px] w-[15px] rounded-[4px]'></View>
            </View>
            {/* number of star */}
            <Text>{dataRating[1].cnt}</Text>
          </View>
        </View>
      </View>
  )
}

export default StarReview