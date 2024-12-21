import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckboxCategory = ({item, dispatchListCategoryChoosen, listCategoryChoosen}) => {
    let checkExist = listCategoryChoosen.find(x => x.id == item.id);
    return (
        <View className='flex flex-row justify-between items-center w-full py-[20px]'>
            <Text 
                className={`w-[92.5%] ${checkExist ? 'text-[#DB3022]' : 'text-[#222222]'}`}
            >{item.title}</Text>
            <BouncyCheckbox 
                isChecked={checkExist}
                onPress={(isChecked) => {
                    isChecked ? dispatchListCategoryChoosen({
                        type : 'add',
                        value : {
                            id : item.id,
                            title : item.title
                        },
                    }) : dispatchListCategoryChoosen({
                            type : 'delete_object',
                            value : item.id,
                        }) 
                }}
            />
        </View>
  )
}

export default CheckboxCategory