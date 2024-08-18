import { useEffect, useRef, useState } from "react"
import { Box, BoxProps, Img, Text } from "@chakra-ui/react"
import ProductType from "../types/product.type"
import axios from "axios"
import ButtonComponent from "./button.component"

type Props = BoxProps & {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const CartComponent = (props: Props) => {

  const refCart = useRef<HTMLDivElement>(null)
  const [cartItemIds, setCartItemIds] = useState<ProductType["id"][]>([1,2,3])
  const [cartItems, setCartItems] = useState<ProductType[]>([
    {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
  ])

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

  console.log(cartItems)

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
  product: ProductType
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