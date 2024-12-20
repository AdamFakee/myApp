import React, { useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBrand from '../../components/shop.component/brand.shop.component/SearchBrand'
import CategoryBrand from '../../components/shop.component/brand.shop.component/CategoryBrand'
import filterItemReducer from '../../reducer/filterItem.reducer'
import { useShopContext } from '../../context/ShopProvider'
import ConfirmButton from '../../components/shop.component/brand.shop.component/ConfirmButton'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Brand = () => {
  // db Fake
  const dbCategory = [
    {
      id : 1,
      title : "adidas"
    },
    {
      id : 2,
      title : "adidas Originals"
    },
    {
      id : 3,
      title : "Blend"
    },
    {
      id : 4,
      title : "Boutique Moschino"
    },
    {
      id : 5,
      title : "Champion"
    },
    {
      id : 6,
      title : "Diesel"
    },
    {
      id : 7,
      title : 'Jack & Jones'
    },
    {
      id : 8,
      title : 'Naf Naf'
    },
    {
      id : 9,
      title : 'Red Valentino'
    },
    {
      id : 10,
      title : 's.Oliver'
    }
  ]
  // End db Fake

  // hidden tabber when are in this screen
  const navigation = useNavigation();
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

  const {listBrand, setListBrand} = useShopContext();
  const [searchBrandValue, setSearchBrandValue] = useState("");
  const [listCategoryChoosen, dispatchListCategoryChoosen] = useReducer(filterItemReducer ,listBrand);
  useEffect(() => {
    setListBrand(listCategoryChoosen);
  }, [listCategoryChoosen]);
  return (
    <SafeAreaView className='flex-1 pb-[82px] '>
      <View className='flex-1 px-[16px]'>
        {/* search */}
        <SearchBrand searchBrandValue={searchBrandValue} setSearchBrandValue={setSearchBrandValue}/>

        {/* category */}
        <CategoryBrand 
          dbCategory={dbCategory} 
          listCategoryChoosen={listCategoryChoosen} 
          dispatchListCategoryChoosen={dispatchListCategoryChoosen}
        />
      </View>
      <ConfirmButton/>
    </SafeAreaView>
  )
}

export default Brand