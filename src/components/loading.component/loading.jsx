import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = ({otherStyle}) => {
  return (
    <ActivityIndicator 
        // className={otherStyle}
        className = 'flex-1 justify-center items-center'
        color={'#000'} animating={true} size="small" 
    />
  );
};
