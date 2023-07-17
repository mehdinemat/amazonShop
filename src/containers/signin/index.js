import { Button, Center, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {useForm} from 'react-hook-form'
import Layout from '../../components/Layout'
import { login } from '../../redux/actions/auth'
import { useDispatch } from 'react-redux'
const Signin = () => {

  const {register , handleSubmit , setValue , getValues } = useForm()
  const  dispatch = useDispatch()

  const handleSingInForm = (data)=>{
    
      dispatch(login(data))
  }

  return (
    <Layout>
      <Center h={'80vh'} as='form' onSubmit={handleSubmit(handleSingInForm)} >
      <VStack >
      <Input placeholder='ایمیل' textAlign={'right'} {...register('email')} />
      <Input placeholder='رمز عبور' textAlign={'right'} {...register('password')} />
      <Button colorScheme='teal' type='submit'  size='sm' w={'100%'}>ورود</Button>
      </VStack>
    </Center>
    </Layout>
  )
}

export default Signin
