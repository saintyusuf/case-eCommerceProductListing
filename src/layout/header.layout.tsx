import { Box, Input, Text, useColorMode, useMediaQuery } from "@chakra-ui/react"
import { IoCartOutline as IconCart } from "react-icons/io5"
import { VscColorMode as IconColorMode } from "react-icons/vsc"
import { IoMdSearch as IconSearch } from "react-icons/io"
import ButtonComponent from "../components/button.component"
import LogoComponent from "../components/logo.component"
import CartComponent from "../components/cart.component"
import { useEffect, useState } from "react"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useSearchParams } from "react-router-dom"
import { MdClose as IconClose } from "react-icons/md"

const HeaderLayout = () => {

  const appStates = useSelector((state:RootState)=>state.app)

  const [isMobile] = useMediaQuery("(max-width: 900px)")
  const [isSearchVisible, setIsSearchVisible] = useState(isMobile ? false : true)

  useEffect(()=>{
    setIsSearchVisible(isMobile ? false : true)
  },[isMobile, appStates])

  const {colorMode, toggleColorMode} = useColorMode()
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState<string>(searchParams.get("search") || "")
  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [cartItemsLength, setCartItemsLength] = useState<number>(user.getCartItems().length)
  const [isCartVisible, setIsCartVisible] = useState(false)

  useEffect(()=>{
    setCartItemsLength(user.getCartItems().length)
  },[userStates.cart])

  function updateSearch(){
    if(search === "") return setSearchParams(searchParams)
    searchParams.set("search", search)
    setSearchParams(searchParams)
  }

  useEffect(()=>{
    setSearch(searchParams.get("search") || "")
  },[searchParams])

  useEffect(()=>{
    setIsSearchVisible(isMobile ? false : true)
  },[isMobile])

  return (
    <Box position="fixed" left="0" top="0" zIndex={100} bg="var(--bgColor)" w="100%" h={{mobile: "60px", desktop: "100px"}} borderBottom="1px" borderColor="var(--borderColor)" p={{mobile: "5px", desktop: "10px"}}>
      <Box display="flex" flexDir="row" w="100%" h="100%" maxW="1440px" margin="auto">
        
        <Box display="flex" justifyItems="center" alignItems="center" w={{mobile: "fit-content", desktop: "25%"}}>
          <LogoComponent/>
        </Box>

        <Box pos={{mobile: "absolute", desktop: "relative"}} left={{mobile: "0", desktop: "initial"}} top={{mobile: "0", desktop: "initial"}} w={{mobile: "100%", desktop: "50%"}} h={{mobile: "100vh", desktop: "100%"}} bg={{mobile: "var(--bgColor)", desktop: "initial"}} borderBottom={{mobile: "1px solid var(--borderColor)", desktop: "initial"}} display={{mobile: isSearchVisible ? "flex" : "none", desktop: "flex"}} flexDir="column" justifyContent="start" alignItems="center" p={{mobile: "15px", desktop: "10px"}} zIndex={100}>
          {
            isMobile && (
              <ButtonComponent display="flex" justifyContent="center" alignItems="center" bg="transparent" w="30px" h="30px" mb="20px" mr="auto" pl="0" onClick={()=>setIsSearchVisible(!isSearchVisible)}>
                <Box as={IconClose} fontSize="20px"/>
              </ButtonComponent>
            )
          }

          <Box w="100%" h={{mobile: "35px", desktop: "55px"}} border="1px" borderColor="var(--borderColor)" borderRadius="25px" display="flex" flexDir="row" p={{mobile: "2.5px", desktop: "5px"}}>
            <Input placeholder="Search Product" fontSize={{mobile: "12px", desktop: "16px"}} w="80%" h="100%" px={{mobile: "8px", desktop: "20px"}} border="0" focusBorderColor="transparent" value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>e.key === "Enter" && updateSearch()} />
            <ButtonComponent fontSize={{mobile: "12px", desktop: "16px"}} fontWeight={{mobile: 400, desktop: 600}} w="20%" h="100%" bg="transparent" borderRadius="25px" onClick={()=>{
              updateSearch()
              isMobile && setIsSearchVisible(!isSearchVisible)
            }} isDisabled={!search}>Search</ButtonComponent>
          </Box>
        </Box>

        <Box w={{mobile: "fit-content", desktop: "25%"}} h="100%" display="flex" flexDir="row" justifyContent="end" alignItems="center" p={{mobile: "2.5px", desktop: "10px"}} ml={{mobile: "auto", desktop: "initial"}}>
          {
            isMobile && (
              <ButtonComponent ml={{mobile: "5px", desktop: "5px"}} bg="transparent" w={{mobile: "30px", desktop: "40px"}} h="auto" aspectRatio="1/1" onClick={()=>setIsSearchVisible(!isSearchVisible)}>
                <Box as={IconSearch} fontSize={{mobile: 22, desktop: 24}}/>
              </ButtonComponent>
            )
          }

          <Box pos="relative" ml={{mobile: "5px", desktop: "5px"}}>
            <ButtonComponent id="cartButton" bg="transparent" w={{mobile: "30px", desktop: "40px"}} h="auto" aspectRatio="1/1" onClick={()=>setIsCartVisible(!isCartVisible)}>
              <Box as={IconCart} fontSize={{mobile: 22, desktop: 26}} pointerEvents="none"/>
              {
                cartItemsLength > 0 && (
                  <Box pointerEvents="none" pos="absolute" top="-5px" right="-5px" zIndex="10" bg="red" borderRadius="100%" w={{mobile: "15px", desktop: "20px"}} h={{mobile: "15px", desktop: "20px"}} display="flex" justifyContent="center" alignItems="center">
                    <Text fontSize={{mobile: "8px", desktop: "12px"}} color="white" lineHeight={1}>{cartItemsLength}</Text>
                  </Box>
                )
              }
            </ButtonComponent>

            <CartComponent isVisible={isCartVisible} setIsVisible={(val:boolean)=>setIsCartVisible(val)}
              pos={{mobile: "fixed", desktop: "absolute"}} 
              right={{mobile: "0", desktop: "0"}}
              top={{mobile: "0", desktop: "50px"}}
              border={{mobile: "initial", desktop: "1px solid var(--borderColor)"}}
              borderRadius={{mobile: 0, desktop: "10px"}}
              w={{mobile: "100%", desktop: "400px"}}
              h={{mobile: "100%", desktop: "400px"}}
              zIndex={100}
            />
          </Box>

          <ButtonComponent ml={{mobile: "5px", desktop: "5px"}} bg="transparent" w={{mobile: "30px", desktop: "40px"}} h="auto" aspectRatio="1/1" onClick={()=>toggleColorMode()}>
            <Box as={IconColorMode} fontSize={{mobile: 18, desktop: 24}}/>
          </ButtonComponent>
        </Box>

      </Box>
    </Box>
  )
}

export default HeaderLayout