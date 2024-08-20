import { Button, ButtonProps } from "@chakra-ui/react"

type Props = {
  colorMode?: "transparent"
} & ButtonProps

const ButtonComponent = (props:Props) => {

  const { colorMode, ...rest } = props

  function colorModeFunc(){

    if(props.colorMode === "transparent") {
      return {
        bg: "transparent",
        color: "var(--textColor)",
        _hover: {
          bg: "transparent",
          color: "var(--textColor)"
        },
        _active: {
          bg: "transparent",
          color: "var(--textColor)"
        }
      }
    }
  }
  
  return (
    <Button cursor="pointer" p="5px" minW="auto" minH="auto" sx={{...colorModeFunc()}} {...rest} _active={{transform: "scale(0.95)", ...rest._active}}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent