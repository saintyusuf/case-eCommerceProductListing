import { Box, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProductType from "../types/product.type"
import ButtonComponent from "../components/button.component"
import LoadingComponent from "../components/loading.component"
import { toast } from "react-toastify"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Helmet } from "react-helmet-async"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import useUser from "../hooks/useUser.hook"

const ProductDetailsPage = () => {

  const navigate = useNavigate()

  const { id } = useParams<{id:string}>() 
  const { isExistInCart, removeFromCart, addToCart } = useUser()
  const [product, setProduct] = useState<ProductType>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function getProduct(){
    setIsLoading(true)
    axios.get(`https://dummyjson.com/products/${id}?select=id,title,price,images,stock,description`).then((res:any)=>{
      setProduct(res.data)           
    }).catch((err)=>{
      toast("Product not found")
      navigate("/")
      console.log(err)
    }).finally(()=>{
      setIsLoading(false)
    })
  }

  useEffect(()=>{
    getProduct()
  },[id])

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
                        <Box w="100%" h="100%" sx={{
                          "& span": {
                            w: "100%",
                            h: "100%",
                          }
                        }}>
                          <Box as={LazyLoadImage} src={image} effect="blur" w="100%" h="100%" objectFit="contain"/>
                        </Box>
                      </SwiperSlide>
                    ))
                  }
                </Box>
              </Box>
              <Box w={{mobile: "100%", desktop: "50%"}} p={{mobile: "10px", desktop: "25px"}}>
                <Text fontSize={{mobile: "20px", desktop: "30px"}} fontWeight="600" mb={{mobile: "10px", desktop: "20px"}}>{product?.title}</Text>
                {
                  isExistInCart(Number(id)) ? (
                    <ButtonComponent children="Remove from Cart" fontSize={{mobile: "14px", desktop: "20px"}} p={{mobile: "10px", desktop: "20px"}} mb={{mobile: "10px", desktop: "20px"}} onClick={()=>removeFromCart(Number(id))}/>
                  ) : (
                    <ButtonComponent children="Add to Cart" fontSize={{mobile: "14px", desktop: "20px"}} p={{mobile: "10px", desktop: "20px"}} mb={{mobile: "10px", desktop: "20px"}} onClick={()=>addToCart(Number(id))}/>
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