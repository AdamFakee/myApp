import { AuthStackGroup } from "./auth.route";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { HomeStackGroup } from "./home.route";
import { BottomBarGroup } from "./bottomTab.route";

const IndexStack = createNativeStackNavigator();

export function  IndexStackGroup () {
  return (
    <IndexStack.Navigator initialRouteName='TabBar' >
        <IndexStack.Screen name='TabBar' component={BottomBarGroup} options={{headerShown:false}}></IndexStack.Screen> 
        <IndexStack.Screen name='Auth' component={AuthStackGroup} options={{headerShown:false}}></IndexStack.Screen> 
    </IndexStack.Navigator>
  )
}