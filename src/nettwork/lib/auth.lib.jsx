import { axiosClient } from "../axiosClient";

export function register(data) {
    return axiosClient.post('/auth/register', JSON.stringify(data));
}

export function login(data){
    return axiosClient.post('/auth/login', JSON.stringify(data));
}




