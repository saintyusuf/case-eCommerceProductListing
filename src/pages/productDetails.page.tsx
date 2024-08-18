import { Box, Img, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductType from "../types/product.type"
import ButtonComponent from "../components/button.component"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const ProductDetailsPage = () => {

  const { id } = useParams<{id:string}>()
  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [product, setProduct] = useState<ProductType>()
  const [isExistInCart, setIsExistInCart] = useState<boolean>(false)

  function getProduct(){
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res:any)=>{
      setProduct(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getProduct()
  },[])

  useEffect(()=>{
    setIsExistInCart(user.isExistInCart(Number(id)))
  },[userStates.cart])

  console.log(product)

  return (
    <Box display="flex">
      <Box w="50%" aspectRatio="1/1" p="25px" bg="#fff">
        <Img src={product?.image} w="100%" h="100%" objectFit="contain"/>
      </Box>
      <Box w="50%" p="25px">
        <Text fontSize="30px" fontWeight="600" mb="20px">{product?.title}</Text>
        <Text fontSize="20px" fontWeight="500" mb="20px">Rating: {product?.rating.rate}</Text>
        {
          isExistInCart ? (
            <ButtonComponent children="Remove from Cart" fontSize="20px" p="20px" mb="20px" onClick={()=>user.removeFromCart(Number(id))}/>
          ) : (
            <ButtonComponent children="Add to Cart" fontSize="20px" p="20px" mb="20px" onClick={()=>user.addToCart(Number(id))}/>
          )
        }
        <Text fontSize="36px" fontWeight="600" mb="20px">${product?.price}</Text>
        <Text fontSize="16px" fontWeight="400" mb="20px">{product?.description}</Text>
      </Box>
    </Box>
  )
}

export default ProductDetailsPage