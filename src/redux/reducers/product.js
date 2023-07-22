import { productConstants } from "../actions/constants";

const initialState = {
  loading : false , 
  products:[]
}

export const product = ( state=initialState, action)=>{
  switch(action.type){
    case productConstants.GET_PRODUCT_REQUEST:
      return {
        ...state
      }
      case productConstants.GET_PRODUCT_SUCCESS:
        return {
          ...state , products:action.payload
        }
        default:
          return {
            ...state
          }
  }

}