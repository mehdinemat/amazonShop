import React, { useEffect } from 'react'
import Home from '../home'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/category'
import {
  ListItem,
  OrderedList, Button, useDisclosure, HStack
} from '@chakra-ui/react'

import CategoryModal from '../../components/modals/categoryModal'

const Index = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()
  const { category } = useSelector(state => state)
  useEffect(() => {

    dispatch(categories())

  }, [])



  const renderedCategory = (category) => {

    return (
      <ListItem>{category?.name}
        {<OrderedList>{category?.children?.length > 0 && category?.children?.map((item) => (renderedCategory(item)))}</OrderedList>}
      </ListItem>
    )

  }




  return (
    <Home>
      {
       category?.categories && <CategoryModal
          isOpen={isOpen}
          onClose={onClose} category={category?.categories} />
      }

      <HStack w={'100%'} justifyContent={'space-between'} alignItems={'start'}>

        <OrderedList>
          {
            category && category?.categories.map((item) => (
              renderedCategory(item)
            ))
          }
        </OrderedList>
        <Button onClick={onOpen} backgroundColor={'white'} border={'1px'} borderColor={'blackAlpha.300'} _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن عنوان</Button>

      </HStack>

    </Home>
  )
}

export default Index
