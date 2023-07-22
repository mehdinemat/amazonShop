import axiosInstance from "../../helpers/axios"
import { productConstants } from "./constants"

export const addProduct = (data)=>async (dispatch)=>{

  try{
    dispatch({type:productConstants.ADD_PRODUCT_REQUEST})
    const res = await axiosInstance.post(`/product/create` , data)

  }catch(err){dispatch({type:productConstants.ADD_PRODUCT_FAILURE})}

}