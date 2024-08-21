import { Box, Input } from "@chakra-ui/react"
import useMobile from "../../hooks/useMobile.hook"
import ButtonComponent from "../../components/button.component"
import { MdClose as IconClose } from "react-icons/md"
import { useEffect, useState } from "react"
import useApp from "../../hooks/useApp.hook"
import useSearchParams from "../../hooks/useSearchParams.hook"
import { useNavigate } from "react-router-dom"

const SearchbarHeader = () => {

  const app = useApp()
  const {getSearchParam, setSearchParam, getAllSearchParams} = useSearchParams()
  const {isMobile} = useMobile()
  const navigate = useNavigate()

  const [search, setSearch] = useState<string>(getSearchParam("search") || "")

  function updateSearch(){
    if(search === ""){
      setSearchParam("search", "")
    } else {
      navigate("/")
      setSearchParam("search", search)
    }
    app.toggleSearchbar()
  }

  useEffect(()=>{
    setSearch(getSearchParam("search") || "")
  },[getAllSearchParams()])
  
  return (
    <Box pos={{mobile: "absolute", desktop: "relative"}} left={{mobile: "0", desktop: "initial"}} top={{mobile: "0", desktop: "initial"}} w="100%" h={{mobile: "100vh", desktop: "100%"}} bg="var(--bgColor)" borderBottom={{mobile: "1px solid var(--borderColor)", desktop: "initial"}} display={{mobile: app.getSearchbarVisibility() ? "flex" : "none", desktop: "flex"}} flexDir="column" justifyContent="start" alignItems="center" p={{mobile: "15px", desktop: "10px"}} zIndex={100}>
      {
        isMobile && (
          <Box h="50px" mr="auto">
            <ButtonComponent display="flex" justifyContent="center" alignItems="center" colorMode="transparent" w="30px" h="30px" onClick={()=>app.toggleSearchbar()}>
              <Box as={IconClose} fontSize="20px"/>
            </ButtonComponent>
          </Box>
        )
      }

      <Box w="100%" h={{mobile: "35px", desktop: "55px"}} border="1px" borderColor="var(--borderColor)" borderRadius="25px" display="flex" flexDir="row" p={{mobile: "2.5px", desktop: "5px"}}>
        <Input placeholder="Search Product" fontSize={{mobile: "12px", desktop: "16px"}} w="80%" h="100%" px={{mobile: "8px", desktop: "20px"}} border="0" focusBorderColor="transparent" value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>e.key === "Enter" && updateSearch()} />
        <ButtonComponent fontSize={{mobile: "12px", desktop: "16px"}} fontWeight={{mobile: 400, desktop: 600}} w="20%" h="100%" bg="transparent" borderRadius="25px" onClick={()=>updateSearch()}>Search</ButtonComponent>
      </Box>
    </Box>
  )
  
}

export default SearchbarHeader