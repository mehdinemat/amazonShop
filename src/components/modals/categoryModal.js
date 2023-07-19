import React, { useEffect , useState } from 'react'
import {
  ListItem,
  OrderedList, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Input, Select, FormControl
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const CategoryModal = (props) => {

  const [ category , setCategory  ] = useState([])

  const {register , handleSubmit } = useForm()

  const renderedCategoryList = (category , categoryList=[]) => {
   
    for (let cat of category) {
      categoryList.push(cat.name)
      {  renderedCategoryList(cat.children , categoryList) }
    }
    return categoryList
  }

  useEffect(()=>{
    setCategory(renderedCategoryList(props.category))
  },[])

 const handleSendForm = (value)=>{
  console.log(value.file[0].name , value.title , value.parent)
  
 }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <ModalOverlay />
      <ModalContent dir='rtl' >
        <ModalHeader mr={'50px'}>افزودن عنوان</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <form onSubmit={handleSubmit(handleSendForm)}>
          <Input placeholder='نام عنوان' size={'sm'} {...register('title')}/>
          <Select as={'select'} mt={4} dir='ltr' {...register('parent')}>
           { category.map((item)=>
             ( <option value={item}>{item}</option>)
            ) }
          </Select>
          <Input type='file' mt={4} {...register('file')}/>
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

export default CategoryModal
