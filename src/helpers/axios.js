import { api } from "../urlConfig";
import axios from "axios";

const token = window.localStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL:api,headers:{
    'Authorization':token ? 'bearer '+token :''
  }
})

export default axiosInstance