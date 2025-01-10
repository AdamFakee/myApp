import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useCallback, useMemo, useReducer, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FormSearch from '../../components/favorite.component/FormSearch'
import img from '../../constant/img'
import ListItemInBag from '../../components/bag.component/ListItemInBag'
import CheckOutButton from '../../components/bag.component/CheckOutButton'
import ChangeAmountReducer from '../../reducer/changeAmount.reducer'
import { useEffect } from 'react'
import EmptyBag from '../../components/bag.component/EmptyBag'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { bagLibNettwork } from '../../nettwork/lib/bag.lib'
import { useGlobalContext } from '../../context/GlobalProvider'
import { favoriteLibNettwork } from '../../nettwork/lib/favorite.lib'

const Bag = () => {
  const [searchValue, setSearchValue] = useState({
    title : ''
  });
  const [isSearch, setIsSearch] = useState(false) // type on keyboard
  const [order, dispatchOrder] = useReducer(ChangeAmountReducer, []); 
  const [isCheckout, setIsCheckout] = useState(false);
  const navigation = useNavigation();
  const {token, setIsLogged, isLogged} = useGlobalContext();
  const totalPrice  = useMemo(() => {
    const total = order.reduce((result, item) => {
      return result + item.amount * item.newPrice;
    }, 0);
    return total;
  }, [order]);

  // call api show item in bag
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
        bagLibNettwork.getProduct(headers)
          .then(function (response) {
            const {data, code} = response.data;
            if(code == "200") {
              dispatchOrder({
                type : 'copy',
                value : {
                    data : data
                }
              })
              return;
            }
          })
          .catch(function (error) {
            console.log(error.message);
          })
      }
      fetch();
      return () => {
        isActive = false;
      };
    }, [])
  )
  // End call api shop item in bag

  const handelCallApiDeleteItem = async (data) => {
    try {
      const accessToken = token.accessToken;
      if(!accessToken || !isLogged) {
          setIsLogged(false); // no token => set logout
          return;
      }
      const headers = { 'Authorization': `Bearer ${accessToken}` };
      const response = await bagLibNettwork.deleteBagItem(data, headers);
      const code = response.data.code;
      if(code != 200) {
        Alert.alert('delete have some err');
      } else {
        const deletedData = {
          productId_delete : data.productId,
          sizeName : data.sizeName
        }
        dispatchOrder({
          type : 'delete',
          value : deletedData
        })
      }
    } catch (error) {
      console.log(error.message);
    }

  }

  const handleAddToFavorite = async (data) => {
    try {
      const accessToken = token.accessToken;
      if(!accessToken || !isLogged) {
          setIsLogged(false); // no token => set logout
          return;
      }
      const headers = { 'Authorization': `Bearer ${accessToken}` };
      const response = await favoriteLibNettwork.addToFavorite(data, headers);
      const code = response.data.code;
      if(code != 200) {
        Alert.alert('add have some err');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
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
            <ListItemInBag data={order} dispatchOrder={dispatchOrder} handelCallApiDeleteItem={handelCallApiDeleteItem} handleAddToFavorite={handleAddToFavorite}/>
          </View>
          {/* check out button */}
          <View style={{flex : 2}}>
            {/* total price */}
            <View className='flex-row justify-between items-center'>
              <Text className='text-[#9B9B9B] text-[14px] font-[500]' style={{letterSpacing : 1.2}}>Total amount:</Text>
              <Text className='text-[#222222] text-[18px] font-[700]'>{totalPrice.toFixed(2)}$</Text>
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