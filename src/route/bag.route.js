import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bag from '../app/bag/bag';
import Success from '../app/bag/success';

const BagStack = createNativeStackNavigator();

export function  BagStackGroup () {
  return (
    <BagStack.Navigator >
      <BagStack.Screen name='Bag' component={Bag} options={{headerShown : false}}></BagStack.Screen> 
      <BagStack.Screen name='Success' component={Success} options={{headerShown : false}}></BagStack.Screen>
    </BagStack.Navigator>
  )
}