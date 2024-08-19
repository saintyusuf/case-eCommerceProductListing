import { Box, BoxProps, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

type Props = {
  innerRef?: React.LegacyRef<HTMLDivElement> | undefined
} & BoxProps

const LogoComponent = (props:Props) => {

  const {innerRef, ...restProps} = props
  
  return (
    <Box ref={props.innerRef} as={Link} to="/" mx="auto" {...restProps}>
      <Text fontSize={{mobile: "14px", desktop: "26px"}} fontWeight={700} textAlign="center" w="100%" display="flex" flexDir="column">
        <span>eCommerce</span>
        <span>ProductListing</span>
      </Text>
    </Box>
  )
}

export default LogoComponent