import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"
import ProductsComponent from "../components/products.component"

const HomePage = () => {


  
  return (
    <Box h="100%">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box h="100%">
        <ProductsComponent/>
      </Box>
    </Box>
  )
}

export default HomePage