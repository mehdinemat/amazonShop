import { authConstants } from "./constants"

export const login = (user)=>async(dispatch)=>{
  console.log('hellll')
   try{
    dispatch({type:authConstants.LOGIN_REQUEST , payload:{login:true}})

   }catch(err){
    dispatch({type:authConstants.ALERT , payload:{error:err.message}})
   }

}