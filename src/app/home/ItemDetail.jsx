import { View, Text, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageSilder from '../../components/home.component/itemDetail.home.component/ImageSilder'
import SelectDropDown from '../../components/home.component/itemDetail.home.component/SelectDropDown'
import FavoriteButton from '../../components/home.component/index.home.component/FavoriteButton'
import DescDrop from '../../components/home.component/itemDetail.home.component/DescDrop'
import img from '../../constant/img'
import ListAdditionalItem from '../../components/home.component/itemDetail.home.component/ListAdditionalItem'



const ItemDetail = () => {
  const {params} = useRoute();
  const {idItem, titleHeader} = params;
  const navigation = useNavigation();
  const [valueSelectSize, setValueSelectSize] = useState(null); // value of select dropdown
  const [valueSelectColor, setValueSelectColor] = useState(null); // value of select dropdown
  const [isChooseColor, setIsChooseColor] = useState(false); // =true when user click specific select dropwn => change border color
  const [isChooseSize, setIsChooseSize] = useState(false); 
  const [isChooseDescItemDetail, setIsChooseItemDetail] = useState(false); 
  const [isChooseDescShipingInfo, setIsChooseShipingInfo] = useState(false)
  const [isChooseDescSupport, setIsChooseSupport] = useState(false)


  // fake data
  const listImg = [
    img.itemDetail, img.itemDetail, img.homeSmallBanner
  ]
  const dropDownList = [
    { label: 'Size s', value: 's'},
    { label: 'Size xs', value: 'xs' },
    { label: 'Size m', value: 'm' },
    { label: 'Size l', value: 'l' },
    { label: 'Size xxl', value: 'xxl' },
  ];
  // End fake dât


  // set header title 
  useEffect(() => {
    if (titleHeader) {
      navigation.setOptions({
        headerTitle: titleHeader,    
      });
    }
  }, [titleHeader]); 

  // hidden tabber when are in this screen
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none'
      }
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex'
        }
      });
    }
  }, [])
  // End set header title

  
 
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='mb-[90px]'>
          {/* image slider */}
          <ImageSilder data={listImg}/>

          {/* description */}
          <View className='px-[16px] mt-[16px]'>
            <View className='flex flex-row justify-between items-center mb-[24px]'>
              {/* select drop size*/}

              <SelectDropDown data={dropDownList}  value={valueSelectSize} setValue={setValueSelectSize} isChoose={isChooseSize} title='Size' isChooseSize={isChooseSize} setIsChooseSize={setIsChooseSize} isChooseColor={isChooseColor} setIsChooseColor={setIsChooseColor}/>

              {/* select drop color*/}
              <SelectDropDown data={dropDownList}  value={valueSelectColor} setValue={setValueSelectColor} isChoose={isChooseSize} title='Color' isChooseSize={isChooseColor} setIsChooseSize={setIsChooseSize} isChooseColor={isChooseColor} setIsChooseColor={setIsChooseColor}/>
              
              {/* favorite button */}
              <FavoriteButton otherStyle='removePosition'/>
              {/* End favorite button */}
            </View>
            {/* title */}
            <View className='flex flex-row justify-between mb-[16px]'>
              <View className='space-y-[4px] flex-1'>
                  <Text className='text-[#222222] text-[34px] font-[500] uppercase'>H&M</Text>
                  <Text className='text-[#9B9B9B] text-[16px] font-[400] capitalize'>Short black dress</Text>
              </View>
              <View>
                <Text  className='text-[#222222] text-[34px] font-[500] uppercase'>$19.99</Text>
              </View>
            </View>
            {/* End title */}

            {/* desc */}
            <View className='mb-[20px] '>
              <Text className='text-[#222222] text-[14px] font-[400]'>Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.</Text>
            </View>
            {/* End desc */}
          </View>

          {/* desc drop */}
          <View className='mb-[24px]'>
            <DescDrop isChoose={isChooseDescItemDetail} setIsChoose={setIsChooseItemDetail} title='Detail' descInfomation="Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim."/>
            <DescDrop isChoose={isChooseDescShipingInfo} setIsChoose={setIsChooseShipingInfo} title='Support' descInfomation="Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim."/>
            <DescDrop isChoose={isChooseDescSupport} setIsChoose={setIsChooseSupport} title='Shipping info' descInfomation="Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim."/>
          </View>
          {/* End desc drop */}
          {/* End description */}

          {/* additional item */}
          <ListAdditionalItem/>
          {/* End additional item */}

          {/* Cart button */}
          <View className='h-[112px] w-full flex justify-center items-center bg-[#fff]'>
            <TouchableOpacity className='w-[343px] bg-[#DB3022] h-[48px] rounded-[25px] inline-flex justify-center items-center'>
              <Text className='text-center text-[#FFFFFF] text-[20px] font-[500] uppercase'>Add to cart</Text>
            </TouchableOpacity>
          </View>
          {/* End cart button */}
        </View>
      </ScrollView>
    </SafeAreaView>
    )
}
export default ItemDetail