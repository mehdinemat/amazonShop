import axiosInstance from "../../helpers/axios"
import { userConstants } from "./constants"

export const registerAction = (data) =>async(dispatch)=>{

  try{
    dispatch({type:userConstants.REGISTER_REQUEST })
    const {user , msg} = await axiosInstance.post('/admin/signup' , {...data})
    dispatch({type:userConstants.REGISTER_SUCCESS , payload:{user , msg}})

  }catch(err){ dispatch({type:userConstants.REGISTER_FAILURE , payload:{error:err.message}}) }

}