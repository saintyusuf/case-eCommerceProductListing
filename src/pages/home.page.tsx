import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"
import ProductsComponent from "../components/products.component"

const HomePage = () => {


  
  return (
    <Box>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box>
        <ProductsComponent/>
      </Box>
    </Box>
  )
}

export default HomePage