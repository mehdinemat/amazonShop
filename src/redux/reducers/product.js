import { initialDataConstants, productConstants } from "../actions/constants";

const initialState = {
  loading : false , 
  products:[]
}

export const product = ( state=initialState, action)=>{
  switch(action.type){
    case initialDataConstants.GET_ALL_PRODUCT_REQUEST:
      return {
        ...state
      }
        case initialDataConstants.GET_ALL_PRODUCT_SUCCESS:
          return {
            ...state , products:action.payload
          }
        default:
          return {
            ...state
          }
  }

}
