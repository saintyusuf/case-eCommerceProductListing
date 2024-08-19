import { Box } from "@chakra-ui/react"

const SidebarLayout = () => {
  return (
    <Box pos="sticky" top="100px" w="25%" h="100%" p="15px 0px 15px 10px" bg="var(--bgColor)">
      <Box w="100%" h="100vh" maxH="calc(100vh - 130px)" borderRadius="10px" border="1px solid var(--borderColor)">

      </Box>
    </Box>
  )
}

export default SidebarLayout