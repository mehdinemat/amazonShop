import { Center, Stack, Input, VStack, HStack, FormLabel, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerAction } from '../../redux/actions/user'
const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, getValue } = useForm()
  const { auth } = useSelector(state => state)
  const handleRegisterForm = async (data) => {
    dispatch(registerAction(data))
  }

  useEffect(()=>{
    if(auth?.authenticate){
      navigate('/')
    }
  },[auth?.authenticate])

  return (
    <Layout>
      <Center as='form' onSubmit={handleSubmit(handleRegisterForm)} height={'80vh'} dir='rtl' >
        <VStack>
          <HStack>
            <Input placeholder='نام' {...register('firstName')} />
            <Input placeholder='نام خانوادگی' my={'10px'} {...register('lastName')} />
          </HStack>
          <Input placeholder='ایمیل'  {...register('email')} />
          <Input placeholder='رمز عبور' mt={'10px'} {...register('password')} />
          <Button colorScheme='teal' type='submit' size='sm' w={'100%'}>ثبت نام</Button>
        </VStack>

      </Center>
    </Layout>
  )
}

export default SignUp
