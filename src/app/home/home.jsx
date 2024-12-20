import { View, Text, Button ,Image, StatusBar, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import img from '../../constant/img'
import productItem from '../../dbFake/productItem'
import NewProductItem from '../../dbFake/NewProductItem'
import ListItemHome from '../../components/home.component/index.home.component/ListItemHome'

const Home = () => {
  const navigation = useNavigation();
  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('ItemDetail', {idItem, titleHeader});
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
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
            productItem={productItem}
            handleClickDetailItem={handleClickDetailItem}
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
            productItem={NewProductItem}
            handleClickDetailItem={handleClickDetailItem}
          />
          {/* End new product item */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  favoriteButton : {
    boxShadow: '0px 4px 4px 0px #00000014',
  }
});

export default Home