import { Box, Text } from "@chakra-ui/react"
import ProductType from "../types/product.type"
import { useState } from "react"
import ButtonComponent from "./button.component"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import useUser from "../hooks/useUser.hook"

interface Props {
  product: ProductType
}

const ProductComponent = (props:Props) => {

  const { isExistInCart, removeFromCart, addToCart } = useUser()
  const [isFooterButtonsVisible, setFooterButtonVisible] = useState<boolean>(false)
  
  return (
    <Box key={props.product.id} w={{mobile: "50%", desktop: "25%"}} p="5px">
      <Box w="100%" h="100%" border="1px solid var(--borderColor)" borderRadius="10px" overflow="hidden" onMouseEnter={()=>setFooterButtonVisible(true)} onMouseLeave={()=>setFooterButtonVisible(false)}>
        <Box as={Link} to={`/product/${props.product.id}`} display="block" w="100%" h="200px" p="15px" overflow="hidden">
          <Box w="100%" h="100%" sx={{
            "& span": {
              w: "100%",
              h: "100%",
            }
          }}>
            <Box as={LazyLoadImage} src={props.product.images[0]} effect="blur" w="100%" h="100%" objectFit="contain"/>
          </Box>
        </Box>
        <Box pos="relative" h="90px">
          {
            isFooterButtonsVisible ? (
              <Box h="100%" display="flex" justifyContent="center" alignItems="center" pos="absolute" top="0" left="0" w="100%">
                {
                  isExistInCart(props.product.id) ? (
                    <ButtonComponent px={{mobile: "5px", desktop: "10px"}} h={{mobile: "30px", desktop: "40px"}} fontSize={{mobile: "11px", desktop: "13px"}}  onClick={()=>removeFromCart(props.product.id)}>Remove from Cart</ButtonComponent>
                  ) : (
                    <ButtonComponent px={{mobile: "5px", desktop: "10px"}} h={{mobile: "30px", desktop: "40px"}} fontSize={{mobile: "11px", desktop: "13px"}}  onClick={()=>addToCart(props.product.id)}>Add to Cart</ButtonComponent>
                  )
                }
              </Box>
            ) : (
              <Box h="100%" display="flex" flexDir="column" px="5px" pb="5px">
                <Text fontSize={{mobile: "12px", desktop: "14px"}} mb="auto" noOfLines={3}>{props.product.title}</Text>
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