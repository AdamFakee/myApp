import { Alert } from "react-native";
import { useGlobalContext } from "../../context/GlobalProvider";
import { axiosClient } from "../axiosClient";


const getProduct = () => {
    return axiosClient.get('/product');
}

const getDetailProduct = (productId) => {
    return axiosClient.get(`/product/detail/${productId}`)
}

// add item to bag
const addItemToBag = (data, headers) => {    
    return axiosClient.post('/bag/create', JSON.stringify(data), {headers});
}

export const homeLibNettwork = {
    getProduct, getDetailProduct, addItemToBag
}