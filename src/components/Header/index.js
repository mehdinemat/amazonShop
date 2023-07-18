import { HStack, Stack, Text, useColorModeValue, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions/auth'
const IsLoginUser = () => {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(signOut())
  }
  return (
    <NavItem>
      <Stack cursor={'pointer'} onClick={handleSignOut} ><Text color={'black'} _groupHover={{
      color: 'white',
    }}>خروج</Text></Stack>
    </NavItem>
  )
}
const isNLoginUser = () => {
  const isNLU = [
    { to: '/signin', text: 'ورود' },
    { to: '/signup', text: 'ثبت نام' }
  ]
  return (
    <>
      {
        isNLU.map((item) => (
         <NavItem>
           <Link to={item.to} ><Text color={'black'} _groupHover={{
            color: 'white',
          }}>{item.text}</Text></Link>
         </NavItem>
        ))
      }
    </>
  )
}

const NavItem = ({ children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {children}
      </Flex>
    </Link>
  );
};


const Header = () => {

  const { auth } = useSelector(state => state)




  return (
    <>

      <HStack w={'100%'} height={'40px'} px={'100px'} py={'30px'} justifyContent={'space-between'} bg={'white'} borderBottom={'1px'} borderColor={'blackAlpha.200'} >
        <HStack>

          {
            auth?.authenticate ? IsLoginUser() : isNLoginUser()
          }
        </HStack>
        <Link to={'/'} ><Text color={'black'} _groupHover={{
          color: 'white',
        }}>داشبورد مدیریت</Text></Link>
      </HStack>

    </>

  )
}

export default Header
