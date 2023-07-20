import { categories } from "../actions/category"
import { categoryConstants } from "../actions/constants"

const initialState = {
  categories: [],
  loading: false,
  error: false
}

const buildNewCategory = (sCategories, aCategories) => {
  let categoryList = []

  for (let cat of sCategories) {
    if (cat.children) {
      if (cat.id === aCategories.parentId) {
        categoryList.push({...cat ,  children:[...buildNewCategory(cat.children, aCategories) ,aCategories]})
  
      }else {

        categoryList.push({ ...cat, children: buildNewCategory(cat.children, aCategories) })
      }
    } else {
      categoryList.push(cat)
    }
    
  }

  return categoryList

}

export const category = (state = initialState, action) => {

  switch (action.type) {
    case categoryConstants.CATEGORY_REQURES:
      return {
        ...state, loading: true
      }
    case categoryConstants.CATEGORY_SUCCESS:
      return {
        ...state, categories: action.payload.categories, loading: false
      }
    case categoryConstants.CATEGORY_FAILURE:
      return {
        ...state, error: action.payload.error, loading: false
      }
    case categoryConstants.ADD_CATEGORY_REQUEST:
      return {
        ...state, loading: true
      }
    case categoryConstants.ADD_CATEGORY_SUCCESS:
      return {
        ...state, loading: false, categories:buildNewCategory(state.categories, action.payload)
      }
    case categoryConstants.ADD_CATEGORY_FAILURE:
      return {
        ...state, loading: false, error: action.payload.error
      }
    default:
      return {
        ...state
      }

  }

}