import React, { useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ColorFilter from '../../components/shop.component/filter.shop.component/ColorFilter';
import SizeFilter from '../../components/shop.component/filter.shop.component/SizeFilter';
import CategoryFilter from '../../components/shop.component/filter.shop.component/CategoryFilter';
import BrandFilter from '../../components/shop.component/filter.shop.component/BrandFilter';
import { useNavigation } from '@react-navigation/native';
import filterItemReducer from '../../reducer/filterItem.reducer';
import { useShopContext } from '../../context/ShopProvider';
import { ScrollView, View } from 'react-native';
import ConfirmButton from '../../components/shop.component/brand.shop.component/ConfirmButton';
import PriceSlide from '../../components/shop.component/filter.shop.component/PriceSlide';



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
      color : '#E28D'
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
  })
    // End set header title
  const {listSize, setListSize, listCategory, setListCategory, listColor, setListColor, listBrand, isConfirm, setIsConfirm, price, setPrice, resetAllStates} = useShopContext();
  let brandChoosen = listBrand.map(item => item.title).join(', '); // content show below "brand" title
  const [listColorChoice, dispatchListColorChoice] = useReducer(filterItemReducer, listColor);
  const [listSizeChoice, dispatchListSizeChoice] = useReducer(filterItemReducer, listSize);
  const [listCategoryChoice, dispatchListCategoryChoice] = useReducer(filterItemReducer, listCategory);
  const [isApply, setIsApply] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);

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


  useEffect(() => {
    if(isApply) {
      setIsConfirm(!isConfirm)
      navigation.replace('Catalog');
      setIsApply(false)
    }
  }, [isApply]);
  useEffect(() => {
    if(isDiscard) {
      resetAllStates();
      dispatchListColorChoice({
        type : 'reset',
      })
      dispatchListSizeChoice({
        type : 'reset',
      })
      dispatchListCategoryChoice({
        type : 'reset',
      })
      brandChoosen = '';
      setIsDiscard(false)
    }
  }, [isDiscard]);

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1' >
        {/* price slide */}
        <PriceSlide minPrice={0} maxPrice={1000} isApply={isApply} setPrice={setPrice} price={price} setIsApply={setIsApply}/>

        {/* color */}
        <ColorFilter dbColor={dbColor} title='color' listColorChoice={listColorChoice} dispatchListColorChoice={dispatchListColorChoice}/>

        {/* size */}
        <SizeFilter dbSize={dbSize} title='size' listSizeChoice={listSizeChoice} dispatchListSizeChoice={dispatchListSizeChoice}/>

        {/* category */}
        <CategoryFilter dbCategory={dbCategory} title='category' listCategoryChoice={listCategoryChoice} dispatchListCategoryChoice={dispatchListCategoryChoice}/>

        {/* Brand */}
        <BrandFilter brandChoosen={brandChoosen} handleBrand={handleBrand}/>
      </ScrollView>
      <ConfirmButton isApply={isApply} isDiscard={isDiscard} setIsApply={setIsApply} setIsDiscard={setIsDiscard} />
    </SafeAreaView>
  )
}

export default Filter