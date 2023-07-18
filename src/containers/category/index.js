import React, { useEffect } from 'react'
import Home from '../home'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/category'
import {
  ListItem,
  OrderedList, Button, useDisclosure
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
        {<OrderedList>{category?.children.map((item) => (renderedCategory(item)))}</OrderedList>}
      </ListItem>
    )

  }



  return (
    <Home>
        <CategoryModal
        isOpen={isOpen}
        onClose={onClose} />
      <Button onClick={onOpen}>Open Modal</Button>

      <OrderedList>
        {
          category && category?.categories.map((item) => (
            renderedCategory(item)
          ))
        }
      </OrderedList>

    </Home>
  )
}

export default Index
