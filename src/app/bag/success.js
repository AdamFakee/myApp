import { View, Text, Image, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import img from '../../constant/img';

const Success = () => {
    const navigation = useNavigation();
    const handleNavigationToHomeScreen = () => {
        navigation.replace('HomeTabBar', {
            screen : 'Home'
        })
    }
    // hidden tabbar
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
    // End hidden tabbar
    return (
      <SafeAreaView className ='flex-1 justify-between'>
          <View className='items-center justify-center flex-1'>
            <Image source={img.checkoutSuccess}/>
            <Text className='text-[36px] text-[#222] font-[700] text-center pt-[50px] pb-[12px]'>Success</Text>
            <Text className='text-[#000] text-[16px] font-[400] px-[75px]'>Your order will be delivered soon</Text>
            <Text className='text-[#000] text-[16px] font-[400]'>Thank you for choosing our app!</Text>
          </View>
          <View className={`h-[112px] w-full flex justify-center items-center`}>
            <TouchableOpacity 
              activeOpacity={0.7}
              className='w-[343px] bg-[#DB3022] h-[48px] rounded-[25px] inline-flex justify-center items-center'
              onPress={() => handleNavigationToHomeScreen()}
            >
              <Text className='text-center text-[#FFFFFF] text-[20px] font-[500] uppercase'>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
}

export default Success