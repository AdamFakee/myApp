import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStackGroup } from "./shop";
import { BagStackGroup } from "./bag.route";
import { FavoriteStackGroup } from "./favorite";
import { ProfileStackGroup } from "./profile.route";
import { HomeStackGroup } from "./home.route";


const BottomBar = createBottomTabNavigator();

export function BottomBarGroup () {
  return (
    <BottomBar.Navigator screenOptions={() => ({
      headerShown: false,
    })}>
      <BottomBar.Screen name="HomeTabBar" component={HomeStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="ShopTabBar" component={ShopStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="BagTabBar" component={BagStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="FavoriteTabBar" component={FavoriteStackGroup} options={{headerShown: false}}></BottomBar.Screen>
      <BottomBar.Screen name="ProfileTabBar" component={ProfileStackGroup} options={{headerShown: false}}></BottomBar.Screen>
    </BottomBar.Navigator>
  )
}