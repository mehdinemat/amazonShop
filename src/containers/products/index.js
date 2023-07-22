import React, { useEffect, useState } from 'react'
import Home from '../home'
import { Button, HStack , useDisclosure } from '@chakra-ui/react'
import ProductModal from '../../components/modals/productModal'
import { useSelector , useDispatch } from 'react-redux'
import { categories } from '../../redux/actions/category'
const Index = () => {
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {category} = useSelector(state=>state)

  useEffect(()=>{
    dispatch(categories())
  },[])

  return (
    <Home>
      <HStack>
      <Button onClick={onOpen}  backgroundColor={'white'} border={'1px'} borderColor={'blackAlpha.300'} _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن محصول</Button>
    </HStack>
     {  
     category?.categories &&  <ProductModal onClose={onClose} isOpen={isOpen} 
       category={category?.categories} />}
    </Home>
  )
}

export default Index
