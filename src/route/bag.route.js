import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bag from '../app/bag/bag';
import Success from '../app/bag/success';
import { useGlobalContext } from '../context/GlobalProvider';
import PrivateRouteComponent from '../components/privateRoute.component';

const BagStack = createNativeStackNavigator();

export function  BagStackGroup () {
  const {isLogged} = useGlobalContext();
  return (
    <BagStack.Navigator >
      {
        isLogged 
          ?
            <>
              <BagStack.Screen name='Bag' component={Bag} options={{headerShown : false}}></BagStack.Screen> 
              <BagStack.Screen name='Success' component={Success} options={{headerShown : false}}></BagStack.Screen>
            </>
          : 
            <BagStack.Screen name='PrivateRoute' component={PrivateRouteComponent} options={{headerShown : false}}></BagStack.Screen>
        }
    </BagStack.Navigator>
  )
}