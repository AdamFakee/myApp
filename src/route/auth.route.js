import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../app/auth/login';
import Register from '../app/auth/register';

const AuthStack = createNativeStackNavigator();

export function AuthStackGroup () {
  return (
    <AuthStack.Navigator initialRouteName='Login' >
      <AuthStack.Screen name='Login' component={Login}></AuthStack.Screen>
      <AuthStack.Screen name='Register' component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}