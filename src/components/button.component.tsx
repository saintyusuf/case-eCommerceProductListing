import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"

type Props = ButtonProps

const ButtonComponent = (props:Props) => {
  return (
    <Button _active={{transform: "scale(0.95)"}} {...props}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent