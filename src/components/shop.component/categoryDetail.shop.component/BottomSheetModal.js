

import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
	BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const CustomBottomSheetModal = ({filterSorted, bottomSheetModalRef, filterSortedTitle, handleChooseSortedType}) => {

	// hiển thị cái nền xám xám khi bottomSheet hiển thị
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

	// renders
	return (
		<BottomSheetModal
			ref={bottomSheetModalRef} // Sử dụng ref chính xác
			snapPoints={['40%', '60%', '75%']}
			backdropComponent={renderBackdrop}
			index={0} // kích thước khi hiển thị lần đầu tiên
			handleIndicatorStyle={{  // màu của thanh ngangngang
				backgroundColor : '#9B9B9B'
			}}
			backgroundStyle={styles.container}
		>
			<BottomSheetView style={styles.contentContainer}>
				<Text className='mb-[16px] text-[#222] font-[500] text-[18px]'>Sort by</Text>
				{
					filterSorted.map((item) => {
						const isChoose = item.id === filterSortedTitle.id;
						return (
							<View
								key={item.id}
								className={`h-[48px] px-[16px] w-full ${isChoose ? 'bg-[#DB3022]' : ''}`}
							>
								<TouchableOpacity className='h-full flex flex-row items-center' onPress={() => handleChooseSortedType(item)}>
									<Text className={` text-[16px] font-[400] items-center ${isChoose ? 'text-[#f9f9f9]' : 'text-[#222222]'} `}>{item.title}</Text>
								</TouchableOpacity>
							</View>
						)
					})
				}
			</BottomSheetView>
		</BottomSheetModal>
	);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#f9f9f9',
	borderTopLeftRadius : 34,
	borderTopRightRadius : 34,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',	
  },
});

export default CustomBottomSheetModal;

