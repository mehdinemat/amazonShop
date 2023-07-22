import axiosInstance from "../../helpers/axios"
import { initialDataConstants } from "./constants"

export const initialData = () =>async(dispatch)=>{
  try{
    dispatch({type:initialDataConstants.GET_ALL_PRODUCT_REQUEST})
    const res = await axiosInstance.get('/admin/initialdata')
    const {product , category} = res.data
    dispatch({type:initialDataConstants.GET_ALL_PRODUCT_SUCCESS , payload:product})
    dispatch({type:initialDataConstants.GET_ALL_CATEGORY_SUCCESS , payload:category})

  }catch(err){dispatch({type:initialDataConstants.GET_ALL_PRODUCT_FAILURE ,payload:{error:err.message}})}
}