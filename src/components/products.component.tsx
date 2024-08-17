import { useEffect, useState } from "react"
import axios from "axios"
import ProductType from "../types/product.type"
import { Box, Img, Text } from "@chakra-ui/react"
import ProductComponent from "./product.component"

const ProductsComponent = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  function getProducts(){
    axios.get("https://fakestoreapi.com/products").then((res:any)=>{
      setProducts(
        res.data.map((resData:any)=>{
          return {
            id: resData.id,
            title: resData.title,
            price: resData.price,
            description: resData.description,
            category: resData.category,
            image: resData.image,
            rating: {
              rate: resData.rating.rate,
              count: resData.rating.count
            }
          }
        })
      )
    })
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <Box display="flex" flexDir="row" flexWrap="wrap">
      {products.map((product:ProductType)=>{
        return (
          <ProductComponent key={product.id} product={product}/>
        )
      })}
    </Box>
  )
}

export default ProductsComponent