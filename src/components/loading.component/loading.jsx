import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = ({otherStyle}) => {
  return (
    <ActivityIndicator 
        className={otherStyle}
        color={'#000'} animating={true} size="small" 
    />
  );
};
