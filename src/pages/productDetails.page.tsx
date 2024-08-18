import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const ProductDetailsPage = () => {

  const { id } = useParams<{id:string}>()

  
  return (
    <Box>
      Product Details Page. Product ID: {id}
    </Box>
  )
}

export default ProductDetailsPage