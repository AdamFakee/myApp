import { View, Text, Button } from 'react-native'
import React from 'react'
import { asyncStorageService } from '../../service/asyncStorage.service'
import { useGlobalContext } from '../../context/GlobalProvider'

const Profile = () => {
  const {setToken, isLogged, setIsLogged,} = useGlobalContext();
  const handleLogout = async () => {
    await asyncStorageService.removeData('token');

    setToken(null);
    setIsLogged(false)
  }
  return (
    <View>
      <Button title='logout' onPress={handleLogout}/>
    </View>
  )
}

export default Profile