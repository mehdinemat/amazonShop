import { Center, Stack , Input, VStack, HStack, FormLabel, Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
const SignUp = () => {

  const {register  , handleSubmit  , setValue , getValue} = useForm()

const handleRegisterForm = async(data) =>{
      console.log(data)
}

  return (
     <Layout>
       <Center as='form' onSubmit={handleSubmit(handleRegisterForm)}  height={'80vh'} dir='rtl' >
       <VStack>
       <HStack>
        <Input placeholder='نام' {...register('firsName')} />
        <Input placeholder='نام خانوادگی' my={'10px'} {...register('lastName')} />
        </HStack>
        <Input placeholder='ایمیل'  {...register('email')} />
        <Input placeholder='رمز عبور'mt={'10px'} {...register('password')} />
        <Button colorScheme='teal' type='submit'  size='sm' w={'100%'}>ثبت نام</Button>
       </VStack>

      </Center>
      </Layout>
  )
}

export default SignUp
