import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';

const ModalCamera = ({isAddPhoto, setIsAddPhoto, setFormRatingReview, formRatingReview}) => {
    // func take img
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
            const uri = result.assets[0].uri; // take url
            const mimeType = result.assets[0].mimeType;
            const fileName = result.assets[0].fileName;
            const value = {
                mimeType, fileName, uri
            };
            setFormRatingReview({
                ...formRatingReview,
                imgs : [...formRatingReview.imgs, value],
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

    return (
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
    )
}

export default ModalCamera