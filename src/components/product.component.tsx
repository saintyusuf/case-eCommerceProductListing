import { Box, Img, Text } from "@chakra-ui/react"
import ProductType from "../types/product.type"
import { useState } from "react"
import ButtonComponent from "./button.component"

interface Props {
  product: ProductType
}

const ProductComponent = (props:Props) => {

  const [isAddCartVisible, setIsAddCartVisible] = useState<boolean>(false)
  
  return (
    <Box key={props.product.id} w="25%" p="5px">
      <Box w="100%" h="100%" border="1px solid var(--borderColor)" borderRadius="10px" overflow="hidden" onMouseEnter={()=>setIsAddCartVisible(true)} onMouseLeave={()=>setIsAddCartVisible(false)}>
        <Img src={props.product.image} w="100%" h="200px" p="15px" objectFit="contain" bg="#fff"/>
        <Box pos="relative" h="90px">
          {
            isAddCartVisible ? (
              <Box h="100%" display="flex" justifyContent="center" alignItems="center" pos="absolute" top="0" left="0" w="100%" onClick={()=>setIsAddCartVisible(true)}>
                <ButtonComponent>Add to Cart</ButtonComponent>
              </Box>
            ) : (
              <Box h="100%" display="flex" flexDir="column" px="5px">
                <Text fontSize="14px" mb="auto" noOfLines={3}>{props.product.title}</Text>
                <Text fontWeight="600">${props.product.price}</Text>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default ProductComponent