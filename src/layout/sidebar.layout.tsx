import { Box, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ButtonComponent from "../components/button.component"

const SidebarLayout = () => {

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
    <Box pos="sticky" top="100px" w="25%" h="100%" p="15px 0px 15px 10px" bg="var(--bgColor)">
      <Box w="100%" h="100vh" maxH="calc(100vh - 130px)" borderRadius="10px" border="1px solid var(--borderColor)" p="15px">

        <Box mb="20px">
          <Box display="flex" alignItems="center" mb="10px">
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

        <Box mb="20px">
          <Box display="flex" alignItems="center" mb="10px">
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

        <Box mb="20px">
          <Box display="flex" alignItems="center" mb="10px">
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