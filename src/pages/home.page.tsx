import { Box } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"
import ProductsComponent from "../components/products.component"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

const HomePage = () => {

  const [searchParam, setSearchParam] = useSearchParams()

  useEffect(()=>{

  },[searchParam])
  
  return (
    <Box h="100%">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Box h="100%">
        <ProductsComponent key={searchParam.toString()}/>
      </Box>
    </Box>
  )
}

export default HomePage