import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bag from '../app/bag/bag';

const BagStack = createNativeStackNavigator();

export function  BagStackGroup () {
  return (
    <BagStack.Navigator >
      <BagStack.Screen name='Bag' component={Bag}></BagStack.Screen> 
    </BagStack.Navigator>
  )
}