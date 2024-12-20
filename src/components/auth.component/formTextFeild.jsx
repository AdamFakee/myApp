import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icon from '../../constant/icon';
const FormTextFeild = ({
  title, value, placeholder, handleChangeText, typeKeyboard, ...prop
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <View className='bg-[#fff] shadow-[0px 1px 8px 0px #0000000D] h-[64px] rounded-[4px] py-[16px] px-[20px] w-full mb-[8px] flex flex-row justify-between items-center '>
        <View className='flex-1'>
            <Text className=' text-[#9B9B9B] text-[11px] capitalize bg-slate-600'>{title}</Text>
            <TextInput 
              className=' text-[#2D2D2D] text-[14px] leading-[20px] bg-yellow-300 h-auto'
              value={value}
              onChangeText={handleChangeText}
              placeholder={placeholder}
              secureTextEntry={title=="password" ? !showPassword : false}
              keyboardType={typeKeyboard ? typeKeyboard : 'default'}
            ></TextInput>
        </View>



        {title==="password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image 
                source={showPassword ? icon.eye : icon.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
            />
          </TouchableOpacity>
        )}
    </View>
  )
}

export default FormTextFeild