import { View, Text, Button ,Image, StatusBar, TouchableOpacity, StyleSheet, FlatList, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import img from '../../constant/img'
import ListItemHome from '../../components/home.component/index.home.component/ListItemHome'
import { homeLibNettwork } from '../../nettwork/lib/home.lib'
import { favoriteLibNettwork } from '../../nettwork/lib/favorite.lib'
import { useGlobalContext } from '../../context/GlobalProvider'

const Home = () => {
  const navigation = useNavigation();
  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('ItemDetail', {idItem, titleHeader});
  }
  const [discountProducts, setDiscountProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const {token, isLogged, setIsLogged} = useGlobalContext();


  // call api add to favorite
  const handleAddToFavorite = async (data) => {
    try {
      const accessToken = token.accessToken;
      if(!accessToken || !isLogged) {
          setIsLogged(false); // no token => set logout
          return;
      }
      const headers = { 'Authorization': `Bearer ${accessToken}` };
      const response = await favoriteLibNettwork.addToFavorite(data, headers);
      const code = response.data.code;
      if(code != 200) {
        Alert.alert('add have some err');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // call api
  useEffect(() => {
    homeLibNettwork.getProduct()
      .then(function (response) {
        const {data, code} = response.data;
        if(code == "200") {
          setDiscountProducts(data.discountProducts);
          setNewProducts(data.newProducts);
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  // end call api

  return (
    <View className='flex-1'>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={{ flex:1}} showsVerticalScrollIndicator={false}>
        <View className="space-y-[40px]">
          {/* banner */}
          <View className='w-full relative '>
            <Image 
              source={img.homeSmallBanner}
              className='w-full object-cover'
            />
            <Text className='text-[#fff] text-[34px] font-[700] absolute bottom-[26px] left-[16px]'>Street clothes</Text>
          </View>
          {/* End banner */}

          {/* sale product item */}
          <ListItemHome
            information={
              {
                title:'sale',
                type:'sumer sale',
                textLink:'view all'
              }
            }
            productItem={discountProducts}
            handleClickDetailItem={handleClickDetailItem}
            handleAddToFavorite={handleAddToFavorite}
          />
          {/* End sale product item */}

          {/* new product item */}
          <ListItemHome
            information={
              {
                title:'new',
                type:'You’ve never seen it before!',
                textLink:'view all'
              }
            }
            productItem={newProducts}
            handleClickDetailItem={handleClickDetailItem}
            handleAddToFavorite={handleAddToFavorite}
          />
          {/* End new product item */}
        </View>
      </ScrollView>
    </View>
  )
}


export default Home