import { Box, Img, Text } from "@chakra-ui/react"
import ProductType from "../types/product.type"

interface Props {
  product: ProductType
}

const ProductComponent = (props:Props) => {
  return (
    <Box key={props.product.id} w="25%" p="5px">
      <Box w="100%" h="100%" border="1px solid var(--borderColor)" borderRadius="10px" overflow="hidden">
        <Img src={props.product.image} w="100%" h="200px" p="15px" objectFit="contain" bg="#fff"/>
        <Box display="flex" flexDir="column" h="90px" px="5px">
          <Text fontSize="14px" mb="auto" noOfLines={3}>{props.product.title}</Text>
          <Text fontWeight="600">${props.product.price}</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductComponent