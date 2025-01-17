import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState ,useCallback, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import ShowItemOneColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemOneColumn'
import ShowItemTwoColumn from '../../components/shop.component/categoryDetail.shop.component/ShowItemTwoColumn'
import HeaderTop from '../../components/shop.component/categoryDetail.shop.component/HeaderTop'
import img from '../../constant/img'
import CustomBottomSheetModal from '../../components/shop.component/categoryDetail.shop.component/BottomSheetModal'
import { shopLibNettwork } from '../../nettwork/lib/shop.lib'
import { Loading } from '../../components/loading.component/loading'
import Empty from '../../components/Empty'
import { useShopContext } from '../../context/ShopProvider'


const Catalog = () => {
  // show one or two column
  const [isShowOneColumn, setIsShowOneColumn] = useState(false);
  const [isLoadding, setIsLoadding] = useState(false);
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [headerTitle, setHeaderTitle] = useState('All');
  const {isConfirm, setIsConfirm, listColor, listSize, listCategory, listBrand, price} = useShopContext();
  // search item
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  // call api => lấy cái đầu tiên là được, còn đây để tạmtạm
  const [filterSortedTitle, setFilterSortedTitle] = useState({
    id : 4,
    title : 'Price: lowest to high'
  });

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

  // call Api
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await shopLibNettwork.getAllProduct();
        const {data, code} = response.data;
        if(code == 200) {
          const {categories, products} = data;
          setCategory(categories);
          setProduct(products);
        }
      } catch (error) {
        setProduct([])
      } finally {
        setIsLoadding(true);
      }
    }
    fetch();
  }, [])


  // set header title 
  const navigation = useNavigation();

  // set header title
  useEffect(() => {
    navigation.setOptions({
      headerTitle: headerTitle,    
    });
    
  }, [headerTitle]); 

  const fetch = async (categoryName) => {
    setIsLoadding(false);
    try {
      const response = await shopLibNettwork.getProductByCategoryName(categoryName);
      const {data, code} = response.data;
      if(code == 200) {
        const products = data.products;
        setProduct(products);
      }
    } catch (error) {
      console.log(error)

      setProduct([])
    } finally {
      setIsLoadding(true);
    }
  }
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
  // filter call api
  useEffect(() => {
    if(isConfirm) {
      const data = {
        price : price,
        color : listColor,
        size : listSize,
        category : listCategory,
        brand : listBrand
      }
      const fetch = async (filterData) => {
        try {
          const response = await shopLibNettwork.getProductByFilter(filterData);
          const {data, code} = response.data;
          if(code == 200) {
            setProduct(data);
          }
        } catch (error) {
          setProduct([])
        }
      }
      fetch(data)
      setIsConfirm(false);
    }
  }, [isConfirm])

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

  if(!isLoadding) {
    return (
      <View className="flex-1 justify-center items-center">
        <Loading/>
      </View>
    )
  }

  // renders
  return (
    <View className="flex-1">
      <HeaderTop isShowOneColumn={isShowOneColumn} setIsShowOneColumn={setIsShowOneColumn} categories={category} handleClickFilter={handleClickFilter} handlePresentModalPress={handlePresentModalPress} filterSortedTitle={filterSortedTitle} setHeaderTitle={setHeaderTitle} fetch={fetch}/>
      {/* product item */}
      {
        product.length > 0 
          ? 
            <View className='px-[16px] mt-[16px] flex-1'>
              {
                isShowOneColumn == false ? <ShowItemOneColumn handleClickDetailItem={handleClickDetailItem} product = {product}/> : <ShowItemTwoColumn handleClickDetailItem={handleClickDetailItem} product = {product}/>
              }
            </View>
          : <Empty text={`have no item`} iconName={'meh'}/>
      }
      <CustomBottomSheetModal filterSorted={filterSorted} bottomSheetModalRef={bottomSheetModalRef} filterSortedTitle={filterSortedTitle} handleChooseSortedType={handleChooseSortedType}/>
    </View>
  );
};


export default Catalog;