import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const ProductModal = (props) => {

  const [category, setCategory] = useState()

  const renderedCategoryList = (category = [], categoryList = []) => {
    for (let cat of category) {
      categoryList.push({ name: cat?.name, id: cat?.id || cat?._id })
      { renderedCategoryList(cat.children, categoryList) }
    }
    return categoryList
  }

  useEffect(() => {
    if (props.category !== undefined) {
      setCategory(renderedCategoryList(props.category))
    }
  }, [props.category])

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <ModalOverlay />
      <ModalContent dir='rtl' >
        <ModalHeader mr={'50px'}>افزودن محصول</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <form >
            <Input placeholder='نام محصول' size={'sm'} />
            <Input placeholder='تعداد' size={'sm'} my={2} />
            <Input placeholder='قیمت' size={'sm'} />
            <Input placeholder='توضیحات' size={'sm'} my={2} />
            <Select as={'select'} mt={4} dir='ltr' >
              {category && category.map((item) =>
                (<option value={item.id}>{item.name}</option>)
              )}
                <option>انتخاب عنوان</option>
            </Select>
            <Input type='file' mt={4} />
            <Button variant='ghost' border={'1px'} borderColor={'blackAlpha.300'} _hover={{
              bg: 'cyan.400',
              color: 'white',
            }} type='submit' mt={'40px'}>افزودن</Button>
          </form>
        </ModalBody>

        <ModalFooter>
          {/* <Button colorScheme='blue' mr={3} onClick={props.onClose}>
          Close
        </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal
