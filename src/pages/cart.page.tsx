import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CartFullDataType } from "../types/cart.type"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useNavigate } from "react-router-dom"
import { CartRows } from "../components/cart.component"
import ButtonComponent from "../components/button.component"

const CartPage = () => {

  const navigate = useNavigate()

  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [cartItemsFullData, setCartItemsFullData] = useState<CartFullDataType[]>([])
  const [cartTotalPrice, setCartTotalPrice] = useState<string>("")

  useEffect(()=>{
    user.getCartItemsFullData().then((data) => setCartItemsFullData(data))
    user.getCartTotalPrice().then((data) => setCartTotalPrice(data))
  },[userStates.cart])
  
  return (
    <Box display="flex" h="100%" >
      <Box display="flex" flexDir="column" w="75%" p="10px">
        <CartRows cartItemsFullData={cartItemsFullData} rowProps={{h: "100px"}}/>
      </Box>
      <Box pos="sticky" top="110px" w="25%" h="50%" border="1px solid var(--borderColor)" borderRadius="10px" p="10px">
        <Box display="flex">
          <Text fontSize="20px" mr="auto" mb="10px">Total:</Text>
          <Text fontSize="20px" fontWeight="600">${cartTotalPrice}</Text>
        </Box>
        <ButtonComponent onClick={()=>navigate("/checkout")} w="100%">Checkout</ButtonComponent>
      </Box>
    </Box>
  )
}

export default CartPage