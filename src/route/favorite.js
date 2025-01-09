import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../app/favorite/favorite';
import { useGlobalContext } from '../context/GlobalProvider';
import PrivateRouteComponent from '../components/privateRoute.component';

const FavoriteStack = createNativeStackNavigator();

export function  FavoriteStackGroup () {
  const {isLogged} = useGlobalContext();
  return (
    <FavoriteStack.Navigator >
      {
        isLogged 
          ?
            <>
              <FavoriteStack.Screen name='Favorites' component={Favorite} options={{headerShown : false}}></FavoriteStack.Screen> 
            </>
          : 
            <FavoriteStack.Screen name='PrivateRoute' component={PrivateRouteComponent} options={{headerShown : false}}></FavoriteStack.Screen>
        }
    </FavoriteStack.Navigator>
  )
}