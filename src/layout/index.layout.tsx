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
      <Box display="flex" flexDir="row" minH="calc(100vh - 317px - 100px)" m="100px auto 0 auto" w="100%" maxW="1440px">
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