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
  authenticating:false
}

export const auth = (state=initialState , action)=>(dispatch)=>{
    switch(action.type){
      case authConstants.LOGIN_REQUEST:
        state = {
          ...state , authenticating:true
        }
        break;
        case authConstants.LOGIN_SUCCESS:
          state={
            ...state,user:action.payload.user , token:action.payload.token , authenticating:false, authenticate:true
          }
          break;
      default:
       return {...state}
    }


}