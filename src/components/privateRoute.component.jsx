import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const PrivateRouteComponent = () => {
    const navigation = useNavigation();
    const handelNavigation = () => {
        return navigation.navigate('Auth');
    }
    return (
        <SafeAreaView className='bg-[#fff] opacity-[0.7] flex-1'>
            <View className='flex-1 items-center justify-center'>
                <TouchableOpacity
                    className='items-center mx-auto bg-[#DB3022] px-[30px] py-[15px] rounded-[15px]'
                    onPress={handelNavigation}
                    activeOpacity={0.8}
                >
                    <Text className='text-[#222] text-[16px] font-[500]'>Go to login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PrivateRouteComponent