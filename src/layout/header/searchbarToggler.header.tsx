import { Box } from "@chakra-ui/react"
import ButtonComponent from "../../components/button.component"
import useMobile from "../../hooks/useMobile.hook"
import { IoMdSearch as IconSearch } from "react-icons/io"
import useApp from "../../hooks/useApp.hook"

const SearchbarTogglerHeader = () => {

  const {isMobile} = useMobile()

  const app = useApp()
  
  if(isMobile){

    return (
      <ButtonComponent colorMode="transparent" w={{mobile: "30px", desktop: "40px"}} h={{mobile: "30px", desktop: "40px"}} onClick={()=>app.toggleSearchbar()}>
        <Box as={IconSearch} fontSize="20px" />
      </ButtonComponent>      
    )
  } else {
    return null
  }
}

export default SearchbarTogglerHeader