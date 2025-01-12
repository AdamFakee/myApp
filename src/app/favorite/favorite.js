import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState, useRef, useCallback, useEffect, useReducer} from 'react'
import FormSearch from '../../components/favorite.component/FormSearch'
import SortAndShow from '../../components/favorite.component/SortAndShow'
import ShowOneColumn from '../../components/favorite.component/ShowOneColumn'
import ShowTwoColumn from '../../components/favorite.component/ShowTwoColumn'
import CustomBottomSheetModal from '../../components/shop.component/categoryDetail.shop.component/BottomSheetModal'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../context/GlobalProvider'
import { favoriteLibNettwork } from '../../nettwork/lib/favorite.lib'
import filterFavoriteReducer from '../../reducer/filterFavorite.reducer'
import Empty from '../../components/Empty'
import BottomSheetChooseSize from '../../components/home.component/itemDetail.home.component/BottomSheetChooseSize'
import { homeLibNettwork } from '../../nettwork/lib/home.lib'
import { Loading } from '../../components/loading.component/loading'

const Favorite = () => {

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
  const [informationAddItemToCart, setInformationAddItemToCart] = useState({
    "productId" : '',
    "sizeName" : "l"
  });
  const [isShowSizeInCart, setIsShowSizeInCart] = useState(false); // show size when click cart
  const [isAddItemIntoCart, setIsAddItemIntoCart] = useState(false); // choose size to add item to cart
  const [dataListItem, dispatchDataListItem] = useReducer(filterFavoriteReducer, []);
  const [isSearch, setIsSearch] = useState(false) // type on keyboard
  const [isShowOneColumn, setIsShowOneColumn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {token, setIsLogged, isLogged} = useGlobalContext();


  

  

  // bottom add to cart ref
  const bottomSheetRef = useRef(null);

  // call api show item in favorite
  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetch = async () => {
        const accessToken = token.accessToken;
        if(!accessToken || !isLogged) {
            setIsLogged(false); // no token => set logout
            return;
        }
        const headers = { 'Authorization': `Bearer ${accessToken}` };
        try {
          const response = await favoriteLibNettwork.getFavorite(headers);
          const {code, data} = response.data;
          if(code == 200) {
            dispatchDataListItem({
              type : 'copy',
              value : {data}
            });
          }
        } catch (error) {
          
        }
        setIsLoading(true);
      }
      fetch();
      return () => {
        isActive = false;
      };
    }, [])
  )

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsLoading(false)
    })
  }, [navigation])

  // call api delete item in favorie
  const deleteItemFavorite = async (productId) => {
    const accessToken = token.accessToken;
    if(!accessToken || !isLogged) {
        setIsLogged(false); // no token => set logout
        return;
    }
    const headers = { 'Authorization': `Bearer ${accessToken}` };
    try {
      const data = {"productId" : productId}
      const response = await favoriteLibNettwork.deleteInFavorite(data, headers);
      const {code} = response.data;
      if(code == 200) {
        dispatchDataListItem({
          type : 'delete',
          value : {
            productId : productId
          }
        })
        return;
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  // add item to cart
  useEffect(() => {
    if(isAddItemIntoCart) {
      const accessToken = token.accessToken;
      if(!accessToken || !isLogged) {
          setIsLogged(false);
          Alert.alert('you are logout')
          return;
      }
      const headers = { 'Authorization': `Bearer ${accessToken}` };
      homeLibNettwork.addItemToBag(informationAddItemToCart, headers)
        .then(function (response) {
          const {data, code} = response.data;
          if(code == "200") {
            
            return;
          } else {
            Alert.alert('not exist item')
          }
        })
        .catch(function (error) {
          console.log(error.message);
        })
      setIsAddItemIntoCart(false)
    }
  }, [isAddItemIntoCart])
  // End call api

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

  if(!isLoading) {
    return (
      <SafeAreaView className='flex-1 pb-[50px] space-y-[24px] px-[16px] bg-[#f9f9f9]'>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    dataListItem.length > 0 
      ?
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
                ? <ShowOneColumn dataListItem={dataListItem} handleClickDetailItem={handleClickDetailItem} deleteItemFavorite={deleteItemFavorite} setIsShowSizeInCart={setIsShowSizeInCart} setInformationAddItemToCart={setInformationAddItemToCart}/>
                : <ShowTwoColumn dataListItem={dataListItem} handleClickDetailItem={handleClickDetailItem} deleteItemFavorite={deleteItemFavorite} setIsShowSizeInCart={setIsShowSizeInCart} setInformationAddItemToCart={setInformationAddItemToCart}/>
            }
          </View>
          {/* bottom sheet */}
          <CustomBottomSheetModal filterSorted={filterSorted} bottomSheetModalRef={bottomSheetModalRef} filterSortedTitle={filterSortedTitle} handleChooseSortedType={handleChooseSortedType}/>
          {/* select size */}
          {
            isShowSizeInCart 
              ? <BottomSheetChooseSize bottomSheetRef={bottomSheetRef} isAddItemIntoCart={isAddItemIntoCart} setIsAddItemIntoCart={setIsAddItemIntoCart} informationAddItemToCart={informationAddItemToCart} setInformationAddItemToCart={setInformationAddItemToCart} setIsShowSizeInCart={setIsShowSizeInCart}/> 
              : null 
          }
        </SafeAreaView>
      : <Empty iconName='meh' text='Have no item in your favorite'/>
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
