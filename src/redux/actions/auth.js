import { authConstants } from "./constants"
import axios from '../../helpers/axios'

export const login = (data)=>async(dispatch)=>{
   try{

      dispatch({type:authConstants.LOGIN_REQUEST})
      const res = await axios.post(`/admin/signin`, {...data} )

      if(res.status == 200){
         const {token , user} = res.data
         localStorage.setItem('token' , token)
         dispatch({type:authConstants.LOGIN_SUCCESS , payload:{token , user}})
      }
      if(res.status == 400){
         dispatch({type:authConstants.LOGIN_FAILURE , payload:{error:res.data.error}})
      }

    dispatch({type:authConstants.LOGIN_REQUEST , payload:{login:data}})

   }catch(err){
    dispatch({type:authConstants.ALERT , payload:{error:err.message}})
   }

}