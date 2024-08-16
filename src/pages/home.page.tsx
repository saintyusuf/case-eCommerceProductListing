import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"


const HomePage = () => {
  
  return (
    <Box>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box>
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </Box>
    </Box>
  )
}

export default HomePage