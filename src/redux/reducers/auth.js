import { authConstants } from "../actions/constants"

export const auth = (state={auth:{}} , action)=>(dispatch)=>{
    switch(action.type){
      case authConstants.LOGIN_REQUEST:
        return {...state}
      default:
       return {...state}
    }


}