import { View ,Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import img from '../../../constant/img';

const FavoriteButton = ({otherStyle, handleAddToFavorite, data}) => {
  return (
    <TouchableOpacity 
        className={`w-[36px] h-[36px] rounded-[50%] inline-flex justify-center items-center bg-[#FFFFFF]  ${otherStyle === "removePosition" ? "" : otherStyle ? otherStyle : 'absolute top-[64%] right-[0]'} `}
        style={styles.favoriteButton}
        activeOpacity={0.7}
        onPress={() => handleAddToFavorite(data)}
    >
        <Image 
            source={img.favoriteButton}
            className=''
        />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  favoriteButton : {
    boxShadow: '0px 4px 4px 0px #00000014',
  }
});
export default FavoriteButton