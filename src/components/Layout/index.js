import React from 'react'
import Header from '../Header'
import { HStack } from '@chakra-ui/react'
const Layout = (props) => {
  return (
    <>
      <Header />
        {props.children}
    </>
  )
}

export default Layout
