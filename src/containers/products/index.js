import React from 'react'
import Home from '../home'
import { Button, HStack } from '@chakra-ui/react'

const index = () => {
  return (
    <Home>
      <HStack>
      <Button onClick={onOpen} backgroundColor={'white'} border={'1px'} borderColor={'blackAlpha.300'} _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن عنوان</Button>
    </HStack>
    </Home>
  )
}

export default index
