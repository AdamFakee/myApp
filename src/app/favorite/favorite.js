import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState, useRef, useCallback, useEffect} from 'react'
import FormSearch from '../../components/favorite.component/FormSearch'
import SortAndShow from '../../components/favorite.component/SortAndShow'
import img from '../../constant/img'
import ShowOneColumn from '../../components/favorite.component/ShowOneColumn'
import ShowTwoColumn from '../../components/favorite.component/ShowTwoColumn'
import CustomBottomSheetModal from '../../components/shop.component/categoryDetail.shop.component/BottomSheetModal'
import { useNavigation } from '@react-navigation/native'

const Favorite = () => {
  // data fake
  const dataListItem = [
    {
      id : 1,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : false,
    },
    {
      id : 2,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : false,
    },
    {
      id : 3,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : true
    },
    {
      id : 4,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : false
    },
    {
      id : 5,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 4,
      totalStar : 10,
      soldOut : false
    },
    {
      id : 6,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : false
    }
  ]
  const filterSorted = [
    {
      id : 1,
      title : 'Popular'
    },
    {
      id : 2,
      title : 'Newest'
    },
    {
      id : 3,
      title : 'Customer review'
    },
    {
      id : 4,
      title : 'Price: lowest to high'
    },
    {
      id : 5,
      title : 'Price: highest to low'
    },
  ]
  // End data fake
  const [filterSortedTitle, setFilterSortedTitle] = useState({
    id : 4,
    title : 'Price: lowest to high'
  });
  const [searchValue, setSearchValue] = useState({
    title : ''
  });
  const [isSearch, setIsSearch] = useState(false) // type on keyboard
  const [isShowOneColumn, setIsShowOneColumn] = useState(false);
  const navigation = useNavigation();
  console.log(isSearch)
  // ref bottom sheet modal
  const bottomSheetModalRef = useRef(null); 

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // choose sorted type
  const handleChooseSortedType = (item) => {
    setFilterSortedTitle(item);
  }
  // detail item
  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('HomeTabBar', {
      screen : "ItemDetail",
      params : {idItem, titleHeader}
    });
  }
  return (
    <SafeAreaView className='flex-1'>
      {/* header */}
      <View 
        style={styles._header}
      >
        {/* search */}
        <FormSearch searchValue={searchValue} setSearchValue={setSearchValue} setIsSearch={setIsSearch}/>

        {/* title */}
        {
          isSearch == false
            ? <Text className='text-[#222] capitalize text-[34px] font-[600]' style={{flex : 3}}>Favorites</Text>
            : null
        }

        {/* sort + type show */}
        {
          isSearch ==  false
            ? <SortAndShow 
            isShowOneColumn={isShowOneColumn} 
            setIsShowOneColumn={setIsShowOneColumn} 
            handlePresentModalPress={handlePresentModalPress} 
            filterSortedTitle={filterSortedTitle}
          />
            : null
        }
        
      </View>
      {/* list item */}
      <View style={styles._listItem}>
        {
          isShowOneColumn 
            ? <ShowOneColumn dataListItem={dataListItem} handleClickDetailItem={handleClickDetailItem}/>
            : <ShowTwoColumn dataListItem={dataListItem} handleClickDetailItem={handleClickDetailItem}/>
        }
      </View>
      {/* bottom sheet */}
      <CustomBottomSheetModal filterSorted={filterSorted} bottomSheetModalRef={bottomSheetModalRef} filterSortedTitle={filterSortedTitle} handleChooseSortedType={handleChooseSortedType}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  _header : {
    paddingBottom : 8,
    gap : 18,
    flex : 2,
    paddingTop : 50,
    paddingHorizontal : 16,
    backgroundColor : '#F9F9F9',
    shadowColor : '#0000001F',
    shadowOffset : {
      height : 4,
      width : 0
    },
    shadowRadius : 12,
    elevation : 10
  },
  _listItem : {
    padding : 16,
    flex : 8,
    marginBottom : 40,
  },

})

export default Favorite
