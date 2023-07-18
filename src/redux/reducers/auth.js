import { authConstants } from "../actions/constants"

const initialState = {
  token:'',
  user:{
    firstName:'',
    lastName:'',
    email:'',
    picture:''
  },
  authenticate:false,
  authenticating:false,
  loading:false , 
  error:'',
  message:''
}

export const auth = (state=initialState , action)=>{
    switch(action.type){
      case authConstants.LOGIN_REQUEST:
        return{
          ...state , authenticating:true
        }
        case authConstants.LOGIN_SUCCESS:
          return {
            ...state,user:action.payload.user , token:action.payload.token , authenticating:false, authenticate:true
          }
          case authConstants.SIGNOUT_REQUEST:
            return {
              ...state , loading:true
            }
          case authConstants.SIGNOUT_SUCCESS:
            return {
               ...initialState
            }
            case authConstants.SIGNOUT_FAILURE:
              return {
                ...state , error:action.payload.error
              }
      default:
       return {...state}
    }


}