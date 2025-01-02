import { View, Text, TextInput, Image, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import img from '../../constant/img'
const FormSearch = ({searchValue, setSearchValue, setIsSearch}) => {
    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
          setIsSearch(false);
        });
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setIsSearch(true);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <View className='border-[1px] border-[#9b9b9b] px-[16px] h-[44px] flex-row justify-between items-center rounded-[24px]'>
            <TextInput
                className='h-full text-[#222] font-[400] text-[16px] flex-1'
                placeholder='Type here'
                value={searchValue.title}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(value) => {
                    console.log(value)
                    setSearchValue({
                        title : value
                    })
                }}
            />
            <Image source={img.searchButton} className='w-[24px] h-[24px]'/>
        </View>
    )
}

export default FormSearch