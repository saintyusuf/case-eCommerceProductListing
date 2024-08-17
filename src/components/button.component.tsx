import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
  style?: ButtonProps["style"]
}

const ButtonComponent = (props:Props) => {
  return (
    <Button style={props.style} _active={{transform: "scale(0.95)"}}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent