import { Box, Button, Input, Text, useColorMode } from "@chakra-ui/react"
import { IoCartOutline as IconCart } from "react-icons/io5"
import { VscColorMode as IconColorMode } from "react-icons/vsc"
import ButtonComponent from "../components/button.component"

const HeaderLayout = () => {

  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <Box position="fixed" left="0" top="0" zIndex={100} bg="var(--bgColor)" w="100%" h="100px" borderBottom="1px" borderColor="var(--borderColor)" p="10px">
      <Box display="flex" flexDir="row" w="100%" h="100%">
        <Box display="flex" justifyItems="center" alignItems="center" w="25%">
          <Text fontSize={26} fontWeight={700} textAlign="center" w="100%" display="flex" flexDir="column">
            <span>eCommerce</span>
            <span>ProductListing</span>
          </Text>
        </Box>
        <Box w="50%" h="100%" display="flex" flexDir="row" justifyContent="start" alignItems="center" p="10px">
          <Box w="100%" h="55px" border="1px" borderColor="var(--borderColor)" borderRadius="25px" display="flex" flexDir="row" p="5px">
            <Input placeholder="Search Product" w="80%" h="100%" px="20px" border="0" focusBorderColor="transparent" />
            <ButtonComponent w="20%" h="100%" bg="transparent" borderRadius="25px">Search</ButtonComponent>
          </Box>
        </Box>
        <Box w="25%" h="100%" display="flex" flexDir="row" justifyContent="end" alignItems="center" p="10px">
          <Box>
            <IconCart size={37.5}/>
          </Box>
          <ButtonComponent ml={22.5} cursor="pointer" bg="transparent" p="5px" onClick={() => toggleColorMode()}>
            <IconColorMode size={32.5}/>
          </ButtonComponent>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderLayout