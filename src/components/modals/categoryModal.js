import React, { useEffect } from 'react'
import {
  ListItem,
  OrderedList, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Input, Select
} from '@chakra-ui/react'
const CategoryModal = (props) => {

  useEffect(()=>{
    console.log(props.isOpen)
  },[props.isOpen])

  const renderedCategoryList =(category)=>{
    let listCategory = []

    

      return (
      <>
        </>
      )
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <ModalOverlay />
      <ModalContent dir='rtl'>
        <ModalHeader mr={'50px'}>افزودن عنوان</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder='نام عنوان' size={'sm'}/>
          <Select mt={4}>
            {
              props.category.map((item)=>(renderedCategoryList(item)))
            }
          </Select>
        </ModalBody>

        <ModalFooter>
          {/* <Button colorScheme='blue' mr={3} onClick={props.onClose}>
            Close
          </Button> */}
          <Button variant='ghost' border={'1px'} borderColor={'blackAlpha.300'}  _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>افزودن</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}

export default CategoryModal
