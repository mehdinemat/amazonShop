import React, { useEffect, useState } from 'react'
import Home from '../home'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../redux/actions/category'
import {
  ListItem,
  OrderedList, Button, useDisclosure, HStack
} from '@chakra-ui/react'

import CategoryModal from '../../components/modals/categoryModal'
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { IoIosCheckbox , IoIosCheckboxOutline , IoMdArrowForward , IoMdArrowDown } from "react-icons/io";


const Index = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [checked , setChecked] = useState([])
  const [expanded , setExpanded] = useState([])

  const dispatch = useDispatch()
  const { category } = useSelector(state => state)
  useEffect(() => {

    dispatch(categories())

  }, [])

  // const renderedCategory2 = (categories) => {
  //   console.log(categories , 'cattt')
  //   let myCategories = []
  //   for (let category of categories) {
  //     myCategories.push(
  //       {
  //         label: category.name,
  //         value: category.id,
  //         children: renderedCategory2(category.children)
  //       }
  //     )
  //   }
  //   return myCategories
  // }


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
       {/* {console.log(renderedCategory2(category?.categories) , 'categories')} */}
        {/* <CheckboxTree
          nodes={renderedCategory2(category?.categories)}
          checked={checked}
          expanded={expanded}
          onCheck={checked => setChecked(checked)}
          onExpand={expanded => setExpanded(expanded)}
          icons={{
            check: <IoIosCheckbox/>,
            uncheck: <IoIosCheckboxOutline />,
            halfCheck:  <IoIosCheckboxOutline />,
            expandClose: <IoMdArrowForward />,
            expandOpen: <IoMdArrowDown/>,
        }}
        /> */}

        <Button onClick={onOpen} backgroundColor={'white'} border={'1px'} borderColor={'blackAlpha.300'} _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن عنوان</Button>

      </HStack>

    </Home>
  )
}

export default Index
