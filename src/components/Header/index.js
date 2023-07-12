import { HStack , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <>

      <HStack w={'100%'} height={'40px'} px={'100px'}  py={'30px'} justifyContent={'space-between'} bg={'blackAlpha.800'}  >
          <HStack>
          <Link to={'/signup'}><Text color={'white'}>ثبت نام</Text></Link>
          <Link to={'/signin'} ><Text color={'white'}>ورود</Text></Link>
          </HStack>
          <Link to={'/'} ><Text color={'white'} >داشبورد مدیریت</Text></Link>
      </HStack>

      </>

  )
}

export default Header
