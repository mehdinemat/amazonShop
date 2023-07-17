import { authConstants } from "./constants"

export const login = (user)=>async(dispatch)=>{
   try{
    dispatch({type:authConstants.LOGIN_REQUEST , payload:{login:user}})

   }catch(err){
    dispatch({type:authConstants.ALERT , payload:{error:err.message}})
   }

}