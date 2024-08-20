import React from "react"
import { Box, useMediaQuery } from "@chakra-ui/react"
import HeaderLayout from "./header.layout"
import FooterLayout from "./footer.layout"
import SidebarLayout from "./sidebar.layout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TopbarLayout from "./topbar.layout"
import ScrollToTopComponent from "../components/scrollToTop.component"
import PageLoadingAnimationComponent from "../components/pageLoadingAnimation.component"

interface Props {
  children: React.ReactNode
  isSidebarVisible?: boolean
  isTopbarVisible?: boolean
}

const Layout = (props: Props) => {

  const [isMobile] = useMediaQuery("(max-width: 899px)")
  
  return (
    <Box display="flex" flexDir="column" w="100%" h="100%">
      {/* <PageLoadingAnimationComponent/> */}
      <HeaderLayout/>
      <Box display="flex" flexDir="row" minH="calc(100vh - 317px - 100px)" mt={{mobile: "60px", desktop: "100px"}} mx="auto" w="100%" maxW="1440px">
        {props.isSidebarVisible && <SidebarLayout/>}
        <Box w={(props.isSidebarVisible && !isMobile) ? "75%" : "100%"} p="10px" mx={props.isSidebarVisible ? "0" : "auto"}>
          {props.isTopbarVisible && <TopbarLayout/>}
          {props.children}
        </Box>
      </Box>
      <FooterLayout/>
      <ScrollToTopComponent/>
      <ToastContainer pauseOnHover={false}/>
    </Box>
  )
}

export default Layout