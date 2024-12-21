import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CheckboxCategory from './CheckboxCategory';

const CategoryBrand = ({dbCategory, listCategoryChoosen, dispatchListCategoryChoosen}) => {
  return (
    <View className='flex-1'>
      <FlatList
        data={dbCategory}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View className='mb-[8px]'></View>}
        renderItem={({item}) => <CheckboxCategory 
                                  item={item} 
                                  dispatchListCategoryChoosen={dispatchListCategoryChoosen} 
                                  listCategoryChoosen={listCategoryChoosen}
                                />}
      />
    </View>
  )
}

export default CategoryBrand