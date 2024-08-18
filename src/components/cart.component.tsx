import { useEffect, useReducer, useRef, useState } from "react"
import { Box, BoxProps, Img, Text } from "@chakra-ui/react"
import ButtonComponent from "./button.component"
import { CartFullDataType } from "../types/cart.type"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import NumberInputComponent from "./numberInput.component"

type Props = BoxProps & {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const CartComponent = (props: Props) => {

  const refCart = useRef<HTMLDivElement>(null)

  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [cartItemsFullData, setCartItemsFullData] = useState<CartFullDataType[]>([])
  
  useEffect(()=>{
    user.getCartItemsFullData().then((data) => setCartItemsFullData(data))
  },[userStates.cart])

  useEffect(() => {
    // close cart component on click outside
    const handleClickOutside = (e: any) => {
      if (!refCart.current?.contains(e.target) && e.target.id !== "cartButton"){
        props.setIsVisible(false)
      }
    }

    // close cart component on press escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape"){
        props.setIsVisible(false)
      }
    }
    
    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  if (props.isVisible){
    return (
      <Box ref={refCart} pos="absolute" overflow="hidden" right="0" top="50px" bg="var(--bgColor)" w="400px" h="400px" border="1px solid var(--borderColor)" borderRadius="10px" {...props}>
        <Box w="100%" h="80%" overflow="scroll" display="flex" flexDir="column" p="5px">
          {
            cartItemsFullData.length > 0 ? (
              cartItemsFullData.map((item, i) => (
                <CartItem key={i} product={item}/>
              ))
            ) : (
              <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
                <Text fontSize="14px" textAlign="center">Cart is Empty</Text>
              </Box>
            )
          }
        </Box>
        <Box w="100%" h="20%" display="flex" flexDir="column" p="5px" borderTop="1px solid var(--borderColor)">
          <Box display="flex">
            <Text fontSize="14px">Total:</Text>
            <Text fontSize="14px" fontWeight="600" ml="auto">${cartItemsFullData.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</Text>
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

  const user = new User()
  
  return (
    <Box display="flex" flexDir="row" alignItems="center" w="100%" h="50px" p="5px" borderBottom="1px solid var(--borderColor)" sx={{"&:last-child": {borderBottom: 0}}}>
      <Img src={props.product.image} w="10%" h="100%" objectFit="contain" mr="2.5%"/>
      <Text w="45%" noOfLines={1} fontSize="12px" mr="2.5%">{props.product.title}</Text>
      <NumberInputComponent
        w="20%"
        mr="2.5%"
        value={props.product.quantity}
        onRemoveClick={() => user.removeFromCart(props.product.id)}
        onDecreaseClick={() => user.decreaseQuantity(props.product.id)}
        onIncreaseClick={() => user.increaseQuantity(props.product.id)}
      />
      <Text w="20%" noOfLines={1} fontSize="12px" fontWeight="600" textAlign="right">${props.product.price}</Text>
    </Box>
  )
}