import React from 'react'
import { auth } from './auth'
import { register } from './user' 
import { combineReducers } from 'redux'

export default combineReducers({
  auth,
  register
})