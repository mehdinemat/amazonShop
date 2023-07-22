import axiosInstance from "../../helpers/axios"
import { initialDataConstants } from "./constants"

export const initialData = () =>async(dispatch)=>{
  try{

    dispatch({type:initialDataConstants.GET_ALL_PRODUCT_REQUEST})
    const res = await axiosInstance.get('/admin/initialdata')
    const {product , catgory} = res.data
    dispatch({type:initialDataConstants.GET_ALL_PRODUCT_SUCCESS , payload:product})


  }catch(err){dispatch()}
}