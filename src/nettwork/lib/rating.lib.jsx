import { axiosClient } from "../axiosClient";


const detail = async (productId) => {
    return await axiosClient.get(`/rating/detail/${productId}`);
}
const create = async (data, headers) => {
    return await axiosClient.post(`/rating/create`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...headers
        },
      });
}
export const ratingLibNettwork = {
    detail, create
}