import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemHome from '../index.home.component/ItemHome'

const ListAdditionalItem = ({handleClickDetailItem, data}) => {
  return (
    <View>
        {/* title */}
        <View className='flex flex-row justify-between items-center w-full px-[16px]'>
            <Text className='text-[#222222] text-[24px] font-[700]'>You can also like this</Text>
            <Text className='text-[#9B9B9B] text-[15px] font-[400]'>{data.length} items</Text>
        </View>
        {/* End title */}
        <View className='p-[16px]'>
            {/*list product */}
            <View className='space-x-[20px]'>
                {/* item */}
                <FlatList 
                data={data}
                keyExtractor={item => item.productId}
                renderItem={({item}) => {
                    return <ItemHome item={item} handleClickDetailItem={handleClickDetailItem}/>
                }}
                horizontal
                ItemSeparatorComponent={() => <View style={{margin:10}}></View>}
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    </View>
  )
}

export default ListAdditionalItem