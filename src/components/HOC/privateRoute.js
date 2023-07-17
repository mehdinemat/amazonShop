import React from 'react'
import { Navigate } from 'react-router-dom'
const privateRoute = ({children}) => {
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to={'/signin'}/>
  
}

export default privateRoute
