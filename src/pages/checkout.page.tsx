import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import Lottie from "react-lottie"
import AnimationSuccess from "../assets/animations/success.json"
import { Helmet } from "react-helmet-async"
import User from "../classes/user.class"

const CheckoutPage = () => {

  const [isMobile] = useMediaQuery("(max-width: 899px)")

  const user = new User()
  user.clearCart()

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