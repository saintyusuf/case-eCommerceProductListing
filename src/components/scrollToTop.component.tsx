import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaAnglesUp as IconUp } from "react-icons/fa6"
import ButtonComponent from "./button.component"

const ScrollToTopComponent = () => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    
    addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
    
  },[])
  
  if(isVisible){
    return (
      <ButtonComponent pos="fixed" bottom={{mobile: "10px", desktop: "20px"}} right={{mobile: "10px", desktop: "20px"}} w={{mobile: "40px", desktop: "50px"}} h={{mobile: "40px", desktop: "50px"}} bg="var(--bgColor)" border="1px solid var(--borderColor)" borderRadius="100%" display="flex" justifyContent="center" alignItems="center" cursor="pointer" onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>
        <Box as={IconUp} fontSize={{mobile: "20px", desktop: "30px"}}/>
      </ButtonComponent>
    )
  } else {
    return null
  }
}

export default ScrollToTopComponent