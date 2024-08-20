import { Box } from "@chakra-ui/react"
import SidebarTogglerTopbar from "./topbar/sidebarToggler.topbar"
import SortAndOrderSelectorTopbar from "./topbar/sortAndOrderSelector.topbar"

const TopbarLayout = () => {  
  return (
    <Box w="100%" display="flex" flexDir="row" justifyContent="end" mb="5px" px="5px">
      <Box mr="auto">
        <SidebarTogglerTopbar/>
      </Box>
      <SortAndOrderSelectorTopbar/>
    </Box>
  )
}

export default TopbarLayout