import { Box, Checkbox, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CartFullDataType } from "../types/cart.type"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useNavigate } from "react-router-dom"
import { CartRows } from "../components/cart.component"
import ButtonComponent from "../components/button.component"
import { Helmet } from "react-helmet-async"

const CartPage = () => {

  const navigate = useNavigate()

  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [cartItemsFullData, setCartItemsFullData] = useState<CartFullDataType[]>([])
  const [cartTotalPrice, setCartTotalPrice] = useState<string>("")
  const [isAgreed, setIsAgreed] = useState<boolean>(false)

  useEffect(()=>{
    user.getCartItemsFullData().then((data) => setCartItemsFullData(data))
    user.getCartTotalPrice().then((data) => setCartTotalPrice(data))
  },[userStates.cart])

  console.log(cartItemsFullData.length)
  
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Box display="flex" h="100%">
        <Box display="flex" flexDir="column" w="75%" p="10px">
          <CartRows cartItemsFullData={cartItemsFullData} rowProps={{h: "100px"}}/>
        </Box>
        <Box pos="sticky" top="110px" w="25%" h="50%" border="1px solid var(--borderColor)" borderRadius="10px" p="10px">
          <Box display="flex" mb="10px">
            <Text fontSize="20px" mr="auto">Total:</Text>
            <Text fontSize="20px" fontWeight="600">${cartTotalPrice}</Text>
          </Box>
          <Checkbox mb="10px" isChecked={isAgreed} onChange={(e)=>setIsAgreed(e.target.checked)}>I accept all agreements</Checkbox>
          <ButtonComponent onClick={()=>navigate("/checkout")} w="100%" isDisabled={cartItemsFullData.length === 0 || !isAgreed ? true : false}>Checkout</ButtonComponent>
        </Box>
      </Box>
    </>
  )
}

export default CartPage