import React from 'react'
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, VStack  ,HStack, FormLabel  , Text, Image} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { generatePublicUrl } from '../../urlConfig'
const DetailProduct = (props) => {
  const {handleSubmit , register} = useForm()
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={'xl'}>
    <ModalOverlay />
    <ModalContent dir='rtl' >
      <ModalHeader mr={'50px'}>افزودن محصول</ModalHeader>
      <ModalCloseButton />
      <ModalBody >
        <form  >
          <VStack>
            <HStack justifyContent={'space-between'} w={'90%'}>
              <VStack  alignItems={'start'}>
                <FormLabel>نام محصول</FormLabel>
                <Text fontSize={'xs'}>{props.productDetails.name}</Text>
              </VStack>
              <VStack alignItems={'start'} w={'80px'}>
              <FormLabel>قیمت</FormLabel>
                <Text fontSize={'xs'}>{props.productDetails.price}</Text>
              </VStack>
            </HStack>
            <HStack justifyContent={'space-between'} w={'90%'}>
              <VStack alignItems={'start'}>
                <FormLabel>تعداد</FormLabel>
                <Text fontSize={'xs'}>{props.productDetails.quantity}</Text>
              </VStack>
              <VStack alignItems={'start'} w={'80px'}>
              <FormLabel>عنوان</FormLabel>
                <Text fontSize={'xs'}>{props.productDetails.category.name}</Text>
              </VStack>
            </HStack>
              <VStack  w={'90%'} alignItems={'start'}>
                <FormLabel>توضیحات</FormLabel>
                <Text fontSize={'xs'}>{props.productDetails.description}</Text>
              </VStack>
              <VStack  w={'90%'} alignItems={'start'}>
                <FormLabel>تصاویر محصول</FormLabel>
                <HStack>{props.productDetails.productPicture.map((item)=>(
                  <Image src={generatePublicUrl(item.img)}  w={'80px'}/>
                ))}</HStack>
              </VStack>
          </VStack>
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

export default DetailProduct
