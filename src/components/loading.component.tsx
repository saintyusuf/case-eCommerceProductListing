import { Box, Spinner } from "@chakra-ui/react"

const LoadingComponent = () => {
  return (
    <Box>
      <Spinner size="xl" speed="0.8s"/>
    </Box>
  )
}

export default LoadingComponent