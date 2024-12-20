import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../app/favorite/favorite';

const FavoriteStack = createNativeStackNavigator();

export function  FavoriteStackGroup () {
  return (
    <FavoriteStack.Navigator >
      <FavoriteStack.Screen name='Favorites' component={Favorite}></FavoriteStack.Screen> 
    </FavoriteStack.Navigator>
  )
}