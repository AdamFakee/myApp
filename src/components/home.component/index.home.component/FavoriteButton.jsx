import { View ,Image, StyleSheet } from 'react-native'
import React from 'react'
import img from '../../../constant/img';

const FavoriteButton = ({otherStyle}) => {
  return (
    <View 
        className={`w-[36px] h-[36px] rounded-[50%] inline-flex justify-center items-center bg-[#FFFFFF]  ${otherStyle === "removePosition" ? "" : otherStyle ? otherStyle : 'absolute top-[64%] right-[0]'} `}
        style={styles.favoriteButton}
    >
        <Image 
            source={img.favoriteButton}
            className=''
        />
    </View>
  )
}
const styles = StyleSheet.create({
  favoriteButton : {
    boxShadow: '0px 4px 4px 0px #00000014',
  }
});
export default FavoriteButton