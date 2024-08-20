import { Box } from "@chakra-ui/react"
import LogoComponent from "../components/logo.component"
import ColorModeTogglerHeader from "./header/colorModeToggler.header"
import CartTogglerHeader from "./header/cartToggler.header"
import SearchbarTogglerHeader from "./header/searchbarToggler.header"
import SearchbarHeader from "./header/searchbar.header"
import CartHeader from "./header/cart.header"

const HeaderLayout = () => {
  return (
    <Box position="fixed" left="0" top="0" zIndex={100} bg="var(--bgColor)" w="100%" h={{mobile: "60px", desktop: "100px"}} borderBottom="1px" borderColor="var(--borderColor)" p={{mobile: "5px", desktop: "10px"}}>
      <Box display="flex" flexDir="row" w="100%" h="100%" maxW="1440px" margin="auto">
        
        <Box display="flex" justifyItems="center" alignItems="center" w={{mobile: "fit-content", desktop: "25%"}}>
          <LogoComponent/>
        </Box>

        <Box w="50%">
          <SearchbarHeader/>
        </Box>

        <Box w={{mobile: "fit-content", desktop: "25%"}} h="100%" display="flex" flexDir="row" justifyContent="end" alignItems="center" p={{mobile: "2.5px", desktop: "10px"}} ml={{mobile: "auto", desktop: "initial"}}>
          <Box ml={{mobile: "5px", desktop: "5px"}}>
            <SearchbarTogglerHeader/>
          </Box>

          <Box pos="relative" ml={{mobile: "5px", desktop: "5px"}}>
            <CartTogglerHeader/>
            <CartHeader/>
          </Box>

          <Box ml={{mobile: "5px", desktop: "5px"}}>
            <ColorModeTogglerHeader/>
          </Box>
          
        </Box>

      </Box>
    </Box>
  )
}

export default HeaderLayout