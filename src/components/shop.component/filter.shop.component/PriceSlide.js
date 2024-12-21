import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceSlide = ({minPrice, maxPrice, isApply, setPrice, price}) => {
    const screenWidth = Dimensions.get('window').width - 16 * 2;
    const [currentPrice, setCurrentPrice] = useState([minPrice, maxPrice]);
    // const [fisrtPrice, setFirstPrice] = useState(minPrice);
    // const [lastPrice, setLastPrice] = useState(maxPrice);


    useEffect(() => {
        if(maxPrice >= price.maxPrice) {
            setCurrentPrice([price.minPrice, price.maxPrice])
        } else {
            setCurrentPrice([price.minPrice, maxPrice]);
        }
        
    }, [])
    useEffect(() => {
        if(isApply) {
            setPrice({
                minPrice : currentPrice[0],
                maxPrice : currentPrice[1]
            })
        }
    }, [isApply])
    const handlePriceSliderChange = value => {
        // setFirstPrice(value[0]);
        // setLastPrice(value[1]);
        setCurrentPrice(value);
    };
    return (
        <View>
            <Text className='text-[#222222] h-[42px] py-[12px] text-[16px] capitalize px-[16px]'>Price</Text>
            <View className='h-[88px] px-[16px] bg-[#fff] flex justify-center'>
                <View className='flex-row justify-between items-center'>
                    <Text className='flex-1'>{currentPrice[0]}</Text>
                    <Text>{currentPrice[1]}</Text>
                </View>
                <MultiSlider
                    values={currentPrice}
                    onValuesChange={handlePriceSliderChange}
                    sliderLength={screenWidth}
                    min={minPrice}
                    max={maxPrice}
                    step={1}
                    allowOverlap={true}
                    snapped={true}
                    markerStyle={{ backgroundColor: '#DB3022' }}
                    selectedStyle={{ backgroundColor: '#DB3022' }}
                    unselectedStyle={{ backgroundColor: '#9B9B9B' }}
                />
            </View>
        </View>
    )
}

export default PriceSlide 
