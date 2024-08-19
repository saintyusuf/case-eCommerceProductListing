import { Box } from "@chakra-ui/react"
import LogoComponent from "./logo.component"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const PageLoadingAnimationComponent = () => {

  const refContainer = useRef(null)
  const refLogo = useRef(null)

  function runAnimation(){

    const tl = gsap.timeline()

    tl.set(refLogo.current, {
      position: "absolute",
      left: "50%",
      bottom: "-50%",
      transform: "translateX(-50%)"
    })

    tl.to(refLogo.current, {
      duration: 1,
      ease: "Expo.easeInOut",
      left: "50%",
      bottom: "50%",
      transform: "translate(-50%, -50%)",
      scale: 2.5
    })

    tl.to(refLogo.current, {
      duration: 1,
      ease: "Expo.easeInOut",
      scale: 1,
      opacity: 0
    })

    tl.to(refContainer.current, {
      duration: 1,
      opacity: 0,
      ease: "Expo.easeInOut",
      delay: -0.5
    })

    tl.set(refContainer.current, {display: "none"})
    tl.set(refLogo.current, {display: "none"})
    
  }

  useEffect(() => {
    runAnimation()
  }, [])
  
  return (
    <Box ref={refContainer} pos="fixed" left="0" top="0" w="100%" h="100%" bg="var(--bgColor)" zIndex={1000}>
      <LogoComponent innerRef={refLogo}/>
    </Box>
  )
}

export default PageLoadingAnimationComponent