import { View, Image, FlatList, Text } from 'react-native'
import React from 'react'

const ImageSilder = ({data, isStaticImages = false }) => {
  console.log(data)
  return (
    <View >
      {/* img slider */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Image
              source={isStaticImages ? item : { uri: item }}
              className='w-[275px] aspect-[275/413] object-cover'
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Image style={{margin:4}}/>}
      />
      {/* End img slider */}
    </View>
  )
}

export default ImageSilder