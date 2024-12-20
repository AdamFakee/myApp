import React, { useEffect, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColorFilter from '../../components/shop.component/filter.shop.component/ColorFilter';
import SizeFilter from '../../components/shop.component/filter.shop.component/SizeFilter';
import CategoryFilter from '../../components/shop.component/filter.shop.component/CategoryFilter';
import BrandFilter from '../../components/shop.component/filter.shop.component/BrandFilter';
import { useNavigation } from '@react-navigation/native';
import filterItemReducer from '../../reducer/filterItem.reducer';
import { useShopContext } from '../../context/ShopProvider';



const Filter = () => {
  // db fake 
  const dbColor = [
    {
      id : 1,
      color : '#222222' 
    },
    {
      id : 2,
      color : '#F6F6F6'
    },
    {
      id : 3,
      color : '#B82222'
    },
    {
      id : 4,
      color : '#BEA9A9'
    },
    {
      id : 5,
      color : '#E2BB8D'
    },
    {
      id : 6,
      color : '#151867'
    }
  ]
  const dbSize = [
    {
      id : 1,
      title : 'XS' 
    },
    {
      id : 2,
      title : 'S' 
    },
    {
      id : 3,
      title : 'M' 
    },
    {
      id : 4,
      title : 'L' 
    },
    {
      id : 5,
      title : 'XL' 
    }
  ]
  const dbCategory = [
    {
      id : 1,
      title : 'all' 
    },
    {
      id : 2,
      title : 'women' 
    },
    {
      id : 3,
      title : 'men' 
    },
    {
      id : 4,
      title : 'boys' 
    },
    {
      id : 5,
      title : 'gilrs' 
    }
  ]
  const brandChoosen = 'adidas Originals, Jack & Jones, s.Oliver'
  // End db

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

  const {listSize, setListSize, listCategory, setListCategory, listColor, setListColor} = useShopContext();
  
  const [listColorChoice, dispatchListColorChoice] = useReducer(filterItemReducer, listColor);
  const [listSizeChoice, dispatchListSizeChoice] = useReducer(filterItemReducer, listSize);
  const [listCategoryChoice, dispatchListCategoryChoice] = useReducer(filterItemReducer, listCategory);
  
  useEffect(() => {
      setListCategory(listCategoryChoice);
    }, [listCategoryChoice]);
  useEffect(() => {
      setListColor(listColorChoice);
    }, [listColorChoice]);
  useEffect(() => {
      setListSize(listSizeChoice);
    }, [listSizeChoice]);

  const handleBrand = () => {
    navigation.navigate('Brand');
  }

  return (
    <SafeAreaView>
      {/* color */}
      <ColorFilter dbColor={dbColor} title='color' listColorChoice={listColorChoice} dispatchListColorChoice={dispatchListColorChoice}/>

      {/* size */}
      <SizeFilter dbSize={dbSize} title='size' listSizeChoice={listSizeChoice} dispatchListSizeChoice={dispatchListSizeChoice}/>

      {/* category */}
      <CategoryFilter dbCategory={dbCategory} title='category' listCategoryChoice={listCategoryChoice} dispatchListCategoryChoice={dispatchListCategoryChoice}/>

      {/* Brand */}
      <BrandFilter brandChoosen={brandChoosen} handleBrand={handleBrand}/>
    </SafeAreaView>
  )
}

export default Filter