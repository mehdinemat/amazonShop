import React from 'react'
import Layout from '../../components/Layout'
import { Center } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar'
import { Text } from '@chakra-ui/react'
const Home = ({children}) => {
  return (
    <Layout>
      <Sidebar>
      {children}
      </Sidebar>
    </Layout>
  )
}

export default Home
