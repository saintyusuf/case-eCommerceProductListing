import { useEffect, useRef, useState } from "react"
import { Box, BoxProps, Img, Text, useMediaQuery } from "@chakra-ui/react"
import ButtonComponent from "./button.component"
import { CartFullDataType } from "../types/cart.type"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import NumberInputComponent from "./numberInput.component"
import { Link, useNavigate } from "react-router-dom"
import { MdClose as IconClose } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component"

type Props = {
  isVisible: boolean
  setIsVisible?: (isVisible: boolean) => void
} & BoxProps

const CartComponent = (props: Props) => {

  const [isMobile] = useMediaQuery("(max-width: 899px)")

  const refCart = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [cartItemsFullData, setCartItemsFullData] = useState<CartFullDataType[]>([])
  const [cartTotalPrice, setCartTotalPrice] = useState<string>("")
  
  useEffect(()=>{
    user.getCartItemsFullData().then((data) => setCartItemsFullData(data))
    user.getCartTotalPrice().then((data) => setCartTotalPrice(data))
  },[userStates.cart])

  useEffect(() => {
    // close cart component on click outside
    const handleClickOutside = (e: any) => {
      if (!refCart.current?.contains(e.target) && e.target.id !== "cartButton"){
        props.setIsVisible!(false)
      }
    }

    // close cart component on press escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape"){
        props.setIsVisible!(false)
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
      <Box ref={refCart} overflow="hidden" w="100%" h="100%" bg="var(--bgColor)" {...props}>
        {
          isMobile && (
            <Box p="15px" h="50px">
              <ButtonComponent display="flex" justifyContent="center" alignItems="center" bg="transparent" w="30px" h="30px" onClick={()=>{
                props.setIsVisible!(false)
                document.body.classList.remove("no-scroll")
              }}>
                <Box as={IconClose} fontSize="20px"/>
              </ButtonComponent>
            </Box>
          )
        }
        <CartRows h={{mobile: "calc(100% - (80px + 50px))", desktop: "calc(100% - 80px)"}} cartItemsFullData={cartItemsFullData}/>
        <Box w="100%" h="80px" display="flex" flexDir="column" p="5px" borderTop="1px solid var(--borderColor)">
          <Box display="flex">
            <Text fontSize="14px">Total:</Text>
            <Text fontSize="14px" fontWeight="600" ml="auto">${cartTotalPrice}</Text>
          </Box>
          <ButtonComponent mt="auto" w="100%" h="40px" onClick={()=>{
            navigate("/cart")
            props.setIsVisible!(false)
            document.body.classList.remove("no-scroll")
          }}>Go to Cart</ButtonComponent>
        </Box>
      </Box>
    )
  } else {
    return null
  }
}

export default CartComponent

type CartRowsProps = {
  cartItemsFullData: CartFullDataType[]
  rowProps?: BoxProps
} & BoxProps

export const CartRows = (props:CartRowsProps) => {

  const { cartItemsFullData, rowProps, ...restProps } = props
  
  return (
    <Box w="100%" h="100%" overflow="scroll" display="flex" flexDir="column" p="5px" {...restProps}>
      {
        cartItemsFullData.length > 0 ? (
          cartItemsFullData.map((item, i) => (
            <CartItem key={i} product={item} {...rowProps}/>
          ))
        ) : (
          <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="14px" textAlign="center">Cart is Empty</Text>
          </Box>
        )
      }
    </Box>
  )
}

type CartItemProps = {
  product: CartFullDataType
} & BoxProps

const CartItem = (props:CartItemProps) => {

  const { product, ...restProps } = props
  const user = new User()
  
  return (
    <Box display="flex" flexDir="row" alignItems="center" w="100%" h="50px" p="5px" borderBottom="1px solid var(--borderColor)" sx={{"&:last-child": {borderBottom: 0}}} {...restProps}>
      <Box as={Link} to={`/product/${product.id}`} display="block" w="9%" mr="1%" h="100%">
        <Box as={LazyLoadImage} src={product.images[0]} effect="blur" w="100%" h="100%" objectFit="contain"/>
      </Box>
      <Box as={Link} to={`/product/${product.id}`} display="block" w="39%" mr="1%">
        <Text w="100%" noOfLines={1} fontSize="12px" textAlign="left">{product.title}</Text>
      </Box>
      <NumberInputComponent
        w="19%"
        mr="1%"
        value={product.quantity}
        onRemoveClick={() => user.removeFromCart(product.id)}
        onDecreaseClick={() => user.decreaseQuantity(product.id)}
        onIncreaseClick={() => user.increaseQuantity(product.id)}
      />
      <Text w="14%" mr="1%" noOfLines={1} fontSize="12px" fontWeight="400" textAlign="center">${product.price}</Text>
      <Text w="14%" mr="1%" noOfLines={1} fontSize="12px" fontWeight="600" textAlign="center">${product.totalPrice}</Text>
    </Box>
  )
}