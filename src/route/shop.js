import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from '../app/shop/catalog';
import Filter from '../app/shop/filter';
import Brand from '../app/shop/brand';
import ShopProvider from '../context/ShopProvider';


const CartStack = createNativeStackNavigator();

export function  ShopStackGroup () {
  return (
    <ShopProvider>
      <CartStack.Navigator >
        <CartStack.Screen name='Catalog' component={Catalog} ></CartStack.Screen> 
        <CartStack.Screen name='Filter' component={Filter}></CartStack.Screen>
        <CartStack.Screen name='Brand' component={Brand}></CartStack.Screen>
      </CartStack.Navigator>
    </ShopProvider>
  )
}