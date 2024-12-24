// import { View, Text } from 'react-native'
// import React from 'react'

// const Favorite = () => {
//   return (
//     <View>
//       <Text>f</Text>
//     </View>
//   )
// }

// export default Favorite

import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const Favorite = () => {
  // ref
  const bottomSheetModalRef = useRef(null); // Sử dụng useRef() để tạo ref

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        ref={bottomSheetModalRef} // Sử dụng ref chính xác
        onChange={handleSheetChanges}
        snapPoints={['25%', '50%', '75%']}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesomddde 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Favorite;
