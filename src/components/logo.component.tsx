import { Box, BoxProps, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const LogoComponent = (props:BoxProps) => {
  return (
    <Box as={Link} to="/" mx="auto" {...props}>
      <Text fontSize={26} fontWeight={700} textAlign="center" w="100%" display="flex" flexDir="column">
        <span>eCommerce</span>
        <span>ProductListing</span>
      </Text>
    </Box>
  )
}

export default LogoComponent