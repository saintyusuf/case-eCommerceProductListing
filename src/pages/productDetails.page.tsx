import { Box, Img, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProductType from "../types/product.type"
import ButtonComponent from "../components/button.component"
import User from "../classes/user.class"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import LoadingComponent from "../components/loading.component"
import { toast } from "react-toastify"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Helmet } from "react-helmet-async"

const ProductDetailsPage = () => {

  const navigate = useNavigate()

  const { id } = useParams<{id:string}>() 
  const user = new User()
  const userStates = useSelector((state:RootState)=>state.user)
  const [product, setProduct] = useState<ProductType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isExistInCart, setIsExistInCart] = useState<boolean>(false)

  function getProduct(){
    setIsLoading(true)
    axios.get(`https://dummyjson.com/products/${id}?select=id,title,price,images,stock,description`).then((res:any)=>{
      setProduct(res.data)           
      console.log(res.data)
    }).catch(()=>{
      toast("Product not found")
      navigate("/")
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
    getProduct()
  },[id])

  useEffect(()=>{
    setIsExistInCart(user.isExistInCart(Number(id)))
  },[userStates.cart])

  return (
    <>
      <Helmet>
        <title>{product?.title}</title>
      </Helmet>
      <Box display="flex" flexDir={{mobile: "column", desktop: "row"}} h="100%">
        {
          isLoading && !product ? (
            <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100%">
              <LoadingComponent/>
            </Box>
          ) : (
            <>
              <Box w={{mobile: "100%", desktop: "50%"}} h="fit-content" aspectRatio="1/1" p={{mobile: "10px", desktop: "25px"}}>
                <Box as={Swiper}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  sx={{
                    "&": {
                      h: "100%!important",
                      "& .swiper-pagination": {
                        bottom: "-5px",
                      }
                    }
                  }}
                >
                  {
                    product?.images.map((image:string,index:number)=>(
                      <SwiperSlide key={index}>
                        <Img src={image} w="100%" h="100%" objectFit="contain"/>
                      </SwiperSlide>
                    ))
                  }
                </Box>
              </Box>
              <Box w={{mobile: "100%", desktop: "50%"}} p={{mobile: "10px", desktop: "25px"}}>
                <Text fontSize={{mobile: "20px", desktop: "30px"}} fontWeight="600" mb={{mobile: "10px", desktop: "20px"}}>{product?.title}</Text>
                {
                  isExistInCart ? (
                    <ButtonComponent children="Remove from Cart" fontSize={{mobile: "14px", desktop: "20px"}} p={{mobile: "10px", desktop: "20px"}} mb={{mobile: "10px", desktop: "20px"}} onClick={()=>user.removeFromCart(Number(id))}/>
                  ) : (
                    <ButtonComponent children="Add to Cart" fontSize={{mobile: "14px", desktop: "20px"}} p={{mobile: "10px", desktop: "20px"}} mb={{mobile: "10px", desktop: "20px"}} onClick={()=>user.addToCart(Number(id))}/>
                  )
                }
                <Text fontSize={{mobile: "24px", desktop: "36px"}} fontWeight="600" mb={{mobile: "10px", desktop: "20px"}}>${product?.price}</Text>
                <Text fontSize={{mobile: "12px", desktop: "16px"}} fontWeight="400" mb={{mobile: "10px", desktop: "20px"}}>{product?.description}</Text>
              </Box>
            </>
          )
        }
      </Box>
    </>
  )
}

export default ProductDetailsPage