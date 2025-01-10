import { axiosClient } from "../axiosClient";


const addToFavorite = (data, headers) => {
    return axiosClient.post('/favorite/create', JSON.stringify(data), {headers});
}

const getFavorite = (headers) => {
    return axiosClient.get('/favorite/detail', {headers});
}

const deleteInFavorite = (data, headers) => {
    return axiosClient.delete("/favorite/delete", JSON.stringify(data), {headers});
}

export const favoriteLibNettwork = {
    addToFavorite, getFavorite, deleteInFavorite
}