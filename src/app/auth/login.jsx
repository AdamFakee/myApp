import { Alert, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormTextFeild from '../../components/auth.component/formTextFeild'
import AnotherAuth from '../../components/auth.component/anotherAuth'
import ButtonAuth from '../../components/auth.component/buttonAuth'
import { useNavigation } from '@react-navigation/native'
import { useGlobalContext } from '../../context/GlobalProvider'
import { login } from '../../nettwork/lib/auth.lib'



const Login = () => {
  const navigation = useNavigation()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    "email" : "",
    "password" : ""
  })
  const {setToken, setUser} = useGlobalContext();
  const submit = () => {
    setIsSubmitting(true)
    // call api
    login(form)
      .then(function (response) {
        const code = response.data.code;
        if(code == "200") {
          setToken(response.data.user.token);
          setUser(response.data.user);
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Index',
              },
            ],
          });
          return;
        } else {
          Alert.alert('sai pass or mail')
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setIsSubmitting(false)
      });
  }

  
  return (
    <View className='flex-1 bg-[rgb(249,249,249)] px-[16px]'>
      <View className='flex-1 justify-center'>
        <View className='flex w-full justify-center items-center '>
          <FormTextFeild 
              title="email"
              value={form.email}
              placeholder= "email"
              handleChangeText={(e) => setForm({...form, email : e})}
              typeKeyboard="email-address"
            />
            <FormTextFeild 
              title="password"
              value={form.password}
              placeholder= "password"
              handleChangeText={(e) => setForm({...form, password : e})}
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