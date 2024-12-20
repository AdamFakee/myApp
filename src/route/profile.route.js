import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../app/profile/profile';

const ProfileStack = createNativeStackNavigator();

export function  ProfileStackGroup () {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={Profile}></ProfileStack.Screen> 
    </ProfileStack.Navigator>
  )
}