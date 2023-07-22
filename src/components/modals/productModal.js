import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/product'
const ProductModal = (props) => {

  const [category, setCategory] = useState()

  const [productPictures , setProductPictures ] = useState([])

  const dispatch = useDispatch()

  const {handleSubmit , setValue , getValue , register} = useForm()

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

  const handleSendForm = (data)=>{
    const form = new FormData()
    form.append('name' , data.name)
    form.append('quantity' , data.quantity)
    form.append('price' , data.price)
    form.append('description' , data.description)
    form.append('category' , data.category)
    productPictures.map((item)=>{
      form.append('productPicture' , item)
    })
    dispatch(addProduct(form))
  }

  const handleChangeImage = (e)=>{
    setProductPictures([...productPictures , e.target.files[0]])
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <ModalOverlay />
      <ModalContent dir='rtl' >
        <ModalHeader mr={'50px'}>افزودن محصول</ModalHeader>
        <ModalCloseButton />
        <ModalBody >
          <form onSubmit={handleSubmit(handleSendForm)} >
            <Input placeholder='نام محصول' size={'sm'} {...register('name')}/>
            <Input placeholder='تعداد' size={'sm'} my={2} {...register('quantity')} />
            <Input placeholder='قیمت' size={'sm'} {...register('price')}  />
            <Input placeholder='توضیحات' size={'sm'} my={2} {...register('description')}  />
            <Select as={'select'} mt={4} dir='ltr' {...register('category')} >
              {category && category.map((item) =>
                (<option value={item.id}>{item.name}</option>)
              )}
                <option>انتخاب عنوان</option>
            </Select>
            {
            productPictures &&  productPictures.map((item)=>(
                <div>{item.name}</div>
            ))
            }
            <Input type='file' multiple mt={4} {...register('file')} onChange={handleChangeImage} />
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
