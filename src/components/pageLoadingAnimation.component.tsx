import { Box } from "@chakra-ui/react"
import LogoComponent from "./logo.component"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const PageLoadingAnimationComponent = () => {

  gsap.registerPlugin(useGSAP)

  const tl = gsap.timeline()
  const refContainer = useRef(null)
  const refLogo = useRef(null)

  useGSAP(()=>{

    tl.to(refLogo.current, {
      duration: 1,
      ease: "Expo.easeInOut",
      left: "50%",
      bottom: "50%",
      transform: "translate(-50%, -50%)",
      scale: 1.5
    })

    tl.to(refLogo.current, {
      duration: 1.25,
      ease: "Expo.easeInOut",
      scale: 1,
      opacity: 0,
      delay: 0.25
    })

    tl.to(refContainer.current, {
      duration: 1.25,
      opacity: 0,
      ease: "Expo.easeInOut",
      delay: -0.25
    })

    tl.set(refContainer.current, {display: "none"})
    tl.set(refLogo.current, {display: "none"})
    
  }, [refContainer, refLogo])
  
  return (
    <Box ref={refContainer} pos="fixed" left="0" top="0" w="100%" h="100%" bg="var(--bgColor)" zIndex={1000}>
      <LogoComponent innerRef={refLogo} pos="absolute" left="50%" bottom="-50%" sx={{transform: "translateX(-50%)"}} />
    </Box>
  )
}

export default PageLoadingAnimationComponent