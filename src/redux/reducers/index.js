import React from 'react'
import { auth } from './auth'
import { register } from './user' 
import { combineReducers } from 'redux'
import { category } from './category'
export default combineReducers({
  auth,
  register,
  category
})