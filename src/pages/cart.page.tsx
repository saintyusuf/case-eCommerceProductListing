import { Box, Checkbox, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CartFullDataType } from "../types/cart.type"
import { useNavigate } from "react-router-dom"
import { CartRows } from "../components/cart.component"
import ButtonComponent from "../components/button.component"
import { Helmet } from "react-helmet-async"
import useUser from "../hooks/useUser.hook"

const CartPage = () => {

  const navigate = useNavigate()

  const { getCartItems, getCartItemsFullData, getCartTotalPrice } = useUser()
  const [cartItemsFullData, setCartItemsFullData] = useState<CartFullDataType[]>([])
  const [cartTotalPrice, setCartTotalPrice] = useState<string>("")
  const [isAgreed, setIsAgreed] = useState<boolean>(false)

  useEffect(()=>{
    getCartItemsFullData().then((data) => setCartItemsFullData(data))
    getCartTotalPrice().then((data) => setCartTotalPrice(data))
  },[getCartItems()])
  
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Box display="flex" flexDir={{mobile: "column", desktop: "row"}} h="100%">
        <Box display="flex" flexDir="column" w={{mobile: "100%", desktop: "75%"}} p={{mobile: "5px", desktop: "10px"}}>
          <CartRows cartItemsFullData={cartItemsFullData} rowProps={{h: "100px"}}/>
        </Box>
        <Box pos="sticky" top="110px" w={{mobile: "100%", desktop: "25%"}} h="fit-content" border="1px solid var(--borderColor)" borderRadius="10px" p="10px">
          <Box display="flex" mb="10px">
            <Text fontSize={{mobile: "16px", desktop: "20px"}} mr="auto">Total:</Text>
            <Text fontSize={{mobile: "16px", desktop: "20px"}} fontWeight="600">${cartTotalPrice}</Text>
          </Box>
          <Box display="flex" mb="10px">
            <Checkbox isChecked={isAgreed} onChange={(e)=>setIsAgreed(e.target.checked)}>
              <Text fontSize={{mobile: "14px", desktop: "16px"}}>I accept all agreements</Text>
            </Checkbox>
          </Box>
          <ButtonComponent onClick={()=>navigate("/checkout")} w="100%" isDisabled={cartItemsFullData.length === 0 || !isAgreed ? true : false}>Checkout</ButtonComponent>
        </Box>
      </Box>
    </>
  )
}

export default CartPage