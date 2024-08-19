import { Box, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ButtonComponent from "../components/button.component"
import App from "../classes/app.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { MdClose as IconClose } from "react-icons/md"

const SidebarLayout = () => {

  const app = new App()
  const appStates = useSelector((state:RootState)=>state.app)

  const [isMobile] = useMediaQuery("(max-width: 900px)")
  const [isSidebarVisible, setIsSidebarVisible] = useState(isMobile ? app.getSidebarVisibility() : true)

  useEffect(()=>{
    setIsSidebarVisible(isMobile ? app.getSidebarVisibility() : true)
  },[isMobile, appStates])

  const [searchParam, setSearchParam] = useSearchParams()

  const [minPrice, setMinPrice] = useState<number>(searchParam.get("minPrice") ? Number(searchParam.get("minPrice")) : 0)
  const [maxPrice, setMaxPrice] = useState<number>(searchParam.get("maxPrice") ? Number(searchParam.get("maxPrice")) : 10000)
  const [minStock, setMinStock] = useState<number>(searchParam.get("minStock") ? Number(searchParam.get("minStock")) : 0)

  function updateSearch(){
    searchParam.set("minPrice", minPrice.toString())
    searchParam.set("maxPrice", maxPrice.toString())
    searchParam.set("minStock", minStock.toString())
    setSearchParam(searchParam)
  }

  useEffect(()=>{
    setMinPrice(searchParam.get("minPrice") ? Number(searchParam.get("minPrice")) : 0)
    setMaxPrice(searchParam.get("maxPrice") ? Number(searchParam.get("maxPrice")) : 10000)
    setMinStock(searchParam.get("minStock") ? Number(searchParam.get("minStock")) : 0)
  },[searchParam])
  
  return (
    <Box display={{mobile: isSidebarVisible ? "block" : "none", desktop: "block"}} pos={{mobile: "fixed", desktop: "sticky"}} top={{mobile: "0", desktop: "100px"}} w={{mobile: "100%", desktop: "25%"}} h={{mobile: "100vh", desktop: "100%"}} p={{mobile: "15px", desktop: "15px 0px 15px 10px"}} zIndex={100} bg="var(--bgColor)">
      <Box w="100%" h="100%" maxH={{mobile: "100vh", desktop: "calc(100vh - 130px)"}} borderRadius={{mobile: 0, desktop: "10px"}} border={{mobile: "0", desktop: "1px solid var(--borderColor)"}} p={{mobile: "0px", desktop: "15px"}}>

        {
          isMobile && (
            <ButtonComponent display="flex" justifyContent="center" alignItems="center" bg="transparent" w="30px" h="30px" mb="20px" pl="0" onClick={()=>app.toggleSidebar()}>
              <Box as={IconClose} fontSize="20px"/>
            </ButtonComponent>
          )
        }

        <Box mb={{mobile: "10px", desktop: "20px"}}>
          <Box display="flex" alignItems="center" mb={{mobile: "5px", desktop: "10px"}}>
            <Text fontSize="12px" w="50%" whiteSpace="nowrap" mr="auto">Min Price:</Text>
            <Text fontSize="12px" w="fit-content" textAlign="right" mr="5px">$</Text>
            <Input type="number" fontSize="12px" w="55px" h="25px" px="5px" textAlign="center" value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))}/>
          </Box>
          <Slider value={minPrice} min={0} max={maxPrice-1} onChange={(val)=>setMinPrice(val)} focusThumbOnChange={false}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box mb={{mobile: "10px", desktop: "20px"}}>
          <Box display="flex" alignItems="center" mb={{mobile: "5px", desktop: "10px"}}>
            <Text fontSize="12px" w="50%" whiteSpace="nowrap" mr="auto">Max Price:</Text>
            <Text fontSize="12px" w="fit-content" textAlign="right" mr="5px">$</Text>
            <Input type="number" fontSize="12px" w="55px" h="25px" px="5px" textAlign="center" value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))}/>
          </Box>
          <Slider value={maxPrice} min={minPrice+1} max={10000} onChange={(val)=>setMaxPrice(val)} focusThumbOnChange={false}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box mb={{mobile: "10px", desktop: "20px"}}>
          <Box display="flex" alignItems="center" mb={{mobile: "5px", desktop: "10px"}}>
            <Text fontSize="12px" w="50%" whiteSpace="nowrap" mr="auto">Min Stock:</Text>
            <Input type="number" fontSize="12px" w="55px" h="25px" px="5px" textAlign="center" value={minStock} min={1} max={10} onChange={(e)=>setMinStock(Number(e.target.value))}/>
          </Box>
          <Slider value={minStock} min={0} max={150} onChange={(val)=>setMinStock(val)} focusThumbOnChange={false}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <ButtonComponent onClick={()=>updateSearch()} children="Update Search" w="100%" h="45px"/>
      </Box>
    </Box>
  )
}

export default SidebarLayout