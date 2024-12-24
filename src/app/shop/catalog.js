import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState ,useCallback, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import ShowItemOneColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemOneColumn'
import ShowItemTwoColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemTwoColumn'
import HeaderTop from '../../components/shop.component/categoryDetail.shop.component/HeaderTop'
import img from '../../constant/img'
import CustomBottomSheetModal from '../../components/shop.component/categoryDetail.shop.component/BottomSheetModal'


const Catalog = () => {
  // show one or two column
  const [isShowOneColumn, setIsShowOneColumn] = useState(false);

  // search item
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  // call api => lấy cái đầu tiên là được, còn đây để tạmtạm
  const [filterSortedTitle, setFilterSortedTitle] = useState({
    id : 4,
    title : 'Price: lowest to high'
  });
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

  // set header title 
  const titleHeader = "women's top"; // static title
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

  // go to ItemDetail screen to see all about item's information 
  const handleClickDetailItem = (idItem, titleHeader) => {
    navigation.navigate('HomeTabBar', {
      screen : "ItemDetail",
      params : {idItem, titleHeader}
    });
  }

  // change type filter
  const handleClickFilter = () => {
    navigation.navigate('Filter');
  }

  // ref
  const bottomSheetModalRef = useRef(null); 

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  
  // choose sorted type
  const handleChooseSortedType = (item) => {
    setFilterSortedTitle(item);
  }

  // renders
  return (
    <View className="flex-1">
      <HeaderTop isShowOneColumn={isShowOneColumn} setIsShowOneColumn={setIsShowOneColumn} categories={categories} handleClickFilter={handleClickFilter} handlePresentModalPress={handlePresentModalPress} filterSortedTitle={filterSortedTitle}/>
      {/* product item */}
      <View className='px-[16px] mt-[16px] flex-1'>
        {
          isShowOneColumn == false ? <ShowItemOneColumn handleClickDetailItem={handleClickDetailItem}/> : <ShowItemTwoColumn handleClickDetailItem={handleClickDetailItem}/>
        }
      </View>
      <CustomBottomSheetModal filterSorted={filterSorted} bottomSheetModalRef={bottomSheetModalRef} filterSortedTitle={filterSortedTitle} handleChooseSortedType={handleChooseSortedType}/>
    </View>
  );
};


export default Catalog;