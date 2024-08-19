import React from "react"
import { Box } from "@chakra-ui/react"
import HeaderLayout from "./header.layout"
import FooterLayout from "./footer.layout"
import SidebarLayout from "./sidebar.layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TopbarLayout from "./topbar.layout"

interface Props {
  children: React.ReactNode
  isSidebarVisible?: boolean
  isTopbarVisible?: boolean
}

const Layout = (props: Props) => {  
  return (
    <Box display="flex" flexDir="column" w="100%" h="100%">
      <HeaderLayout/>
      <Box display="flex" flexDir="row" minH="calc(100vh - 317px - 100px)" m="100px auto 0 auto" w="100%" maxW="1440px">
        {props.isSidebarVisible && <SidebarLayout/>}
        <Box w={props.isSidebarVisible ? "75%" : "100%"} p="10px" mx={props.isSidebarVisible ? "0" : "auto"}>
          {props.isTopbarVisible && <TopbarLayout/>}
          {props.children}
        </Box>
      </Box>
      <FooterLayout/>
      <ToastContainer pauseOnHover={false}/>
    </Box>
  )
}

export default Layout