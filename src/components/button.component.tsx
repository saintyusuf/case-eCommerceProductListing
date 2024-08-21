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
    <Button cursor="pointer" p="5px" minW="auto" minH="auto" {...rest} sx={{...colorModeFunc(), _active:{transform: "scale(0.95)", ...colorModeFunc()?._active, ...rest._active}, ...rest.sx}}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent