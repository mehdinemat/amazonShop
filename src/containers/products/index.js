import React, { useEffect, useState } from 'react'
import Home from '../home'
import {
  Button, HStack, useDisclosure, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, VStack
} from '@chakra-ui/react'
import ProductModal from '../../components/modals/productModal'
import { useSelector, useDispatch } from 'react-redux'
import { categories } from '../../redux/actions/category'
const Index = () => {
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { category } = useSelector(state => state)

  const [categoryList, setCategoryList] = useState()

  useEffect(() => {
    dispatch(categories())
  }, [])

  useEffect(() => {
    if (category !== undefined) {
      setCategoryList(renderedCategoryList(category?.categories))
    }
  }, [category])

  const renderedCategoryList = (category = [], categoryList = []) => {
    for (let cat of category) {
      categoryList.push({ name: cat?.name, id: cat?.id || cat?._id , quantity:cat?.quantity })
      { renderedCategoryList(cat.children, categoryList) }
    }
    return categoryList
  }

  return (
    <Home>
      <VStack>
        <Button onClick={onOpen} backgroundColor={'white'} border={'1px'} borderColor={'blackAlpha.300'} _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن محصول</Button>

        <TableContainer >
          <Table variant='simple' dir='rtl' >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>نام</Th>
                <Th isNumeric>قیمت</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
             
              }

            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

      </VStack>
      {
        category?.categories && <ProductModal onClose={onClose} isOpen={isOpen}
          category={category?.categories} />}
    </Home>
  )
}

export default Index
