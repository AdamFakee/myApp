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
import { shopLibNettwork } from '../../nettwork/lib/shop.lib';
import { Loading } from '../../components/loading.component/loading';



const Filter = () => {
 

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
  const [isDiscard, setIsDiscard] = useState(false);
  const [color, setColor] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
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
    const fetch = async () => {
      setIsLoadding(false);
      try {
        const response = await shopLibNettwork.getAllFilter();
        const {data, code} = response.data;

        if(code == 200) {
          const {colors, categories, sizes} = data;
          setCategory(categories);
          setColor(colors);
          setSize(sizes)
        }

      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoadding(true);
      }
    }
    fetch()
  }, [])
  useEffect(() => {
    if(isConfirm) {
      navigation.goBack('Catalog');
    }
  }, [isConfirm]);
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

  if(!isLoadding) {
    return (
      <SafeAreaView className='flex-1 justify-center items-center'>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1' >
        {/* price slide */}
        <PriceSlide minPrice={0} maxPrice={130} isApply={isConfirm} setPrice={setPrice} price={price} setIsApply={isConfirm}/>

        {/* color */}
        <ColorFilter dbColor={color} title='color' listColorChoice={listColorChoice} dispatchListColorChoice={dispatchListColorChoice}/>

        {/* size */}
        <SizeFilter dbSize={size} title='size' listSizeChoice={listSizeChoice} dispatchListSizeChoice={dispatchListSizeChoice}/>

        {/* category */}
        <CategoryFilter dbCategory={category} title='category' listCategoryChoice={listCategoryChoice} dispatchListCategoryChoice={dispatchListCategoryChoice}/>

        {/* Brand */}
        <BrandFilter brandChoosen={brandChoosen} handleBrand={handleBrand}/>
      </ScrollView>
      <ConfirmButton isApply={isConfirm} isDiscard={isDiscard} setIsApply={setIsConfirm} setIsDiscard={setIsDiscard} />
    </SafeAreaView>
  )
}

export default Filter