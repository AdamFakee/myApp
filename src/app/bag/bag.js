import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo, useReducer, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FormSearch from '../../components/favorite.component/FormSearch'
import img from '../../constant/img'
import ListItemInBag from '../../components/bag.component/ListItemInBag'
import CheckOutButton from '../../components/bag.component/CheckOutButton'
import ChangeAmountReducer from '../../reducer/changeAmount.reducer'
import { useEffect } from 'react'
import EmptyBag from '../../components/bag.component/EmptyBag'
import { useNavigation } from '@react-navigation/native'

const Bag = () => {
  // data fake
  const dataListItem = [
    {
      id : 1,
      image : img.itemDetailCategory,
      shopName : 'LIME',
      productName : 'Shirt',
      colorName : 'Blue',
      size : 'L',
      amount : 4,
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
      amount : 4,
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
      amount : 4,
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
      amount : 4,
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
      amount : 4,
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
      amount : 4,
      newPrice : 32,
      averageStar : 5,
      totalStar : 10,
      soldOut : false
    }
  ]
  // End data fake

  const [searchValue, setSearchValue] = useState({
    title : ''
  });
  const [isSearch, setIsSearch] = useState(false) // type on keyboard
  const [order, dispatchOrder] = useReducer(ChangeAmountReducer, dataListItem); 
  const [isCheckout, setIsCheckout] = useState(false);
  const navigation = useNavigation();
  const totalPrice  = useMemo(() => {
    const total = order.reduce((result, item) => {
      return result + item.amount * item.newPrice;
    }, 0);
    return total;
  }, [order]);

  // call api check out
  useEffect(() => {
    if(isCheckout) {
      console.log('call api check out');
      setIsCheckout(false);
      navigation.navigate('Success');
      dispatchOrder({
        type : 'reset',
        value : {
          id : null,
          value : null
        }
      })
      console.log(order)
    }
  }, [isCheckout])
  // End call api check out

  return (
    order.length > 0 
      ?
        <SafeAreaView className='flex-1 pb-[50px] space-y-[24px] px-[16px] bg-[#f9f9f9]'>
          {/* header */}
          <View style={styles._header}>
            {/* search */}
            <FormSearch searchValue={searchValue} setSearchValue={setSearchValue} setIsSearch={setIsSearch}/>
            {/* title */}
            {
              isSearch == false
                ? 
                <Text className='text-[#222] capitalize text-[34px] font-[600]' style={{flex : 3}}>My Bag</Text>
                : null
            }
          </View>
          {/* list item */}
          <View style={{flex : 8}}>
            <ListItemInBag data={order} dispatchOrder={dispatchOrder}/>
          </View>
          {/* check out button */}
          <View style={{flex : 2}}>
            {/* total price */}
            <View className='flex-row justify-between items-center'>
              <Text className='text-[#9B9B9B] text-[14px] font-[500]' style={{letterSpacing : 1.2}}>Total amount:</Text>
              <Text className='text-[#222222] text-[18px] font-[700]'>{totalPrice}$</Text>
            </View>
            {/* check out button */}
            <CheckOutButton isCheckout={isCheckout} setIsCheckout={setIsCheckout}/>
          </View>
        </SafeAreaView>
      : <EmptyBag/>
  )
}

const styles = StyleSheet.create({
  _header : {
    paddingBottom : 8,
    gap : 18,
    flex : 2,
    shadowColor : '#0000001F',
    shadowOffset : {
      height : 4,
      width : 0,
    },
    shadowRadius : 12,
    elevation : 10
  },
})
export default Bag