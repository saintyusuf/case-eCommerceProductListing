import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"
import ProductsComponent from "../components/products.component"
import { useEffect } from "react"
import useSearchParams from "../hooks/useSearchParams.hook"

const HomePage = () => {
  
  const {getAllSearchParams} = useSearchParams()
  
  return (
    <Box h="100%">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box h="100%">
        <ProductsComponent key={getAllSearchParams().toString()}/>
      </Box>
    </Box>
  )
}

export default HomePage