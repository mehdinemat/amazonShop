import { initialDataConstants, productConstants } from "../actions/constants";

const initialState = {
  loading : false , 
  products:[],
  error:''
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
          case initialDataConstants.GET_ALL_PRODUCT_FAILURE:
          return {
            ...state , error:action.payload
          }
        default:
          return {
            ...state
          }
  }

}
