import { Box, Input, useColorMode } from "@chakra-ui/react"
import { IoCartOutline as IconCart } from "react-icons/io5"
import { VscColorMode as IconColorMode } from "react-icons/vsc"
import ButtonComponent from "../components/button.component"
import LogoComponent from "../components/logo.component"
import CartComponent from "../components/cart.component"
import { useState } from "react"

const HeaderLayout = () => {

  const {colorMode, toggleColorMode} = useColorMode()
  const [isCartVisible, setIsCartVisible] = useState(false)
  
  return (
    <Box position="fixed" left="0" top="0" zIndex={100} bg="var(--bgColor)" w="100%" h="100px" borderBottom="1px" borderColor="var(--borderColor)" p="10px">
      <Box display="flex" flexDir="row" w="100%" h="100%" maxW="1440px" margin="auto">
        <Box display="flex" justifyItems="center" alignItems="center" w="25%">
          <LogoComponent/>
        </Box>
        <Box w="50%" h="100%" display="flex" flexDir="row" justifyContent="start" alignItems="center" p="10px">
          <Box w="100%" h="55px" border="1px" borderColor="var(--borderColor)" borderRadius="25px" display="flex" flexDir="row" p="5px">
            <Input placeholder="Search Product" w="80%" h="100%" px="20px" border="0" focusBorderColor="transparent" />
            <ButtonComponent w="20%" h="100%" bg="transparent" borderRadius="25px">Search</ButtonComponent>
          </Box>
        </Box>
        <Box w="25%" h="100%" display="flex" flexDir="row" justifyContent="end" alignItems="center" p="10px">
          <Box pos="relative" ml={5}>
            <ButtonComponent id="cartButton" bg="transparent" onClick={()=>setIsCartVisible(!isCartVisible)}>
              <IconCart size={35} pointerEvents="none"/>
            </ButtonComponent>
            <CartComponent isVisible={isCartVisible} setIsVisible={(val:boolean)=>setIsCartVisible(val)}/>
          </Box>
          <ButtonComponent ml={5} bg="transparent" onClick={() => toggleColorMode()}>
            <IconColorMode size={32.5}/>
          </ButtonComponent>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderLayout