import React from 'react'
import Header from '../Header'
import Sidebar from '../../components/Sidebar'
import { HStack } from '@chakra-ui/react'
const Layout = (props) => {
  return (
    <>
      <Header />
        <Sidebar >
        {props.children}
        </Sidebar>
    </>
  )
}

export default Layout
