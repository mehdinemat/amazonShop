
import { userConstants } from "../actions/constants"
const initialState = {
  error:'',
  message:'',
  loading:''
}
export  const register =(state=initialState , action)=>{

  switch(action.type){
    case userConstants.REGISTER_REQUEST:
      return {
        ...state , loading:true
      }
      case userConstants.REGISTER_SUCCESS:
        return {
          ...state , loading:false , message:action.payload.msg 
        }
        case userConstants.REGISTER_FAILURE:
          return {
            ...state , error:action.payload.msg
          }
          default:
            return {
              ...state
            }
  }


}