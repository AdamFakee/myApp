import { TouchableOpacity, View, Text, Image } from 'react-native';
import React from 'react'

export const BottomTabComponent = ({icon, title, focused}) => {
    return (
        <View 
            style={{
                alignItems: 'center',
                justifyContent: 'center', 
                width: 60, 
                height: 50,
                position : 'relative',
                // bottom : '-22%'
            }}
            >
            <Image 
                source={icon}
                style={{
                    width : 25,
                    height : 25,
                    tintColor : focused ? '#DB3022' : '#9B9B9B'
                }}
                />
            <Text 
                style = {{
                    color : focused ? '#DB3022' : '#9B9B9B',
                    fontSize : 13,
                    fontWeight : 400
                }}
            >{title}</Text>
            </View>
    )
}

export const CustomTabButton = ({ children, onPress, accessibilityState }) => {
  const isSelected = accessibilityState.selected; // Check if the tab is selected

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

