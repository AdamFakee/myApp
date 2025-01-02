import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import icon from '../../constant/icon';
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

const Render = ({item, handleClickDetailItem}) => {
  const starReviewElement = starCount[Math.floor(item.averageStar - 1)]
  return (
    <TouchableOpacity 
      activeOpacity={0.6}
      style={styles._item}
      onPress={() => handleClickDetailItem(item.id, item.productName)}
    >
      {/* img */}
      <View style={{flex : 3, position : 'relative'}}>
        <Image 
          source={item.image}
          style={styles._image}
        />
        {
          item.soldOut == false 
            ? 
              <TouchableOpacity
                style={styles._buttonAddToCart}
              >
                <Image source={icon.buttonAddToCart} style={{tintColor : '#fff', width : 14, height : 14}}/>
              </TouchableOpacity>
            :
              <View className='bg-[#fff] opacity-[0.7] absolute bottom-0 w-full px-[12px] py-[4px]'>
                <Text className='text-[#222] text-[13px] font-[400]'>Sorry, this item is currently sold out</Text>
              </View>
        }
        
      </View>

      {/* desc */}
      <View style={{flex: 2, gap : 3}}>
        {/* star */}
        <View className='flex-row space-x-[4px] w-full items-center'>
          <View className='flex-row items-center'>
            {starReviewElement} 
          </View>
          <Text className='text-[14px] text-[#9B9B9B] font-[400]'>({item.totalStar})</Text>
        </View>
        {/* shop name */}
        <Text className='text-[#9B9B9B] text-[14px] font-[400]'>{item.shopName}</Text>  
        {/* product name  */}
        <Text className='text-[#222] text-[18px] font-[500]'>{item.productName}</Text>    
        {/* color size */}
        <View style={styles._colorSize}>
          <Text className='text-[#9B9B9B] text-[14px] font-[400]'>
            Color: <Text className='text-[#222] text-[14px] font-[500] ml-[5px]'>{item.colorName}</Text>
          </Text>
          <Text className='text-[#9B9B9B] text-[14px] font-[400]'>
            Size: <Text className='text-[#222] text-[14px] font-[500] ml-[5px]'>{item.size}</Text>
          </Text>
        </View> 
        {/* price */}
        <Text className='text-[#222] text-[15px] font-[600]'>{item.newPrice}$</Text>
      </View>
      {/* sold out */}
      {
        item.soldOut 
          ? 
            <TouchableOpacity
              className='absolute bottom-0 z-[10] bg-[#FFFFFF] opacity-[0.5] w-full h-full'
              onPress={() => handleClickDetailItem(item.id, item.productName)}
            >
          
            </TouchableOpacity>
          : null
      }
    </TouchableOpacity>
  )
}

const ShowTwoColumn = ({dataListItem, handleClickDetailItem}) => {
  return (
    <FlatList
      data={dataListItem}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Render item={item} handleClickDetailItem={handleClickDetailItem}/>}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        gap : 16
      }}
      contentContainerStyle={{
        display : 'flex',
        gap : 19
      }}
      numColumns={2}
      key={'twoColumn'}
    />
  )
}
const styles = StyleSheet.create({
  _colorSize : {
    display : 'flex',
    flexDirection : 'row',
    gap : 18
  }, 
  _desc : {
    paddingLeft : 12,
    justifyContent : 'center',
  },
  _item : {
    flex : 1,
    position: 'relative',
    height : 'auto',
    borderRadius : 5,
    gap : 4,
    overflow : 'hidden',
    backgroundColor : '#f9f9f9'
  },
  _buttonAddToCart : {
    width : 36,
    height : 36,
    backgroundColor : '#DB3022',
    shadowColor : '#DB302229',
    shadowOffset : {
      height : 4, 
      width : 0
    },
    shadowRadius : 4,
    elevation : 5,
    borderRadius : '100%',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    position: 'absolute',
    bottom : '-8%',
    right: 0,
  },
  _image : {
    width : '100%',
    height : '100%',
    aspectRatio : 162 / 184,
    objectFit : 'cover',
    borderRadius : 12,
    overflow : 'hidden'
  }
})

export default ShowTwoColumn