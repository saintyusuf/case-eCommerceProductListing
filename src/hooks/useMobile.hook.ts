import { useMediaQuery } from "@chakra-ui/react"

const useMobile = () => {

  const [isMobile] = useMediaQuery("(max-width: 899px)")
  
  return {isMobile}
}

export default useMobile