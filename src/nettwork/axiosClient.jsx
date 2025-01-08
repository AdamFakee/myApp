import axios from "axios";
import domain from "../constant/domain";



export const axiosClient = axios.create({
    baseURL: domain,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  