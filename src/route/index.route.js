import { AuthStackGroup } from "./auth.route";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomBarGroup } from "./bottomTab.route";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
const IndexStack = createNativeStackNavigator();

export function  IndexStackGroup () {
  return (
    <GestureHandlerRootView className='flex-1'>
      <BottomSheetModalProvider>
        <IndexStack.Navigator initialRouteName='TabBar' >
            <IndexStack.Screen name='TabBar' component={BottomBarGroup} options={{headerShown:false}}></IndexStack.Screen> 
            <IndexStack.Screen name='Auth' component={AuthStackGroup} options={{headerShown:false}}></IndexStack.Screen> 
        </IndexStack.Navigator>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}