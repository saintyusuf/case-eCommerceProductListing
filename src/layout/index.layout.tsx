import React from "react"
import { Box } from "@chakra-ui/react"
import HeaderLayout from "./header.layout"
import FooterLayout from "./footer.layout"
import SidebarLayout from "./sidebar.layout"

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <Box display="flex" flexDir="column" w="100%" h="100%">
      <HeaderLayout/>
      <Box display="flex" flexDir="row" minH="100vh">
        <SidebarLayout/>
        <Box w="75%" p="10px">
          {props.children}
        </Box>
      </Box>
      <FooterLayout/>
    </Box>
  )
}

export default Layout