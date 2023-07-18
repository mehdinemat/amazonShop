import { HStack , Stack, Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
const IsLoginUser= ()=>{
  const dispatch = useDispatch()
  const handleSignOut = ()=>{
    
  }
  return (
    <Stack cursor={'pointer'} onClick={handleSignOut} ><Text color={'white'} >خروج</Text></Stack>
  )
}
const isNLoginUser =()=>{
  return (
   <>
    <Link to={'/signin'} ><Text color={'white'} >ورود</Text></Link>
    <Link to={'/signup'} ><Text color={'white'} >ثبت نام</Text></Link>
    </>
  )
}

const Header = () => {

  const {auth} = useSelector(state=>state)


 

  return (
      <>

      <HStack w={'100%'} height={'40px'} px={'100px'}  py={'30px'} justifyContent={'space-between'} bg={'blackAlpha.800'}  >
          <HStack>
          {
            auth?.authenticate ? IsLoginUser() : isNLoginUser()  
          }
          </HStack>
          <Link to={'/'} ><Text color={'white'} >داشبورد مدیریت</Text></Link>
      </HStack>

      </>

  )
}

export default Header
