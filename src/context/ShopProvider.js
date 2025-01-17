import React, { createContext, useContext, useEffect, useState } from 'react'

const ShopContext = createContext();
export const useShopContext = () => useContext(ShopContext);
const ShopProvider = ({children}) => {
    const [listColor, setListColor] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [listBrand, setListBrand] = useState([]);
    const [isConfirm, setIsConfirm] = useState(false);
    const [price, setPrice] = useState({
        minPrice : 0,
        maxPrice : 999999999999,
    });
    const resetAllStates = () => {
        setListColor([]);
        setListSize([]);
        setListCategory([]);
        setListBrand([]);
        setPrice({
            minPrice : 0,
            maxPrice : 999999999999,
        })
    };
    


    return (
        <ShopContext.Provider
            value={{
                listBrand, setListBrand,
                listSize, setListSize,
                listCategory, setListCategory,
                listColor, setListColor,
                isConfirm, setIsConfirm,
                price, setPrice,
                resetAllStates
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider