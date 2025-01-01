import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStackGroup } from "./shop";
import { BagStackGroup } from "./bag.route";
import { FavoriteStackGroup } from "./favorite";
import { ProfileStackGroup } from "./profile.route";
import { HomeStackGroup } from "./home.route";
import bottomTabIcon from '../constant/bottomTabIcon'; 
import {BottomTabComponent, CustomTabButton} from "../components/bottomTab.component";
const BottomBar = createBottomTabNavigator();

export function BottomBarGroup () {
  return (
    <BottomBar.Navigator screenOptions={() => ({
      headerShown: false,
      tabBarShowLabel : false,
      tabBarStyle : {
        width : '100%',
        height : 50,
        backgroundColor : '#fff',
        borderTopLeftRadius : 12,
        borderTopRightRadius : 12,
        position : 'absolute',
        bottom : 0,
      }
    })}>
      <BottomBar.Screen 
        name="HomeTabBar" 
        component={HomeStackGroup} 
        options={{
          tabBarIcon : ({focused}) => {
            return <BottomTabComponent icon={bottomTabIcon.home} title='Home' focused={focused}/>
          },
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      ></BottomBar.Screen>
      <BottomBar.Screen 
        name="ShopTabBar" 
        component={ShopStackGroup} 
        options={{
          tabBarIcon : ({focused}) => {
            return <BottomTabComponent icon={bottomTabIcon.shop} title='Shop' focused={focused}/>
          },
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      ></BottomBar.Screen>
      <BottomBar.Screen 
        name="BagTabBar" 
        component={BagStackGroup} 
        options={{
          tabBarIcon : ({focused}) => {
            return <BottomTabComponent icon={bottomTabIcon.bag} title='Bag' focused={focused}/>
          },
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      ></BottomBar.Screen>
      <BottomBar.Screen 
        name="FavoriteTabBar" 
        component={FavoriteStackGroup} 
        options={{
          tabBarIcon : ({focused}) => {
            return <BottomTabComponent icon={bottomTabIcon.heart} title='Favorite' focused={focused}/>
          },
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      ></BottomBar.Screen>
      <BottomBar.Screen 
        name="ProfileTabBar" 
        component={ProfileStackGroup} 
        options={{
          tabBarIcon : ({focused}) => {
            return <BottomTabComponent icon={bottomTabIcon.profile} title='Profile' focused={focused}/>
          },
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      ></BottomBar.Screen>
    </BottomBar.Navigator>
  )
}