import { View, Text, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ImageSilder from '../../components/home.component/itemDetail.home.component/ImageSilder'
import SelectDropDown from '../../components/home.component/itemDetail.home.component/SelectDropDown'
import FavoriteButton from '../../components/home.component/index.home.component/FavoriteButton'
import DescDrop from '../../components/home.component/itemDetail.home.component/DescDrop'
import img from '../../constant/img'
import ListAdditionalItem from '../../components/home.component/itemDetail.home.component/ListAdditionalItem'
import BottomSheetChooseSize from '../../components/home.component/itemDetail.home.component/BottomSheetChooseSize'
import CartButton from '../../components/home.component/itemDetail.home.component/CartButton'
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MixProductItem from '../../dbFake/MixProductItem'


const ItemDetail = () => {
  const {params} = useRoute();
  const {idItem, titleHeader} = params;
  const navigation = useNavigation();
  const [valueSelectSize, setValueSelectSize] = useState(null); // value of select dropdown
  const [valueSelectColor, setValueSelectColor] = useState(null); // value of select dropdown
  const [isChooseColor, setIsChooseColor] = useState(false); // =true when user click specific select dropwn => change border color
  const [isChooseSize, setIsChooseSize] = useState(false); 
  const [isShowSizeInCart, setIsShowSizeInCart] = useState(false); // show size when click cart
  const [isAddItemIntoCart, setIsAddItemIntoCart] = useState(false); // choose size to add item to cart
  // infoamtion item detail 
  const [informationItemDetail, setInformationItemDetail] = useState({
    id : 1,
    imgs : [
      img.itemDetail, img.itemDetail, img.homeSmallBanner
    ],
    shopName : 'h&m',
    category : 'short black dress',
    totalRating : 10,
    price : 20,
    desc : 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    detail : 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
    support : 'contac zalo : tuan dep trai',
    shippingInfo : 'unkown',
    listAdditionalItem : MixProductItem,
    productName : 'evening dress'
  })
  // information add item to cart
  const [informationAddItemToCart, setInformationAddItemToCart] = useState({
    id : idItem,
    size : '',
    idSize : ''
  });
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

  // call api
    // detail specific item
    useEffect(() => {
      console.log('call api : ', idItem)
    }, [idItem])

    // add item to cart
    useEffect(() => {
      if(isAddItemIntoCart) {
        console.log('call api add to cart', informationAddItemToCart)
        setIsAddItemIntoCart(false)
      }
    }, [isAddItemIntoCart])
  // End call api


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
  })
  // End set header title

  // ref select size to cart
  const bottomSheetRef = useRef(null);
 
  // navigate to review page
  const handleNavigateToReviewPage = (idItem) => {
    navigation.navigate('ItemReview', {idItem})
  }
  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('ItemDetail', {idItem, titleHeader});
  }
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <ScrollView>
          <View>
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
              <View className='flex flex-row justify-between mb-[8px]'>
                <View className='space-y-[4px] flex-1'>
                    <Text className='text-[#222222] text-[34px] font-[500] uppercase'>{informationItemDetail.shopName}</Text>
                    <Text className='text-[#9B9B9B] text-[16px] font-[400] capitalize'>{informationItemDetail.category}</Text>
                </View>
                <View>
                  <Text  className='text-[#222222] text-[34px] font-[500] uppercase'>${informationItemDetail.price}</Text>
                </View>
              </View>
              {/* End title */}

              {/* star review */}
              <View className='mb-[16px]'>
                <TouchableWithoutFeedback className='flex flex-row w-full space-x-[2px] items-center'
                  onPress={() => handleNavigateToReviewPage(idItem)}
                >
                  <View className='w-[77px] flex-row'>
                    <AntDesign name="star" size={15} color="#FFBA49"/>
                    <AntDesign name="star" size={15} color="#FFBA49"/>
                    <AntDesign name="star" size={15} color="#FFBA49"/>
                    <AntDesign name="star" size={15} color="#FFBA49"/>
                    <AntDesign name="star" size={15} color="#FFBA49"/>
                  </View>
                <Text className=''>({informationItemDetail.totalRating})</Text>
                </TouchableWithoutFeedback>
              </View>
              {/* End star review */}

              {/* desc */}
              <View className='mb-[20px] '>
                <Text className='text-[#222222] text-[14px] font-[400]'>{informationItemDetail.desc}</Text>
              </View>
              {/* End desc */}
            </View>

            {/* desc drop */}
            <View className='mb-[24px]'>
              <DescDrop title='Detail' descInfomation={informationItemDetail.detail}/>
              <DescDrop title='Support' descInfomation={informationItemDetail.support}/>
              <DescDrop title='Shipping info' descInfomation={informationItemDetail.shippingInfo}/>
            </View>
            {/* End desc drop */}
            {/* End description */}
            {/* additional item */}
            <ListAdditionalItem handleClickDetailItem={handleClickDetailItem} data={MixProductItem}/>
            {/* End additional item */}
          </View>
        </ScrollView>
      </View>
      {/* Cart button */}
      <CartButton set={setIsShowSizeInCart} isSet={isShowSizeInCart}/>
      {/* End cart button */}

      {/* select size */}
      {
        isShowSizeInCart 
          ? <BottomSheetChooseSize bottomSheetRef={bottomSheetRef} isAddItemIntoCart={isAddItemIntoCart} setIsAddItemIntoCart={setIsAddItemIntoCart} informationAddItemToCart={informationAddItemToCart} setInformationAddItemToCart={setInformationAddItemToCart} setIsShowSizeInCart={setIsShowSizeInCart}/> 
          : null 
      }
      {/* modal show infomation about size */}
      
    </SafeAreaView>
    )
}
export default ItemDetail