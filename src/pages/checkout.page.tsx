import { Box, Text } from "@chakra-ui/react"
import Lottie from "react-lottie"
import AnimationSuccess from "../assets/animations/success.json"
import { Helmet } from "react-helmet-async"
import useUser from "../hooks/useUser.hook"
import useMobile from "../hooks/useMobile.hook"
import { useEffect } from "react"

const CheckoutPage = () => {

  const { isMobile} = useMobile()

  const { clearCart } = useUser()
  
  useEffect(()=>{
    clearCart()
  },[])

  const animationOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimationSuccess,
  }
  
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <Box w="100%" h="100%" display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Text fontSize={{mobile: "30px", desktop: "40px"}} fontWeight="600" mb="20px">Checkout Successful!</Text>
        <Lottie
          options={animationOptions}
          height={isMobile ? 150 : 300}
          width={isMobile ? 150 : 300}
          isClickToPauseDisabled
        />
      </Box>
    </>
  )
}

export default CheckoutPage