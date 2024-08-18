import { Box, BoxProps, Text } from "@chakra-ui/react"
import ButtonComponent from "./button.component"
import { RiDeleteBin5Line as IconTrash } from "react-icons/ri"
import { HiPlus as IconPlus, HiMinus as IconMinus } from "react-icons/hi2"

type Props = {
  value: number
  onRemoveClick: () => void
  onDecreaseClick: () => void
  onIncreaseClick: () => void
} & BoxProps

const NumberInputComponent = (props:Props) => {

  const { value, onRemoveClick, onDecreaseClick, onIncreaseClick, ...propsRest } = props
  
  return (
    <Box aspectRatio="3/1" display="flex" alignItems="center" p="2px" border="1px solid var(--borderColor)" borderRadius="5px" {...propsRest}>
      <ButtonComponent w="30%" h="auto" aspectRatio="1/1" fontSize="14px" borderRadius="5px" p="0" onClick={props.value === 1 ? props.onRemoveClick : props.onDecreaseClick}>
        {props.value === 1 ? <IconTrash size="12"/> : <IconMinus size="12"/>}
      </ButtonComponent>
      <Text w="40%" noOfLines={1} fontSize="12px" textAlign="center">{props.value}</Text>
      <ButtonComponent w="30%" h="auto" aspectRatio="1/1" fontSize="14px" borderRadius="5px" p="0" onClick={props.onIncreaseClick}>
        <IconPlus size="12"/>
      </ButtonComponent>
    </Box>
  )
}

export default NumberInputComponent