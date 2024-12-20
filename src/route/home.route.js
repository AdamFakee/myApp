import Home from "../app/home/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetail from "../app/home/ItemDetail";





const HomeStack = createNativeStackNavigator();

export function  HomeStackGroup () {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}}></HomeStack.Screen>
      <HomeStack.Screen name="ItemDetail" component={ItemDetail}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}