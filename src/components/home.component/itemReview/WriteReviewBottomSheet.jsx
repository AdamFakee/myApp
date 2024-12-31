import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, TouchableOpacity, Modal } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { Rating } from 'react-native-ratings';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import ImageUploadInWriteReview from './ImageUploadInWriteReview';


const WriteReviewBottomSheet = ({bottomSheetRef, isWriteReview, setIsWriteReview}) => {

    const [isAddPhoto, setIsAddPhoto] = useState(false)
    // form submit
    const [formRatingReview, setFormRatingReview] = useState({
        star : 5,
        content : '',
        imgs : []
    })
    const [isSubmit, setIsSubmit] = useState(false);
    // func for photo
    const launchCameraPermission = async () => {
        const getPermission = await ImagePicker.getCameraPermissionsAsync();
        let havePermission = getPermission.granted;
        let result;
        if(havePermission) {
            result = await ImagePicker.launchCameraAsync({
                allowsEditing : true,
                allowsMultipleSelection : true,
                aspect : [1,1],
                cameraType : ImagePicker.CameraType.front,
                mediaTypes : 'images',
                orderedSelection : true,
                quality : 1,
                selectionLimit : 6,
            })
        } else {
            const requestPermission = await ImagePicker.requestCameraPermissionsAsync();
            havePermission = requestPermission.granted;
            if(havePermission) {
                result = await ImagePicker.launchCameraAsync({
                    allowsEditing : true,
                    aspect : [1,1],
                    cameraType : ImagePicker.CameraType.front,
                    mediaTypes : 'images',
                    orderedSelection : true,
                    quality : 1,
                    selectionLimit : 6,
                })
            }
        }
        // add result into listImgs
        if(result) {
            const fomat = result.assets[0].uri; // take url
            setFormRatingReview({
                ...formRatingReview,
                imgs : [...formRatingReview.imgs, fomat]
            })
        } 
        setIsAddPhoto(!isAddPhoto); 
    }
    const launchImageLibaryPermission = async () => {
        const getPermission = await ImagePicker.getMediaLibraryPermissionsAsync();
        let havePermission = getPermission.granted;

        let result;
        if(havePermission) {
            result = await ImagePicker.launchImageLibraryAsync({
                allowsMultipleSelection : true,
                aspect : [1,1],
                cameraType : ImagePicker.CameraType.front,
                mediaTypes : 'images',
                orderedSelection : true,
                quality : 1,
                selectionLimit : 6,
            })
        } else {
            const requestPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
            havePermission = requestPermission.granted;
            if(havePermission) {
                result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing : true,
                    allowsMultipleSelection : true,
                    aspect : [1,1],
                    mediaTypes : 'images',
                    orderedSelection : true,
                    quality : 1,
                    selectionLimit : 6,
                })
            }
        }
        // add result into listImgs
        if(result) {
            const fomat = result.assets.map(asset => asset.uri); // take list uri
            setFormRatingReview({
                ...formRatingReview,
                imgs : [...formRatingReview.imgs, ...fomat]
            })
        }
        setIsAddPhoto(!isAddPhoto);
    }
    // End func for photo
    
    // call api
    useEffect(() => {
        if(isSubmit) {
            console.log('call api : ', formRatingReview)
            setIsWriteReview(false)
            setIsSubmit(false)
        }
    }, [isSubmit])

    // func for bottom sheet
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
        setIsWriteReview(false)
    }

    const handleSheetChanges = useCallback((index) => {
        if(index == -1) {
            setIsWriteReview(false)
        }
      }, []);
    // End func for bottom sheet
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={['77%']}
            backdropComponent={renderBackdrop}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{  // màu của thanh ngangngang
                backgroundColor : '#9B9B9B'
            }}
            // handleStyle = {}
        >
            <BottomSheetView style={[styles._bottomView]}>
                {/* star ratingrating */}
                <View className='items-center space-y-[16px]'>
                    <Text className='text-[#222] text-[18px] font-[500] text-center'>What is you rate?</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={36}
                        ratingColor='#FFBA49'
                        tintColor='#f9f9f9'
                        startingValue={formRatingReview.star}
                        onFinishRating={(star) => setFormRatingReview({...formRatingReview, star : star})}
                    />
                </View>
                {/* write content */}
                <View className='items-center mt-[33px]'>
                    {/* title */}
                    <Text className='text-center text-[18px] text-[#222] font-[500] w-[227px] mb-[18px]'>Please share your opinion about the product</Text>

                    {/* content */}
                    <View className='w-full '>
                        {/* text */}
                        <TextInput 
                            placeholder='Your review' 
                            multiline={true}  
                            style={[styles._textInput]} 
                            value={formRatingReview.content}
                            onChangeText={(value) => setFormRatingReview({...formRatingReview, content : value})}
                            className='text-[#9B9B9B] bg-[#FFFFFF] font-[400] text-[16px] w-full h-[154px] px-[12px] py-[16px] text-start rounded-[4px] mb-[39px]'
                        />
                        {/* img */}
                        <View className='flex-row space-x-[16px]'>
                            {/* add photo */}
                            <TouchableOpacity 
                                activeOpacity={1} style={styles._addPhoto}
                                onPress={() => {
                                    setIsAddPhoto(!isAddPhoto)
                                }}
                            >
                                <View className='h-[52px] w-[52px] rounded-full bg-[#DB3022] items-center  flex-row justify-center'>
                                    <FontAwesome name="camera" size={26} color="#fff" />
                                </View>
                                <Text className='text-[#222] text-[12px] font-[500]'>Add your photos</Text>
                            </TouchableOpacity>
                            {/* img uploaded */}
                            <View style={{flex : 2}}>
                                <ImageUploadInWriteReview formRatingReview={formRatingReview} setFormRatingReview={setFormRatingReview}/>
                            </View>
                        </View>
                    </View>
                </View>
                {/* button */}
                <TouchableOpacity 
                   className='w-full bg-[#DB3022] h-[48px] rounded-[25px] flex justify-center items-center mt-[35px]'
                   activeOpacity={1}
                   onPress={() => setIsSubmit(true)}
                >
                    <Text className='text-[20px] text-[#fff] font-[500] text-center'>SEND REVIEW</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isAddPhoto}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setIsAddPhoto(!isAddPhoto);
                    }}
                >
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={() => setIsAddPhoto(!isAddPhoto)}
                        className='flex-1 justify-center bg-[#00000033]'
                    >
                        <View className='w-[60%] justify-center mx-auto space-y-[12px] py-[16px] bg-[#f9f9f9] rounded-[15px]'>
                            <Text className='text-[#222] text-[20px] font-[600] text-center'>Profile Photo</Text>
                            <View className='flex-row justify-between px-[32px] space-x-[20px]'>
                                {/* camera */}
                                <TouchableOpacity 
                                    className='bg-[#E2EAF2] rounded-[12px] w-auto p-[10px]'
                                    onPress={launchCameraPermission}
                                >
                                    <View className='w-full items-center justify-center'>
                                        <AntDesign name="camera" size={24} color="#FFBA49" />
                                        <Text className='text-[14px] text-[#222] font-[400]'>Camera</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* gallary */}
                                <TouchableOpacity 
                                    className='bg-[#E2EAF2] rounded-[12px] w-auto p-[10px]'
                                    onPress={launchImageLibaryPermission}
                                >
                                    <View className='w-full items-center justify-center'>
                                        <Entypo name="images" size={24} color="#FFBA49" />
                                        <Text  className='text-[14px] text-[#222] font-[400]'>Gallary</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </BottomSheetView>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    _bottomView : {
        paddingHorizontal: 24,
        backgroundColor: '#f9f9f9',
        paddingBottom: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 30,
        flex : 1,
    }, 
    _textInput : {
        textAlignVertical : 'top',
        shadowColor : '#0000000D',
        shadowOpacity : 0.08,
        shadowOffset : {
            height : 1,
            width : 0,
        },
        shadowRadius : 30 ,
    },
    _addPhoto : {
        shadowColor : '#00000029',
        shadowOpacity : 0.08,
        shadowOffset : {
            height : 1,
            width : 0,
        },
        shadowRadius : 16 ,
        backgroundColor : '#fff',
        height : 104,
        width : 104,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingHorizontal : 6,
        // opacity : 0.2,
        borderRadius : 4
    },
    _imgUpload : {
        marginRight : 16,
        backgroundColor : 'yellow'
    },
    _button : {
        shadowColor : '#D3262640',
        shadowOffset : {
            height : 4,
            width : 0
        },
        shadowOpacity : 8,
    }
})

export default WriteReviewBottomSheet