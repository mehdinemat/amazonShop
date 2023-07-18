
  import axiosInstance from '../../helpers/axios'
import {categoryConstants} from './constants'

 export const categories = (data)=>async(dispatch)=>{

  try{

    dispatch({type:categoryConstants.CATEGORY_REQURES})
    const res = await axiosInstance.get('/category')
    const {categoryList} = res.data
    dispatch({type:categoryConstants.CATEGORY_SUCCESS , payload:{categories:categoryList}})

  }catch(err){return dispatch({type:categoryConstants.CATEGORY_FAILURE , payload:{error:err.message}})}

 }