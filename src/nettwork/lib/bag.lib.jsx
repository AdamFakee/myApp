import { axiosClient } from "../axiosClient";


const getProduct = (headers) => {
    return axiosClient.get('/bag/detail', {headers});
}

// delete item in bag
const deleteBagItem = (data, headers) => {
    console.log(headers); // Ensure headers include the Authorization token
    return axiosClient.delete('/bag/deleteItem', { headers, data }); // Pass headers in config object
};

export const bagLibNettwork = {
    getProduct, deleteBagItem
}