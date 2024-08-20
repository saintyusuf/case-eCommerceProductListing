import { Box, useColorMode } from "@chakra-ui/react"
import ButtonComponent from "../../components/button.component"
import { VscColorMode as IconColorMode } from "react-icons/vsc"

const ColorModeTogglerHeader = () => {  

  const {toggleColorMode} = useColorMode()
  
  return (
    <ButtonComponent colorMode="transparent" w={{mobile: "30px", desktop: "40px"}} h={{mobile: "30px", desktop: "40px"}} onClick={()=>toggleColorMode()}>
      <Box as={IconColorMode} fontSize={{mobile: 18, desktop: 24}}/>
    </ButtonComponent>
  )
}

export default ColorModeTogglerHeader