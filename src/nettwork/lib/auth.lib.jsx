import { axiosClient } from "../axiosClient";

export function register(data) {
    return axiosClient.post('/customer/register', JSON.stringify(data));
}

export function login(data){
    return axiosClient.post('/customer/login', JSON.stringify(data));
}




