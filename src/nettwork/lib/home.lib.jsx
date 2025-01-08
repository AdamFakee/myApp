import { axiosClient } from "../axiosClient";

const getProduct = () => {
    return axiosClient.get('/product');
}

const getDetailProduct = (productId) => {
    return axiosClient.get(`/product/detail/${productId}`)
}
export const homeLibNettwork = {
    getProduct, getDetailProduct
}