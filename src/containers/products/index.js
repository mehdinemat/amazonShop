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
import DetailProduct from '../../components/modals/detailProduct'
import { useSelector, useDispatch } from 'react-redux'
import { categories } from '../../redux/actions/category'
import { initialData } from '../../redux/actions/initialData'
const Index = () => {
  const dispatch = useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: detailsIsOpen, onOpen: detailsOnOpen, onClose: detailsOnClose } = useDisclosure()

  const { category, product } = useSelector(state => state)
  const [productDetails , setProductDetails ] = useState()

  const [productList, setProductList] = useState()

  useEffect(() => {
    dispatch(initialData())
    dispatch(categories())
  }, [])

  const handelProductClick = (item)=>{
    setProductDetails(item)
    detailsOnOpen(true)
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
                <Th isNumeric>تعداد</Th>
                <Th >توضیحات</Th>
                <Th >عنوان</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                product?.products.map((item, index) => (
                  <Tr onClick={()=>handelProductClick(item)}>
                    <Td>{index + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td isNumeric>{item.price}</Td>
                    <Td isNumeric>{item.quantity}</Td>
                    <Td isNumeric>{item.description}</Td>
                    <Td isNumeric>{item.category.name}</Td>
                  </Tr>
                ))
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
      {
        productDetails && <DetailProduct onClose={detailsOnClose}
        isOpen={detailsIsOpen} productDetails={productDetails}
        />
      }
    </Home>
  )
}

export default Index
