import axiosInstance from "../../helpers/axios"
import { productConstants } from "./constants"

export const addProduct = (data)=>async (dispatch)=>{

  try{
    dispatch({type:productConstants.ADD_PRODUCT_REQUEST})
    const res = await axiosInstance.post(`/product/create` , data)

  }catch(err){dispatch({type:productConstants.ADD_PRODUCT_FAILURE})}

}
export const getProduct = ()=>async(dispatch)=>{
   try{
    dispatch({type:productConstants.GET_PRODUCT_REQUEST})
    const res = await axiosInstance.get(`/product`)
    console.log(res.data , 'res.data')
    const {productList} = res.data
    dispatch({type:productConstants.GET_PRODUCT_SUCCESS , payload:productList})
   }catch(err){dispatch({type:productConstants.GET_PRODUCT_FAILURE , payload:{error:err.message}})}
}