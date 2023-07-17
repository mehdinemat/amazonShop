import { Button, Center, Input, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import Layout from '../../components/Layout'
import { login } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
  const navigate = useNavigate()
  const {register , handleSubmit , setValue , getValues } = useForm()
  const  dispatch = useDispatch()
  const {auth} = useSelector(state=>state)

  
  useEffect(()=>{
     
    if(auth?.authenticate){
      navigate('/')
    }
    
  } , [auth?.authenticate])

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
