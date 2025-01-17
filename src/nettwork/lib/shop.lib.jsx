import { axiosClient } from "../axiosClient";


const getAllFilter = () => {
    return axiosClient.get('/filter');
}

const getAllProduct = () => {
    return axiosClient.get('/product/getAll');
}

const getProductByCategoryName = (categoryName) => {
    return axiosClient.get(`/product/${categoryName}`);
}

const getProductByFilter = (data) => {
    return axiosClient.post('/filter/getByFilter', JSON.stringify(data));
}
export const shopLibNettwork = {
    getAllFilter, getAllProduct, getProductByCategoryName, getProductByFilter
}