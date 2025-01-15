import { axiosClient } from "../axiosClient";


const detail = async (productId) => {
    return await axiosClient.get(`/rating/detail/${productId}`);
}
const create = async (data) => {
    console.log(data)
    return await axiosClient.post(`/rating/create`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
}
export const ratingLibNettwork = {
    detail, create
}