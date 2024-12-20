import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import ShowItemOneColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemOneColumn'
import ShowItemTwoColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemTwoColumn'
import HeaderTop from '../../components/shop.component/categoryDetail.shop.component/HeaderTop'
import img from '../../constant/img'

const Catalog = () => {
  const [isShowOneColumn, setIsShowOneColumn] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  // data fake
  const categories = [
    {
      id:1,
      title : "t-shirts"
    },
    {
      id:2,
      title : "t-shirts"
    },
    {
      id:3,
      title : "t-shirts"
    },
    {
      id:4,
      title : "t-shirts"
    },
    {
      id:5,
      title : "t-shirts"
    }
  ]
  // End data fake

  // set header title 
  const titleHeader = "women's top";
  const navigation = useNavigation();

  // set header title
  useEffect(() => {
    if (titleHeader) {
      navigation.setOptions({
        headerTitle: titleHeader,    
      });
    }
  }, [titleHeader]); 

  // set search in header
  useEffect(() => {
    {
      isSearchButtonClicked == true ? (
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: 'none'
          }
        })
      ) : (
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: isSearchButtonClicked ? 'none' : 'flex',
          }
        })
      )
    }
    navigation.setOptions({
      headerRight: () => (
        isSearchButtonClicked ? (
          <TextInput
            autoFocus={true}
            onBlur={() => setIsSearchButtonClicked(!isSearchButtonClicked)}
            placeholder="Search here..."
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              padding: 5,
              width: 200,
              marginRight: 10,
            }}
          />
        ) : (
          <TouchableOpacity onPress={() => setIsSearchButtonClicked(!isSearchButtonClicked)}>
            <Image
              source={img.searchButton} 
            />
          </TouchableOpacity>
        )
      ),
    })
  }, [isSearchButtonClicked])

  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('HomeTabBar', {
      screen : "ItemDetail",
      params : {idItem, titleHeader}
    });
  }

  const handleClickFilter = () => {
    navigation.navigate('Filter');
  }

  return (
    <SafeAreaView className='flex-1 pb-[85px]'>
      {/* top */}
      <HeaderTop isShowOneColumn={isShowOneColumn} setIsShowOneColumn={setIsShowOneColumn} categories={categories} handleClickFilter={handleClickFilter}/>
      {/* product item */}
      <View className='px-[16px] mt-[16px] flex-1'>
        {
          isShowOneColumn == false ? <ShowItemOneColumn handleClickDetailItem={handleClickDetailItem}/> : <ShowItemTwoColumn handleClickDetailItem={handleClickDetailItem}/>
        }
      </View>
    </SafeAreaView>
  )
}



export default Catalog