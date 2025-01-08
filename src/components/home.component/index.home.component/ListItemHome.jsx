import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import ItemHome from './ItemHome'

const ListItemHome = ({
  information={
    title:'', type:'', textLink:''
  },
  productItem,
  handleClickDetailItem
}) => {
  return (
    <View className='p-[16px]'>
        {/* title */}
        <View className='flex flex-row justify-between items-center mb-[22px]'>
          <View className='space-y-[4px] flex-1'>
              <Text className='text-[#222222] text-[34px] font-[500] uppercase'>{information.title}</Text>
              <Text className='text-[#9B9B9B] text-[16px] font-[400] capitalize'>{information.type}</Text>
          </View>
          <View>
              <TouchableOpacity>
              <Text  className='text-[#222222] text-[16px] font-[400] capitalize'>{information.textLink}</Text>
              </TouchableOpacity>
          </View>
        </View>

        {/*list product */}
        <View>
          <View className='space-x-[20px]'>
              {/* item */}
              <FlatList 
              data={productItem}
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

export default ListItemHome