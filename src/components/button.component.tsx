import { Button, ButtonProps } from "@chakra-ui/react"

type Props = ButtonProps

const ButtonComponent = (props:Props) => {
  return (
    <Button _active={{transform: "scale(0.95)"}} cursor="pointer" p="5px" outline="none" minW="auto" {...props}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent