import { Box } from "@chakra-ui/react"
import ButtonComponent from "../../components/button.component"
import useApp from "../../hooks/useApp.hook"
import useMobile from "../../hooks/useMobile.hook"
import { BsSliders as IconFilter } from "react-icons/bs"

const SidebarTogglerTopbar = () => {

  const {isMobile} = useMobile()
  const {toggleSidebar} = useApp()

  if(isMobile){
    return (
      <ButtonComponent colorMode="transparent" w="30px" h="30px" onClick={()=>toggleSidebar()}>
        <Box as={IconFilter} fontSize={{mobile: 18, desktop: 24}}/>
      </ButtonComponent>
    )
  } else {
    return null
  }
}

export default SidebarTogglerTopbar