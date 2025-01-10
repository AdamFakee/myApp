
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Image, Modal, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useCallback } from 'react'
import BottomSheet, {
    BottomSheetView,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import img from '../../../constant/img';
import CartButton from './CartButton';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

const BottomSheetChooseSize = ({bottomSheetRef, informationAddItemToCart, isAddItemIntoCart, setIsAddItemIntoCart, setInformationAddItemToCart, setIsShowSizeInCart}) => {
    const [modalVisible, setModalVisible] = useState(false); // show modal about size infomation  

    const dataSize = [
        {
            title : 's'
        },
        {
            title : 'm'
        },
        {
            title : 'l'
        },
        {
            title : 'xl'
        },
        {
            title : 'xxl'
        }
    ]
    const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[]
	);
    const handleClosePress = () => {
        bottomSheetRef.current?.close();
        setIsShowSizeInCart(false)
    }

    const handleSheetChanges = useCallback((index) => {
        if(index == -1) {
            setIsShowSizeInCart(false)
        }
      }, []);

      

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['45%']}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{  // màu của thanh ngangngang
                backgroundColor : '#9B9B9B'
            }}
            handleStyle = {styles._bg}
        >
            <BottomSheetView style={[styles._bottomSheetView, styles._bg]}>
                <View className='w-full space-y-[22px]'>
                    <Text className='text-[#222222] font-[500] text-[18px] text-center'>Select Size</Text>
                    <View className=''>
                        <FlatList
                            data={dataSize}
                            keyExtractor={(item) => item.title}
                            numColumns={3}
                            columnWrapperStyle={styles._columnWrapper}
                            renderItem={({item}) => {
                                return (
                                    <TouchableOpacity 
                                        style={styles._touch}
                                        className={`bg-[${informationAddItemToCart.sizeName == item.title ? '#DB3022' : '#fff'}] `}
                                        onPress={() => {
                                            if(item.title == informationAddItemToCart.sizeName) {
                                                setInformationAddItemToCart({...informationAddItemToCart, sizeName : ''})
                                            } else {
                                                setInformationAddItemToCart({...informationAddItemToCart,sizeName : item.title})
                                            }
                                        }}
                                    >
                                        <Text className='uppercase'>{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <TouchableOpacity 
                        className='flex flex-row justify-between items-center h-[48px] border-y-[0.4px] border-[#9B9B9B] mx-[-16px] px-[16px]'
                        onPress={() => {
                            setModalVisible(preValue => !preValue)
                        }}
                    >
                        <Text className='text-[#222222] text-[15px] font-[400] flex-1'>Size info</Text>
                        <Image 
                            source={img.chevolLeft}
                            className='w-[10px] h-[8px]'
                        />
                    </TouchableOpacity>

                    <CartButton  isSet={isAddItemIntoCart} set={setIsAddItemIntoCart} informationAddItemToCart={informationAddItemToCart} handleClosePress={handleClosePress}/>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableWithoutFeedback 
                        className='flex-1 justify-start items-center'
                        onPress={() => {
                            
                            setModalVisible(!modalVisible)
                        }}
                        
                    >
                        <View>
                            <Image style={{width:screenWidth}} source={img.sizeTable} resizeMode='contain'/>
                        </View>
                    </TouchableWithoutFeedback>
                    
                </Modal>
            </BottomSheetView>
        </BottomSheet>
            
    )
}


const styles = StyleSheet.create({
    _bottomSheetView : {
        flex : 1,
        paddingHorizontal : 16,
        shadowColor: '#000', // Màu của bóng
        shadowOpacity: 0.08, // Độ mờ của bóng (14% trong hex là 0.08)
        shadowRadius: 30, // Bán kính của bóng
        elevation: 10, // Độ cao (để tạo bóng trên Android)
    },
    _bg : {
        backgroundColor : '#F9F9F9',
    },
    _touch : {
        width : (screenWidth - 16*2 - 22*2)/3,
        borderColor: '#9b9b9b',
        borderWidth : 0.4,
        borderRadius : 8,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center'
    },
    _columnWrapper : {
        justifyContent: 'flex-start',
        gap : 22,
        marginBottom : 16

    }
})

export default BottomSheetChooseSize