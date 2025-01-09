import { Alert, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormTextFeild from '../../components/auth.component/formTextFeild'
import AnotherAuth from '../../components/auth.component/anotherAuth'
import ButtonAuth from '../../components/auth.component/buttonAuth'
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../context/GlobalProvider'
import { login } from '../../nettwork/lib/auth.lib'
import { asyncStorageService } from '../../service/asyncStorage.service'



const Login = () => {
  const navigation = useNavigation();
  // const [is]
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    "accountName":"",
    "accountPass":""
  })
  const {setToken, setUser, setLoading, setIsLogged} = useGlobalContext();
  const submit = async () => {
    setIsSubmitting(true); // Bắt đầu trạng thái "đang gửi"
    try {
      // Gọi API
      const response = await login(form);
      const data = response.data.data;
      const code = response.data.code;
  
      if (code == "200") {
        const { accessToken, refreshToken, customer } = data;
        const token = { accessToken, refreshToken };
  
        // Lưu token vào AsyncStorage
        await asyncStorageService.createObjectData("token", token);
        // Cập nhật state
        setToken(token);
        setUser(customer);
        setLoading(false);
        setIsLogged(true)
  
        navigation.navigate('TabBar');
  
        return;
      } else {
        Alert.alert("Sai accountPass hoặc accountName");
      }
    } catch (error) {
      // Xử lý lỗi
      console.error("Lỗi đăng nhập:", error);
    } finally {
      // Kết thúc trạng thái "đang gửi"
      setIsSubmitting(false);
    }
  };
  
  
  return (
    <View className='flex-1 bg-[rgb(249,249,249)] px-[16px]'>
      <View className='flex-1 justify-center'>
        <View className='flex w-full justify-center items-center '>
          <FormTextFeild 
              title="account"
              value={form.accountName}
              placeholder= "account"
              handleChangeText={(e) => setForm({...form, accountName : e})}
              typeKeyboard="email-address"
            />
            <FormTextFeild 
              title="password"
              value={form.accountPass}
              placeholder= "password"
              handleChangeText={(e) => setForm({...form, accountPass : e})}
            />
          </View>
        <AnotherAuth
          handleNavigation={() => navigation.replace('Register')}
          title="you are new user?"
        />
        <ButtonAuth 
          title="sign-up"
          handlePress={submit}  
          isLoading={isSubmitting}
        />
      </View>
    </View>
  )
}

export default Login