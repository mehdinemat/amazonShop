import { authConstants } from "./constants"
import axios from '../../helpers/axios'

export const login = (data)=>async(dispatch)=>{
   try{

      dispatch({type:authConstants.LOGIN_REQUEST})
      const res = await axios.post(`/admin/signin`, {...data} )

      if(res.status == 200){
         const {token , user} = res.data
         localStorage.setItem('token' , token)
         localStorage.setItem('user' , JSON.stringify(user))
         dispatch({type:authConstants.LOGIN_SUCCESS , payload:{token , user}})
      }
      if(res.status == 400){
         dispatch({type:authConstants.LOGIN_FAILURE , payload:{error:res.data.error}})
      }


   }catch(err){
    dispatch({type:authConstants.ALERT , payload:{error:err.message}})
   }

}

export const isUserLoggedIn = (data)=>async(dispatch)=>{

   try{
         const token = localStorage.getItem('token')
         if(token){
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({
               type:authConstants.LOGIN_SUCCESS , payload:{token , user}
            })

         }else {
            dispatch({
               type:authConstants.LOGIN_FAILURE , payload:{error:'Faild to Login'}
            })
         }

   }catch(err){  dispatch({type:authConstants.LOGIN_FAILURE , payload:{error:err.message} }) }

}