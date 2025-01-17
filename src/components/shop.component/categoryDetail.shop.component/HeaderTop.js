import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import img from '../../../constant/img'

const HeaderTop = ({isShowOneColumn, setIsShowOneColumn, categories, handleClickFilter, handlePresentModalPress, filterSortedTitle, setHeaderTitle, fetch}) => {
  return (
    <View 
        className='py-[10px] px-[16px] bg-[#fff]'
        style={styles.top}
    >
        {/* categories */}
        <View>
            <FlatList
                data={categories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => {
                                setHeaderTitle(item);
                                fetch(item)
                            }}
                            className='h-[30px] min-w-[100px] inline-flex justify-center items-center bg-[#222222] rounded-[29px]'
                        >
                            <Text className='font-[500] text-[#fff] text-[14px] capitalize'>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <TouchableOpacity style={{margin:7}}></TouchableOpacity>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

        {/* filter */}
        <View className='flex flex-row justify-between items-center bg-[#F9F9F9] h-[24px] mt-[18px]'>
        {/* filter */}
            <View className='w-[25%]'>
                <TouchableOpacity 
                    onPress={() => handleClickFilter()}
                    className='inline-flex flex-row justify-start items-center gap-[11px]'
                >
                    <Image
                        source={img.filterItem}
                    />
                    <Text>Filters</Text>
                </TouchableOpacity>
            </View>

            {/* price */}
            <View className='flex-1'>
                <TouchableOpacity className='flex flex-row gap-[11px] justify-center items-center'
                    onPress={() => handlePresentModalPress()}
                >
                    <Image
                        source={img.twoArrow}
                    />
                    <Text>{filterSortedTitle.title}</Text>
                </TouchableOpacity>
            </View>

            {/* type show */}
            <View className='w-[10%]'>
                <TouchableOpacity 
                    onPress={() => setIsShowOneColumn(!isShowOneColumn)}
                    className='flex flex-row justify-end'
                >
                    <Image
                        source={img.showOneColumn}
                        className='#222'
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    top : {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      elevation: 4,
    }
  })

export default HeaderTop