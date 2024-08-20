import { Box, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ButtonComponent from "../components/button.component"
import { MdClose as IconClose } from "react-icons/md"
import useApp from "../hooks/useApp.hook"
import useMobile from "../hooks/useMobile.hook"
import useSearchParams from "../hooks/useSearchParams.hook"

const SidebarLayout = () => {

  const {getSidebarVisibility, toggleSidebar} = useApp()
  const {isMobile} = useMobile()
  const {getSearchParam, setSearchParam, getAllSearchParams} = useSearchParams()

  const [minPrice, setMinPrice] = useState<number>(getSearchParam("minPrice") ? Number(getSearchParam("minPrice")) : 0)
  const [maxPrice, setMaxPrice] = useState<number>(getSearchParam("maxPrice") ? Number(getSearchParam("maxPrice")) : 10000)
  const [minStock, setMinStock] = useState<number>(getSearchParam("minStock") ? Number(getSearchParam("minStock")) : 0)

  function updateSearch(){
    setSearchParam("minPrice", String(minPrice))
    setSearchParam("maxPrice", String(maxPrice))
    setSearchParam("minStock", String(minStock))
    toggleSidebar()
  }

  useEffect(()=>{
    setMinPrice(getSearchParam("minPrice") ? Number(getSearchParam("minPrice")) : 0)
    setMaxPrice(getSearchParam("maxPrice") ? Number(getSearchParam("maxPrice")) : 10000)
    setMinStock(getSearchParam("minStock") ? Number(getSearchParam("minStock")) : 0)
  },[getAllSearchParams()])
  
  return (
    <Box display={{mobile: getSidebarVisibility() ? "block" : "none", desktop: "block"}} pos={{mobile: "fixed", desktop: "sticky"}} top={{mobile: "0", desktop: "100px"}} w={{mobile: "100%", desktop: "25%"}} h={{mobile: "100vh", desktop: "100%"}} p={{mobile: "15px", desktop: "15px 0px 15px 10px"}} zIndex={100} bg="var(--bgColor)">
      <Box w="100%" h="100%" maxH={{mobile: "100vh", desktop: "calc(100vh - 130px)"}} borderRadius={{mobile: 0, desktop: "10px"}} border={{mobile: "0", desktop: "1px solid var(--borderColor)"}} p={{mobile: "0px", desktop: "15px"}}>

        {
          isMobile && (
            <Box h="50px" mr="auto">
              <ButtonComponent display="flex" justifyContent="center" alignItems="center" bg="transparent" w="30px" h="30px" onClick={()=>toggleSidebar()}>
                <Box as={IconClose} fontSize="20px"/>
              </ButtonComponent>
            </Box>
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