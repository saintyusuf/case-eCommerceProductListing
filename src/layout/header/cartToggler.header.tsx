import { Box, Text } from "@chakra-ui/react"
import ButtonComponent from "../../components/button.component"
import CartComponent from "../../components/cart.component"
import { IoCartOutline as IconCart } from "react-icons/io5"
import { useEffect, useState } from "react"
import useMobile from "../../hooks/useMobile.hook"
import useUser from "../../hooks/useUser.hook"
import useApp from "../../hooks/useApp.hook"

const CartTogglerHeader = () => {

  const {isMobile} = useMobile()

  const { getCartItems } = useUser()
  const { toggleCart } = useApp()
  const [cartItemsLength, setCartItemsLength] = useState<number>(getCartItems().length)

  useEffect(()=>{
    setCartItemsLength(getCartItems().length)
  },[getCartItems().length])
  
  return (
    <Box pos="relative" ml={{mobile: "5px", desktop: "5px"}}>
      <ButtonComponent id="cartButton" colorMode="transparent" w={{mobile: "30px", desktop: "40px"}} h={{mobile: "30px", desktop: "40px"}} onClick={()=>toggleCart()}>
        <Box as={IconCart} fontSize={{mobile: 22, desktop: 26}} pointerEvents="none"/>
        {
          cartItemsLength > 0 && (
            <Box pointerEvents="none" pos="absolute" top="-5px" right="-5px" zIndex="10" bg="red" borderRadius="100%" w={{mobile: "15px", desktop: "20px"}} h={{mobile: "15px", desktop: "20px"}} display="flex" justifyContent="center" alignItems="center">
              <Text fontSize={{mobile: "8px", desktop: "12px"}} color="white" lineHeight={1}>{cartItemsLength}</Text>
            </Box>
          )
        }
      </ButtonComponent>
    </Box>
  )
}

export default CartTogglerHeader