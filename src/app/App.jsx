import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index  from "./home/home";
import GlobalProvider from '../context/GlobalProvider';
import { AuthStackGroup } from '../route/auth.route';
import { IndexStackGroup } from '../route/index.route';



// const AuthStack = createNativeStackNavigator();

// function AuthStackGroup () {
//   return (
//     <AuthStack.Navigator initialRouteName='Login' >
//       <AuthStack.Screen name='Login' component={Login}></AuthStack.Screen>
//       <AuthStack.Screen name='Register' component={Register}></AuthStack.Screen>
//     </AuthStack.Navigator>
//   )
// }

// const HomeStack = createNativeStackNavigator();

// function  HomeStackGroup () {
//   return (
//     <HomeStack.Navigator initialRouteName='Home'>
//       <HomeStack.Screen name='Home' component={Index}></HomeStack.Screen> 
//       <HomeStack.Screen name='Auth' component={AuthStackGroup} options={{headerShown:false}}></HomeStack.Screen> 
//     </HomeStack.Navigator>
//   )
// }

const App = () => {

  return (
    <GlobalProvider>
      <IndexStackGroup></IndexStackGroup>
    </GlobalProvider>
  )
}

export default App

