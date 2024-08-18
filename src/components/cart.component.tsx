import { useEffect, useRef, useState } from "react"
import { Box, BoxProps, Img, Text } from "@chakra-ui/react"
import ProductType from "../types/product.type"
import axios from "axios"
import ButtonComponent from "./button.component"
import CartType, { CartFullDataType } from "../types/cart.type"

type Props = BoxProps & {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const CartComponent = (props: Props) => {

  const refCart = useRef<HTMLDivElement>(null)
  const [cartItemIds, setCartItemIds] = useState<CartType[]>([])
  const [cartItems, setCartItems] = useState<CartFullDataType[]>([])

  const getCartItems = () => {
    const localCartItems = [...cartItems]
    setCartItems([])
    cartItemIds.map((itemId) => {
      axios.get(`https://fakestoreapi.com/products/${itemId}`).then((res)=>{
        localCartItems.push(res.data)
        setCartItems(localCartItems)
      })
    })
  }

  // useEffect(() => {
  //   getCartItems()
  // }, [])

  // close cart component on click outside
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!refCart.current?.contains(e.target) && e.target.id !== "cartButton"){
        props.setIsVisible(false)
      }
    }
    
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  // close cart component on press escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape"){
        props.setIsVisible(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  if (props.isVisible){
    return (
      <Box ref={refCart} pos="absolute" overflow="hidden" right="0" top="50px" bg="var(--bgColor)" w="400px" h="400px" border="1px solid var(--borderColor)" borderRadius="10px" {...props}>
        <Box w="100%" h="80%" overflow="scroll" display="flex" flexDir="column" p="5px">
          {
            cartItems.map((item, index) => (
              <CartItem key={index} product={item}/>
            ))
          }
        </Box>
        <Box w="100%" h="20%" display="flex" flexDir="column" p="5px" borderTop="1px solid var(--borderColor)">
          <Box display="flex">
            <Text fontSize="14px">Total:</Text>
            <Text fontSize="14px" fontWeight="600" ml="auto">${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</Text>
          </Box>
          <ButtonComponent mt="auto" w="100%" h="40px">Go to Cart</ButtonComponent>
        </Box>
      </Box>
    )
  } else {
    return null
  }
}

export default CartComponent

interface CartItemProps {
  product: CartFullDataType
}

const CartItem = (props:CartItemProps) => {



  return (
    <Box display="flex" flexDir="row" alignItems="center" w="100%" h="50px" p="5px" borderBottom="1px solid var(--borderColor)" sx={{"&:last-child": {borderBottom: 0}}}>
      <Img src={props.product.image} w="10%" aspectRatio="1/1" objectFit="contain" mr="2.5%"/>
      <Text w="45%" noOfLines={1} fontSize="12px" mr="2.5%">{props.product.title}</Text>
      <Box w="20%" h="70%" display="flex" alignItems="center" mr="2.5%" p="2px" border="1px solid var(--borderColor)" borderRadius="5px">
        <ButtonComponent w="30%" h="100%" fontSize="14px" borderRadius="5px" p="0">-</ButtonComponent>
        <Text w="30px" noOfLines={1} fontSize="14px" textAlign="center">1</Text>
        <ButtonComponent w="30%" h="100%" fontSize="14px" borderRadius="5px" p="0">+</ButtonComponent>
      </Box>
      <Text w="20%" noOfLines={1} fontSize="12px" fontWeight="600" textAlign="right">${props.product.price}</Text>
    </Box>
  )
}