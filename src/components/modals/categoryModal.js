import React, { useEffect } from 'react'
import {
  ListItem,
  OrderedList, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button
} from '@chakra-ui/react'
const CategoryModal = (props) => {

  useEffect(()=>{
    console.log(props.isOpen)
  },[props.isOpen])

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <ModalOverlay />
      <ModalContent dir='rtl'>
        <ModalHeader mr={'50px'}>افزودن عنوان</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        </ModalBody>

        <ModalFooter>
          {/* <Button colorScheme='blue' mr={3} onClick={props.onClose}>
            Close
          </Button> */}
          <Button variant='ghost'>افزودن</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}

export default CategoryModal
