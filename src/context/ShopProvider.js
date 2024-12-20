import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext();
export const useShopContext = () => useContext(ShopContext);
const ShopProvider = ({children}) => {
    const [listColor, setListColor] = useState([]);
    const [listSize, setListSize] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [listBrand, setListBrand] = useState([]);

    // const resetAllStates = () => {
    //     setListColor([]);
    //     setListSize([]);
    //     setListCategory([]);
    //     setListBrand([]);
    //   };

    return (
        <ShopContext.Provider
            value={{
                listBrand, setListBrand,
                listSize, setListSize,
                listCategory, setListCategory,
                listColor, setListColor
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export default ShopProvider