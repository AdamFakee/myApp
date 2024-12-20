import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckboxCategory = ({item, dispatchListCategoryChoosen, listCategoryChoosen}) => {
    return (
        <View className='flex flex-row justify-between items-center w-full py-[20px]'>
            <Text 
                className={`w-[92.5%] ${listCategoryChoosen.includes(item.id) ? 'text-[#DB3022]' : 'text-[#222222]'}`}
            >{item.title}</Text>
            <BouncyCheckbox 
                onPress={(isChecked) => {
                    isChecked ? dispatchListCategoryChoosen({
                        type : 'add',
                        value : item.id,
                    }) : dispatchListCategoryChoosen({
                            type : 'delete',
                            value : item.id,
                        }) 
                }}
            />
        </View>
  )
}

export default CheckboxCategory