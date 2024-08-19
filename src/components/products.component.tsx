import { useEffect, useState } from "react"
import axios from "axios"
import ProductType from "../types/product.type"
import { Box } from "@chakra-ui/react"
import ProductComponent from "./product.component"
import LoadingComponent from "./loading.component"
import InfiniteScroll from "react-infinite-scroll-component"

const ProductsComponent = () => {

  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(16)
  const [more, setMore] = useState<boolean>(true)

  function getProducts(){
    setLoading(true)
    axios.get(`https://dummyjson.com/products?limit=${limit}`).then((res:any)=>{
      setProducts(
        res.data.products.map((resData:any)=>{
          return {
            id: resData.id,
            title: resData.title,
            description: resData.description,
            category: resData.category,
            price: resData.price,
            discountPercentage: resData.discountPercentage,
            rating: resData.rating,
            stock: resData.stock,
            tags: resData.tags,
            brand: resData.brand,
            sku: resData.sku,
            weight: resData.weight,
            dimensions: {
              width: resData.dimensions.width,
              height: resData.dimensions.height,
              depth: resData.dimensions.depth
            },
            warrantyInformation: resData.warrantyInformation,
            shippingInformation: resData.shippingInformation,
            availabilityStatus: resData.availabilityStatus,
            reviews: resData.reviews,
            returnPolicy: resData.returnPolicy,
            minimumOrderQuantity: resData.minimumOrderQuantity,
            meta: {
              createdAt: resData.meta.createdAt,
              updatedAt: resData.meta.updatedAt,
              barcode: resData.meta.barcode,
              qrCode: resData.meta.qrCode
            },
            images: resData.images,
            thumbnail: resData.thumbnail
          }
        })
      )
      if(res.data.limit === res.data.total){
        setMore(false)
      }
      setLimit(limit+4)
    }).catch((err:any)=>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={getProducts}
      hasMore={more}
      loader={
        <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100%">
          <LoadingComponent/>
        </Box>
      }
    >
      <Box display="flex" flexDir="row" flexWrap="wrap">
        {products.map((product:ProductType)=>{
          return (
            <ProductComponent key={product.id} product={product}/>
          )
        })}
      </Box>
    </InfiniteScroll>
  )
}

export default ProductsComponent